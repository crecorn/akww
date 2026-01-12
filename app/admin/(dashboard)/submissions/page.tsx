import { createClient } from '@/lib/supabase/server'
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

async function getSubmissions(page = 1, perPage = 20) {
  const supabase = await createClient()
  
  const from = (page - 1) * perPage
  const to = from + perPage - 1

  const { data, count } = await supabase
    .from('form_submissions')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  return {
    submissions: data || [],
    total: count || 0,
    page,
    perPage,
    totalPages: Math.ceil((count || 0) / perPage),
  }
}

export default async function SubmissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const page = parseInt(params.page || '1', 10)
  const { submissions, total, totalPages } = await getSubmissions(page)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Form Submissions</h1>
          <p className="text-slate-600">{total} total submissions</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {submissions.length === 0 ? (
          <div className="p-12 text-center">
            <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">No submissions yet</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-slate-900">
                            {submission.first_name} {submission.last_name}
                          </p>
                          <div className="flex flex-col gap-1 mt-1 text-sm text-slate-500">
                            {submission.phone && (
                              <a href={`tel:${submission.phone}`} className="flex items-center gap-1 hover:text-[var(--color-primary)]">
                                <Phone className="w-3 h-3" />
                                {submission.phone}
                              </a>
                            )}
                            {submission.email && (
                              <a href={`mailto:${submission.email}`} className="flex items-center gap-1 hover:text-[var(--color-primary)]">
                                <Mail className="w-3 h-3" />
                                {submission.email}
                              </a>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {submission.service_interest ? (
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {submission.service_interest}
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                            {submission.form_type}
                          </span>
                          {submission.source_page && (
                            <p className="text-slate-400 text-xs mt-1">{submission.source_page}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-500">
                          <p>{new Date(submission.created_at).toLocaleDateString()}</p>
                          <p className="text-xs text-slate-400">
                            {new Date(submission.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600 max-w-xs truncate">
                          {submission.message || '—'}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden divide-y divide-slate-200">
              {submissions.map((submission) => (
                <div key={submission.id} className="p-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-medium text-slate-900">
                        {submission.first_name} {submission.last_name}
                      </p>
                      {submission.service_interest && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {submission.service_interest}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">
                        {new Date(submission.created_at).toLocaleDateString()}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                        {submission.form_type}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    {submission.phone && (
                      <a href={`tel:${submission.phone}`} className="flex items-center gap-2 text-slate-600">
                        <Phone className="w-4 h-4 text-slate-400" />
                        {submission.phone}
                      </a>
                    )}
                    {submission.email && (
                      <a href={`mailto:${submission.email}`} className="flex items-center gap-2 text-slate-600">
                        <Mail className="w-4 h-4 text-slate-400" />
                        {submission.email}
                      </a>
                    )}
                    {submission.message && (
                      <p className="text-slate-500 pt-2 border-t border-slate-100">
                        {submission.message}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Page {page} of {totalPages}
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={page > 1 ? `?page=${page - 1}` : '#'}
                    className={`p-2 rounded-lg border ${
                      page > 1 
                        ? 'border-slate-200 hover:bg-slate-50 text-slate-600' 
                        : 'border-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </a>
                  <a
                    href={page < totalPages ? `?page=${page + 1}` : '#'}
                    className={`p-2 rounded-lg border ${
                      page < totalPages 
                        ? 'border-slate-200 hover:bg-slate-50 text-slate-600' 
                        : 'border-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
