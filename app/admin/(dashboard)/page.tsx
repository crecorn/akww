import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  AlertCircle,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react'

async function getStats() {
  const supabase = await createClient()
  
  // Get submission counts
  const { count: totalSubmissions } = await supabase
    .from('form_submissions')
    .select('*', { count: 'exact', head: true })

  // Get today's submissions
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const { count: todaySubmissions } = await supabase
    .from('form_submissions')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', today.toISOString())

  // Get this week's submissions
  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
  const { count: weekSubmissions } = await supabase
    .from('form_submissions')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', weekAgo.toISOString())

  return {
    totalSubmissions: totalSubmissions || 0,
    todaySubmissions: todaySubmissions || 0,
    weekSubmissions: weekSubmissions || 0,
  }
}

async function getRecentSubmissions() {
  const supabase = await createClient()
  
  const { data } = await supabase
    .from('form_submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  return data || []
}

export default async function AdminDashboard() {
  const stats = await getStats()
  const recentSubmissions = await getRecentSubmissions()

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.totalSubmissions}</p>
              <p className="text-sm text-slate-500">Total Submissions</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.weekSubmissions}</p>
              <p className="text-sm text-slate-500">This Week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.todaySubmissions}</p>
              <p className="text-sm text-slate-500">Today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h2 className="font-bold text-slate-900">Recent Submissions</h2>
          <Link
            href="/admin/submissions"
            className="text-sm text-[var(--color-primary)] hover:underline flex items-center gap-1"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {recentSubmissions.length === 0 ? (
          <div className="p-12 text-center">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">No submissions yet</p>
            <p className="text-sm text-slate-400">Form submissions will appear here</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-200">
            {recentSubmissions.map((submission) => (
              <div key={submission.id} className="p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900">
                      {submission.first_name} {submission.last_name}
                    </p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                      {submission.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {submission.phone}
                        </span>
                      )}
                      {submission.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {submission.email}
                        </span>
                      )}
                    </div>
                    {submission.service_interest && (
                      <span className="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {submission.service_interest}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">
                      {new Date(submission.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                      {submission.form_type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/admin/submissions"
          className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group"
        >
          <h3 className="font-bold text-slate-900 group-hover:text-[var(--color-primary)]">
            View All Submissions
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            See and manage all form submissions
          </p>
        </Link>

        <Link
          href="/"
          target="_blank"
          className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group"
        >
          <h3 className="font-bold text-slate-900 group-hover:text-[var(--color-primary)]">
            View Live Site
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Open the website in a new tab
          </p>
        </Link>

        <Link
          href="/contact"
          target="_blank"
          className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group"
        >
          <h3 className="font-bold text-slate-900 group-hover:text-[var(--color-primary)]">
            Test Contact Form
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Submit a test form to verify it works
          </p>
        </Link>
      </div>
    </div>
  )
}
