import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, BookOpen, FileText, CheckCircle2, ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Commercial Plumbing Resources | AK Water Works',
  description: 'Helpful guides, maintenance tips, and information for commercial property managers and business owners about plumbing systems.',
}

const guides = [
  {
    title: 'Commercial Plumbing Maintenance Checklist',
    description: 'Essential maintenance tasks to keep your commercial plumbing running smoothly year-round.',
    category: 'Maintenance',
  },
  {
    title: 'Emergency Plumbing Preparedness',
    description: 'How to prepare your business for plumbing emergencies and minimize downtime.',
    category: 'Emergency',
  },
  {
    title: 'Water Conservation for Businesses',
    description: 'Tips and upgrades that can reduce water usage and lower utility costs.',
    category: 'Efficiency',
  },
  {
    title: 'Signs Your Commercial Plumbing Needs Attention',
    description: 'Warning signs that indicate it\'s time to call a professional.',
    category: 'Troubleshooting',
  },
]

const faqs = [
  {
    q: 'What commercial plumbing services do you offer?',
    a: 'We provide complete commercial plumbing including new construction, maintenance programs, emergency repairs, industrial plumbing, and municipal services.',
  },
  {
    q: 'Do you offer 24/7 emergency service for businesses?',
    a: 'Yes, we provide round-the-clock emergency plumbing service for commercial clients. Call our emergency line anytime.',
  },
  {
    q: 'Can you work around our business hours?',
    a: 'Absolutely. We offer flexible scheduling including nights and weekends to minimize disruption to your operations.',
  },
  {
    q: 'Do you service industrial facilities?',
    a: 'Yes, we have experience with manufacturing plants, warehouses, and industrial facilities of all sizes.',
  },
]

export default function CommercialResourcesPage() {
  return (
    <div className="space-y-12">
      <header>
        <div className="flex items-center gap-2 text-[var(--color-primary)] mb-2">
          <Building2 className="w-5 h-5" />
          <span className="font-medium">Commercial Services</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Commercial Plumbing Resources
        </h1>
        <p className="text-lg text-slate-600">
          Helpful information for property managers and business owners.
        </p>
      </header>

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
      <section className="bg-slate-100 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Have Questions?
        </h2>
        <p className="text-slate-600 mb-6">
          Our commercial team is happy to discuss your project or answer any questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
          <Link
            href="/commercial/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Request Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
