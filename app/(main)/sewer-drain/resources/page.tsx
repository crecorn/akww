import { Metadata } from 'next'
import Link from 'next/link'
import {
  HelpCircle,
  Video,
  AlertTriangle,
  Droplets,
  TreeDeciduous,
  Shield,
  Clock
} from 'lucide-react'
import { BookNowButton } from '@/components/ui/book-now-button'

export const metadata: Metadata = {
  title: 'Sewer & Drain Resources | AK Water Works',
  description: 'Helpful guides, tips, and FAQs about sewer and drain maintenance. Learn how to prevent clogs and maintain your drainage system.',
}

const guides = [
  {
    title: 'Preventing Kitchen Drain Clogs',
    description: 'Simple habits that keep your kitchen drains flowing freely.',
    icon: Droplets,
    category: 'Prevention',
  },
  {
    title: 'Tree Roots and Your Sewer Line',
    description: 'Understanding how roots damage pipes and what to do about it.',
    icon: TreeDeciduous,
    category: 'Education',
  },
  {
    title: 'Signs You Need a Camera Inspection',
    description: 'When to call for professional pipe inspection.',
    icon: Video,
    category: 'Diagnostics',
  },
  {
    title: 'Septic System Care Guide',
    description: 'Keep your septic system healthy for decades.',
    icon: Shield,
    category: 'Maintenance',
  },
]

const faqs = [
  {
    question: 'What should never go down the drain?',
    answer: 'Avoid flushing grease/oil, coffee grounds, eggshells, "flushable" wipes, feminine products, medications, and hair. These are the most common causes of clogs.',
  },
  {
    question: 'How do I know if my sewer line is clogged?',
    answer: 'Multiple slow drains, gurgling sounds, sewage odors, and water backing up in unusual places (like the tub when you flush) all indicate a main line problem.',
  },
  {
    question: 'Is it safe to use chemical drain cleaners?',
    answer: 'We don\'t recommend them. They can corrode pipes, harm the environment, and often don\'t work on serious clogs. Mechanical cleaning is safer and more effective.',
  },
  {
    question: 'How often should I clean my drains?',
    answer: 'Professionally, every 1-2 years for prevention. More often if you have older pipes, lots of trees, or a history of clogs. Run hot water after each use for daily maintenance.',
  },
  {
    question: 'What\'s the difference between a clog and a sewer line problem?',
    answer: 'A clog typically affects one drain. Sewer line issues affect multiple drains and may include sewage backups. Camera inspection can determine which you have.',
  },
  {
    question: 'Do you offer emergency drain service?',
    answer: 'Yes! We provide 24/7 emergency service for sewage backups and serious drain issues. Call anytime for immediate assistance.',
  },
]

const tips = [
  'Run hot water for 30 seconds after using the sink',
  'Use drain screens to catch hair and debris',
  'Never pour grease down the drain - collect it and throw it away',
  'Flush drains monthly with baking soda and vinegar',
  'Know where your main cleanout is located',
  'Schedule regular professional inspections',
]

export default function SewerDrainResourcesPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Sewer & Drain Resources
          </h1>
          <p className="text-lg text-slate-600">
            Helpful guides and answers to keep your drains healthy
          </p>
        </div>
        {/* Jack Standing - for visual interest */}
        <img 
          src="/images/Jack Standing.svg" 
          alt="" 
          className="h-20 md:h-28 w-auto hidden sm:block"
          aria-hidden="true"
        />
      </header>

      {/* Quick Tips */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Droplets className="w-5 h-5 text-[var(--color-primary)]" />
          Quick Prevention Tips
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-center gap-3 text-slate-700">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center font-bold">
                {index + 1}
              </span>
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Guides & Articles
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-wide">
                        {guide.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 bg-amber-100 text-amber-700 rounded">
                        <Clock className="w-3 h-3" />
                        Coming Soon
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900">{guide.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{guide.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <p className="text-center text-slate-500 mt-6 text-sm">
          Want to be notified when guides are available?{' '}
          <Link href="/sewer-drain/contact" className="text-[var(--color-primary)] font-medium hover:underline">
            Contact us
          </Link>{' '}
          to join our mailing list.
        </p>
      </section>

      {/* Warning Signs */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Emergency Warning Signs
            </h2>
            <p className="text-slate-600 mt-1">
              Call immediately if you experience:
            </p>
          </div>
        </div>
        <ul className="space-y-2 ml-10">
          <li className="text-slate-700">• Sewage backing up into your home</li>
          <li className="text-slate-700">• Strong sewage smell inside or outside</li>
          <li className="text-slate-700">• Multiple drains clogged simultaneously</li>
          <li className="text-slate-700">• Water coming up through floor drains</li>
          <li className="text-slate-700">• Gurgling sounds when using water</li>
        </ul>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Have a Drain Question?</h2>
        <p className="text-blue-100 mb-6">
          Our team is happy to answer questions and provide free estimates.
        </p>
        <BookNowButton 
          variant="ghost" 
          size="lg"
          className="bg-white text-[var(--color-primary)] hover:bg-blue-50"
        >
          Book Now
        </BookNowButton>
      </section>
    </div>
  )
}
