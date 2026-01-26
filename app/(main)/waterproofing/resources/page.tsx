import { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  FileText,
  HelpCircle,
  Video,
  ArrowRight,
  Droplets,
  AlertTriangle,
  DollarSign,
  Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Waterproofing Resources & Guides',
  description: 'Learn about basement waterproofing, foundation repair, and moisture control. Free guides, FAQs, and expert tips from AK Water Works.',
}

const guides = [
  {
    title: 'The Complete Guide to Basement Waterproofing',
    description: 'Everything you need to know about keeping your basement dry, from DIY tips to professional solutions.',
    icon: BookOpen,
    category: 'Guide',
  },
  {
    title: 'Understanding Foundation Cracks',
    description: 'Learn which cracks are cosmetic and which indicate serious structural issues requiring repair.',
    icon: AlertTriangle,
    category: 'Guide',
  },
  {
    title: 'Sump Pump Buyer\'s Guide',
    description: 'How to choose the right sump pump for your home, including backup options and sizing.',
    icon: Droplets,
    category: 'Guide',
  },
  {
    title: 'Crawl Space Health Checklist',
    description: 'A printable checklist to assess your crawl space condition and identify potential problems.',
    icon: FileText,
    category: 'Checklist',
  },
]

const faqs = [
  {
    question: 'How much does basement waterproofing cost?',
    answer: 'Basement waterproofing costs in Northeast Ohio typically range from $3,000 to $15,000+ depending on the size of your basement, the severity of the water problem, and the solution required. Interior drain systems are usually less expensive than exterior excavation. We provide free estimates with transparent, upfront pricing.',
  },
  {
    question: 'Is waterproofing covered by homeowners insurance?',
    answer: 'Standard homeowners insurance typically does not cover basement waterproofing or water damage from groundwater, seepage, or flooding. However, if water damage results from a covered event (like a burst pipe), repairs may be covered. We recommend checking with your insurance provider.',
  },
  {
    question: 'How long does waterproofing last?',
    answer: 'Professional waterproofing systems can last the lifetime of your home when properly installed and maintained. Our systems come with a lifetime transferable warranty, giving you and future homeowners peace of mind.',
  },
  {
    question: 'Can I waterproof my basement myself?',
    answer: 'Minor issues like improving grading or extending downspouts can be DIY projects. However, for persistent water problems, professional waterproofing is recommended. Improper DIY attempts can actually make problems worse and void warranties.',
  },
  {
    question: 'What\'s the difference between waterproofing and damp proofing?',
    answer: 'Damp proofing is a moisture-resistant coating applied during construction—it\'s not designed to withstand water pressure. Waterproofing involves comprehensive systems (drainage, sump pumps, membranes) designed to keep water out even under hydrostatic pressure.',
  },
  {
    question: 'Do I need a dehumidifier if I waterproof my basement?',
    answer: 'A dehumidifier is often recommended even with waterproofing, especially in humid climates like Northeast Ohio. Waterproofing prevents liquid water intrusion, but a dehumidifier controls humidity levels to prevent condensation and musty odors.',
  },
]

const videoResources = [
  {
    title: 'How Interior French Drains Work',
    duration: '3:45',
  },
  {
    title: 'Signs You Need Basement Waterproofing',
    duration: '5:12',
  },
  {
    title: 'Sump Pump Maintenance Tips',
    duration: '4:30',
  },
]

export default function WaterproofingResourcesPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Waterproofing Resources
            </h1>
            <p className="text-slate-600">Guides, FAQs, and expert advice</p>
          </div>
        </div>
        <p className="text-slate-700 max-w-2xl">
          Arm yourself with knowledge about basement waterproofing, foundation repair, and 
          moisture control. Our resources help you understand your options and make informed decisions.
        </p>
      </header>

      {/* Guides Grid */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[var(--color-primary)]" />
          Guides & Articles
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <guide.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-600">
                      {guide.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 bg-amber-100 text-amber-700 rounded">
                      <Clock className="w-3 h-3" />
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {guide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4 text-center">
          Want to be notified when guides are available?{' '}
          <Link href="/waterproofing/contact" className="text-[var(--color-primary)] font-medium hover:underline">
            Contact us
          </Link>{' '}
          to join our mailing list.
        </p>
      </section>

      {/* FAQs */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[var(--color-primary)]" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 last:border-0 pb-6 last:pb-0">
              <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Guide Callout */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
            <DollarSign className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Waterproofing Cost Calculator
            </h3>
            <p className="text-slate-300 mb-4">
              Get a rough estimate for your basement waterproofing project based on your 
              basement size and water problem severity.
            </p>
            <p className="text-sm text-slate-400 italic">
              Coming soon! For now, contact us for a free, no-obligation estimate.
            </p>
          </div>
          <Link
            href="/waterproofing/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors whitespace-nowrap"
          >
            Get Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Videos Section - Placeholder */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Video className="w-5 h-5 text-[var(--color-primary)]" />
          Video Resources
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {videoResources.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200"
            >
              <div className="aspect-video bg-slate-200 flex items-center justify-center">
                <Video className="w-12 h-12 text-slate-400" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 text-sm mb-1">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4 italic">
          Video content coming soon!
        </p>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8 text-white text-center">
        <img 
          src="/images/Jack Standing.svg" 
          alt="" 
          className="h-24 w-auto mx-auto mb-4 opacity-90"
          aria-hidden="true"
        />
        <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
        <p className="text-blue-100 mb-6 max-w-lg mx-auto">
          Our waterproofing experts are happy to answer your questions and help you 
          understand your options. No pressure, just helpful advice.
        </p>
        <Link
          href="/waterproofing/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
        >
          Contact Our Team
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  )
}
