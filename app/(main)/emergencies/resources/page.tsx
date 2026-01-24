import { Metadata } from 'next'
import Link from 'next/link'
import { Waves, BookOpen, FileText, CheckCircle2, ArrowRight, Phone, AlertTriangle } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Water Damage & Waterproofing Resources | AK Water Works',
  description: 'Helpful guides, tips, and information about water damage recovery, basement waterproofing, and moisture control.',
}

const guides = [
  {
    title: 'What to Do When You Discover Water Damage',
    description: 'Step-by-step guide for the first 24 hours after discovering water in your home.',
    category: 'Emergency',
  },
  {
    title: 'Signs Your Basement Needs Waterproofing',
    description: 'Warning signs that indicate moisture problems and when to take action.',
    category: 'Prevention',
  },
  {
    title: 'Understanding Your Waterproofing Options',
    description: 'Interior vs. exterior waterproofing, French drains, sump pumps, and more.',
    category: 'Education',
  },
  {
    title: 'Crawl Space Moisture Control Guide',
    description: 'How encapsulation protects your home and improves air quality.',
    category: 'Prevention',
  },
  {
    title: 'Insurance Claims for Water Damage',
    description: 'How to document damage and work with your insurance company.',
    category: 'Insurance',
  },
  {
    title: 'Preventing Mold After Water Damage',
    description: 'Time-sensitive steps to prevent mold growth after flooding.',
    category: 'Health',
  },
]

const faqs = [
  {
    q: 'How quickly can you respond to water emergencies?',
    a: 'We offer 24/7 emergency response with typical arrival times of 60 minutes or less in our service area.',
  },
  {
    q: 'Do you work with insurance companies?',
    a: 'Yes, we work directly with all major insurance companies and can help document damage for your claim.',
  },
  {
    q: 'How long does basement waterproofing take?',
    a: 'Most interior waterproofing projects are completed in 1-3 days depending on the size and scope of work.',
  },
  {
    q: 'What warranty do you offer on waterproofing?',
    a: 'We offer a lifetime transferable warranty on our basement waterproofing systems.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes, we offer flexible financing options for waterproofing and recovery projects.',
  },
]

export default function EmergencyResourcesPage() {
  return (
    <div className="space-y-12">
      <header>
        <div className="flex items-center gap-2 text-[var(--color-primary)] mb-2">
          <Waves className="w-5 h-5" />
          <span className="font-medium">Emergency Services</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Water Damage & Waterproofing Resources
        </h1>
        <p className="text-lg text-slate-600">
          Helpful information to protect your home from water damage.
        </p>
      </header>

      {/* Emergency Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
        <div className="flex-1">
          <h2 className="font-bold text-red-800">Have Active Water Damage?</h2>
          <p className="text-red-700 text-sm mt-1">
            Don't wait - call immediately for 24/7 emergency response.
          </p>
        </div>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>

      {/* Guides */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
          Guides & Articles
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">{guide.category}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">{guide.title}</h3>
              <p className="text-slate-600 text-sm">{guide.description}</p>
              <div className="mt-4 flex items-center gap-1 text-[var(--color-primary)] font-medium text-sm">
                Coming Soon <FileText className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-slate-600 ml-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">
          Need Help With Water Damage or Waterproofing?
        </h2>
        <p className="text-blue-100 mb-6">
          Our team is ready to help. Free estimates on waterproofing projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
          <Link
            href="/emergencies/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Schedule Free Estimate <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
