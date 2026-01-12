import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  ArrowLeft,
  Clock,
  Shield,
  AlertTriangle,
  Droplets,
  Construction,
  Video,
  Waves,
  TreeDeciduous,
  Container
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { SewerDrainCTA } from '@/components/sewer-drain/cta-buttons'

// Service data - in production, this could come from a CMS
const servicesData: Record<string, {
  title: string
  description: string
  longDescription: string
  iconName: string
  benefits: string[]
  process: { step: number; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}> = {
  'drain-cleaning': {
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning for clogged sinks, tubs, and floor drains.',
    longDescription: 'Our professional drain cleaning service uses advanced techniques to clear even the toughest clogs. From kitchen sinks to floor drains, we restore proper flow and help prevent future blockages.',
    iconName: 'Droplets',
    benefits: [
      'Clears stubborn clogs that plungers can\'t fix',
      'Removes buildup that causes slow drains',
      'Eliminates foul odors from drains',
      'Prevents future clogs with thorough cleaning',
      'Safe for all pipe types',
      'Fast, same-day service available',
    ],
    process: [
      { step: 1, title: 'Inspection', description: 'We assess the clog location and severity' },
      { step: 2, title: 'Method Selection', description: 'Choose the right tool: snake, auger, or hydro jet' },
      { step: 3, title: 'Clearing', description: 'Remove the clog and flush the line' },
      { step: 4, title: 'Testing', description: 'Verify proper flow is restored' },
    ],
    faqs: [
      { question: 'How much does drain cleaning cost?', answer: 'Basic drain cleaning starts at $99. Complex clogs or main line cleaning may cost more. We provide upfront pricing before any work begins.' },
      { question: 'Can I use chemical drain cleaners?', answer: 'We don\'t recommend them. Chemical cleaners can damage pipes and are often ineffective on serious clogs. Professional cleaning is safer and more thorough.' },
      { question: 'How often should drains be cleaned?', answer: 'For prevention, we recommend professional cleaning every 1-2 years, or immediately when you notice slow draining.' },
    ],
  },
  'sewer-line-repair': {
    title: 'Sewer Line Repair',
    description: 'Expert sewer line repair and replacement using trenchless technology.',
    longDescription: 'When your main sewer line fails, you need fast, effective repairs. We offer both traditional and trenchless repair methods to fix cracked, collapsed, or root-damaged sewer lines with minimal disruption to your property.',
    iconName: 'Construction',
    benefits: [
      'Trenchless options save your landscaping',
      'Permanent solutions, not temporary fixes',
      'Camera inspection included',
      'All work permitted and inspected',
      'Lifetime warranty on new lines',
      '24/7 emergency repairs available',
    ],
    process: [
      { step: 1, title: 'Camera Inspection', description: 'Video inspection to locate and assess damage' },
      { step: 2, title: 'Diagnosis', description: 'Determine the best repair method for your situation' },
      { step: 3, title: 'Repair', description: 'Traditional dig or trenchless pipe lining/bursting' },
      { step: 4, title: 'Verification', description: 'Final camera inspection to confirm repair success' },
    ],
    faqs: [
      { question: 'What is trenchless sewer repair?', answer: 'Trenchless methods repair or replace sewer lines without digging up your yard. We use pipe lining (cured-in-place pipe) or pipe bursting to install new lines through existing access points.' },
      { question: 'How long does sewer line repair take?', answer: 'Simple repairs can be completed in one day. Full line replacements typically take 1-3 days depending on the method and length of pipe.' },
      { question: 'Will I need to leave my home during repairs?', answer: 'Usually no. Most repairs allow you to stay home, though you may have limited water use during certain phases.' },
    ],
  },
  'sewer-camera-inspection': {
    title: 'Camera Inspection',
    description: 'Video camera inspection to locate blockages, cracks, and damage.',
    longDescription: 'Our high-definition sewer cameras let us see exactly what\'s happening inside your pipes. We can locate blockages, identify damage, and assess pipe condition without any digging.',
    iconName: 'Video',
    benefits: [
      'See inside your pipes in real-time',
      'Accurately locate problems',
      'Avoid unnecessary digging',
      'Document pipe condition',
      'Essential before buying a home',
      'Recording provided for your records',
    ],
    process: [
      { step: 1, title: 'Access', description: 'Insert camera through cleanout or drain' },
      { step: 2, title: 'Inspection', description: 'Navigate camera through entire line' },
      { step: 3, title: 'Documentation', description: 'Mark locations and record findings' },
      { step: 4, title: 'Report', description: 'Review footage and discuss recommendations' },
    ],
    faqs: [
      { question: 'When do I need a camera inspection?', answer: 'Before buying a home, when you have recurring clogs, after sewer line repair, or if you smell sewage but can\'t find the source.' },
      { question: 'How far can the camera see?', answer: 'Our cameras can inspect lines up to 200+ feet, covering most residential sewer lines from house to street.' },
      { question: 'Do I get a copy of the video?', answer: 'Yes! We provide a digital recording of the inspection for your records.' },
    ],
  },
  'hydro-jetting': {
    title: 'Hydro Jetting',
    description: 'High-pressure water jetting to clear stubborn clogs and buildup.',
    longDescription: 'Hydro jetting uses high-pressure water (up to 4,000 PSI) to blast away grease, scale, roots, and debris. It\'s the most thorough drain cleaning method available and leaves pipes like new.',
    iconName: 'Waves',
    benefits: [
      'Clears 100% of buildup, not just the clog',
      'Cuts through tree roots',
      'Removes grease and scale completely',
      'Environmentally friendly - just water',
      'Extends time between cleanings',
      'Safe for most pipe types',
    ],
    process: [
      { step: 1, title: 'Camera Inspection', description: 'Assess pipe condition and locate blockages' },
      { step: 2, title: 'Access Setup', description: 'Insert jetting hose through cleanout' },
      { step: 3, title: 'Jetting', description: 'High-pressure water scours pipe walls' },
      { step: 4, title: 'Final Inspection', description: 'Camera verification that line is clear' },
    ],
    faqs: [
      { question: 'Is hydro jetting safe for old pipes?', answer: 'We always camera inspect first. Hydro jetting is safe for most pipes, but severely deteriorated pipes may need repair first.' },
      { question: 'How is hydro jetting different from snaking?', answer: 'Snaking punches through clogs. Hydro jetting cleans the entire pipe wall, removing all buildup and restoring full pipe capacity.' },
      { question: 'How often should I get hydro jetting?', answer: 'For restaurants or commercial kitchens, annually. For homes, every 2-4 years or when buildup causes slow drains.' },
    ],
  },
  'root-removal': {
    title: 'Root Removal',
    description: 'Remove tree roots infiltrating your sewer lines.',
    longDescription: 'Tree roots seek out sewer lines for water and nutrients. Once inside, they grow rapidly and cause blockages. We remove roots mechanically and can treat lines to prevent regrowth.',
    iconName: 'TreeDeciduous',
    benefits: [
      'Mechanical cutting removes roots completely',
      'Root treatment prevents regrowth',
      'Camera inspection to assess damage',
      'Can prevent costly line replacement',
      'Regular maintenance programs available',
      'Works on all pipe types',
    ],
    process: [
      { step: 1, title: 'Camera Assessment', description: 'Locate root intrusion points' },
      { step: 2, title: 'Root Cutting', description: 'Mechanical auger cuts roots from pipe walls' },
      { step: 3, title: 'Flushing', description: 'Remove cut roots and debris' },
      { step: 4, title: 'Treatment', description: 'Apply root inhibitor to slow regrowth' },
    ],
    faqs: [
      { question: 'Will root removal damage my trees?', answer: 'No. We only remove roots inside the pipe. The tree\'s main root system is unaffected.' },
      { question: 'How often do roots come back?', answer: 'Without treatment, 6-12 months. With root treatment, 2-5 years. Eventually, pipe repair or lining may be needed for a permanent solution.' },
      { question: 'Should I remove trees near my sewer line?', answer: 'Not necessarily. Proper pipe repair (like trenchless lining) creates a root-proof barrier. We can advise based on your specific situation.' },
    ],
  },
  'septic-services': {
    title: 'Septic Services',
    description: 'Septic tank pumping, inspection, and maintenance.',
    longDescription: 'Keep your septic system running smoothly with regular pumping and maintenance. We provide complete septic services including pumping, inspections, repairs, and system evaluations.',
    iconName: 'Container',
    benefits: [
      'Prevent costly system failures',
      'Required for home sales in many areas',
      'Extend system lifespan',
      'Protect your property and groundwater',
      'Flexible scheduling',
      'Maintenance reminders available',
    ],
    process: [
      { step: 1, title: 'Locate & Access', description: 'Find and uncover the tank' },
      { step: 2, title: 'Inspection', description: 'Check tank condition, baffles, and levels' },
      { step: 3, title: 'Pumping', description: 'Remove solids and liquids from tank' },
      { step: 4, title: 'Documentation', description: 'Provide service record and recommendations' },
    ],
    faqs: [
      { question: 'How often should I pump my septic tank?', answer: 'Every 3-5 years for most households. More frequently for larger families or garbage disposal use.' },
      { question: 'What are signs my septic needs service?', answer: 'Slow drains, sewage odors, wet spots in yard, or lush grass over the drain field can indicate it\'s time for service.' },
      { question: 'Do you do septic inspections for home sales?', answer: 'Yes! We provide detailed inspection reports accepted by most lenders and required by many counties.' },
    ],
  },
}

const iconMap: Record<string, any> = {
  Droplets,
  Construction,
  Video,
  Waves,
  TreeDeciduous,
  Container,
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  
  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.title} | Sewer & Drain Services | AK Water Works`,
    description: service.longDescription,
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default async function SewerDrainServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.iconName] || Droplets

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/sewer-drain" className="text-slate-500 hover:text-[var(--color-primary)]">
          Sewer & Drain
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-slate-900 font-medium">{service.title}</span>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-[var(--color-primary)] to-blue-800 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-blue-200 text-sm font-medium">Sewer & Drain Services</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {service.title}
        </h1>
        <p className="text-lg text-blue-100 mb-6 max-w-2xl">
          {service.longDescription}
        </p>
        <SewerDrainCTA service={service.title} />
      </header>

      {/* Image Gallery Placeholders */}
      <section className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              className="flex-shrink-0 w-[280px] md:w-auto snap-center"
            >
              <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Image {num}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-3 md:hidden">
          <span className="text-xs text-slate-400">← Swipe to see more →</span>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
          Benefits of Professional {service.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
          Our {service.title} Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.process.map((step) => (
            <div key={step.step} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.step}
              </div>
              <h3 className="font-semibold text-slate-900 mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-100 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-6">
            Contact us today to schedule {service.title.toLowerCase()} service. 
            Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SewerDrainCTA variant="emergency" service={service.title} />
          </div>
        </div>
      </section>
    </div>
  )
}
