import { Metadata } from 'next'
import Link from 'next/link'
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Video,
  ArrowRight,
  AlertTriangle,
  Wrench,
  Droplets,
  Flame
} from 'lucide-react'
import { BookNowButton } from '@/components/ui/book-now-button'

export const metadata: Metadata = {
  title: 'Plumbing Resources & Tips',
  description: 'Helpful plumbing tips, maintenance guides, and expert advice from AK Water Works. Learn how to prevent problems and when to call a pro.',
}

const guides = [
  {
    title: 'How to Prevent Frozen Pipes',
    description: 'Essential tips for protecting your pipes during Northeast Ohio winters.',
    icon: Droplets,
    category: 'Guide',
    readTime: '5 min read',
    href: '#',
  },
  {
    title: 'Signs You Need a New Water Heater',
    description: 'Know when it\'s time to repair vs. replace your water heater.',
    icon: Flame,
    category: 'Guide',
    readTime: '6 min read',
    href: '#',
  },
  {
    title: 'DIY vs. Call a Plumber',
    description: 'What you can fix yourself and when to call the professionals.',
    icon: Wrench,
    category: 'Guide',
    readTime: '7 min read',
    href: '#',
  },
  {
    title: 'Emergency Plumbing Checklist',
    description: 'What to do (and not do) when you have a plumbing emergency.',
    icon: AlertTriangle,
    category: 'Checklist',
    readTime: '4 min read',
    href: '#',
  },
]

const faqs = [
  {
    question: 'How do I shut off my water in an emergency?',
    answer: 'Locate your main water shut-off valve, usually near where the water line enters your home (basement, crawl space, or utility room). Turn the valve clockwise to shut off water. For individual fixtures, look for shut-off valves underneath sinks or behind toilets.',
  },
  {
    question: 'Why is my water bill suddenly high?',
    answer: 'A sudden increase in water bills usually indicates a leak. Check for running toilets (put food coloring in the tank—if it appears in the bowl without flushing, you have a leak), dripping faucets, or wet spots in your yard that could indicate an underground leak.',
  },
  {
    question: 'How can I prevent clogged drains?',
    answer: 'Use drain screens to catch hair and debris, never pour grease down the drain, run hot water after each use, and avoid putting coffee grounds, eggshells, or fibrous foods down the garbage disposal. Monthly enzyme treatments can also help.',
  },
  {
    question: 'What should I do if my pipes freeze?',
    answer: 'Keep the faucet open to relieve pressure, apply gentle heat with a hairdryer or heating pad (never use open flame), and work from the faucet toward the frozen section. If a pipe bursts, shut off the main water and call us immediately.',
  },
  {
    question: 'How often should I have my plumbing inspected?',
    answer: 'We recommend annual plumbing inspections for most homes. Older homes or those with a history of problems may benefit from more frequent inspections.',
  },
  {
    question: 'Is a dripping faucet really a big deal?',
    answer: 'Yes! A faucet dripping once per second wastes about 3,000 gallons per year. Beyond the water waste, dripping can cause staining and mineral buildup, and often indicates worn parts that will eventually fail completely.',
  },
]

const emergencyTips = [
  {
    title: 'Burst Pipe',
    steps: ['Shut off main water valve', 'Open faucets to drain pipes', 'Turn off electricity if water is near outlets', 'Call us immediately'],
  },
  {
    title: 'Overflowing Toilet',
    steps: ['Remove tank lid and push down the flapper', 'Turn off valve behind toilet', 'Don\'t flush again', 'Call if it won\'t stop'],
  },
  {
    title: 'No Hot Water',
    steps: ['Check if pilot light is lit (gas)', 'Check breaker (electric)', 'Wait 30 minutes after resetting', 'Call if still no hot water'],
  },
]

export default function PlumbingResourcesPage() {
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
              Plumbing Resources & Tips
            </h1>
            <p className="text-slate-600">Helpful guides and expert advice</p>
          </div>
        </div>
        <p className="text-slate-700 max-w-2xl">
          Learn how to prevent common plumbing problems, handle emergencies, and know when 
          it's time to call a professional. Our resources help you protect your home.
        </p>
      </header>

      {/* Emergency Quick Reference */}
      <section className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-bold text-red-900">Emergency Quick Reference</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {emergencyTips.map((emergency, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-slate-900 mb-3">{emergency.title}</h3>
              <ol className="space-y-2">
                {emergency.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {stepIndex + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Guides Grid */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[var(--color-primary)]" />
          Guides & Articles
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.href}
              className="group bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                  <guide.icon className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-600">
                      {guide.category}
                    </span>
                    <span className="text-xs text-slate-400">{guide.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {guide.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4 italic">
          More guides coming soon! Check back for new content.
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

      {/* Maintenance Checklist Callout */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Annual Plumbing Maintenance Checklist
            </h3>
            <p className="text-slate-300 mb-4">
              Download our free checklist to keep your plumbing in top shape year-round.
            </p>
            <p className="text-sm text-slate-400 italic">
              Coming soon! Sign up to be notified when it's available.
            </p>
          </div>
          <BookNowButton variant="primary" size="lg">
            Book Service
          </BookNowButton>
        </div>
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
          Our friendly team is happy to answer your plumbing questions. 
          No question is too small!
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
