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
  Award,
  Droplets,
  Home,
  Waves,
  PenTool
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

// Service data - in production this would come from Supabase
const servicesData: Record<string, {
  title: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  intro: string
  benefits: string[]
  process: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  icon: React.ElementType
}> = {
  'basement-waterproofing': {
    title: 'Basement Waterproofing',
    metaTitle: 'Basement Waterproofing Services Warren & Youngstown OH',
    metaDescription: 'Professional basement waterproofing in Northeast Ohio. Interior & exterior solutions, lifetime warranty. Free estimates. Call AK Water Works.',
    heroTitle: 'Basement Waterproofing',
    heroSubtitle: 'Interior & exterior solutions to keep your basement dry permanently',
    intro: 'A wet basement isn\'t just an inconvenience—it\'s a threat to your home\'s foundation and your family\'s health. AK Water Works provides comprehensive basement waterproofing solutions that address water problems at their source, not just the symptoms.',
    benefits: [
      'Lifetime transferable warranty on all systems',
      'Interior and exterior waterproofing options',
      'Professional-grade drainage systems',
      'Mold and mildew prevention',
      'Increased home value and usable space',
      'Financing options available',
    ],
    process: [
      { title: 'Inspection', description: 'We thoroughly inspect your basement to identify all water entry points and underlying issues.' },
      { title: 'Custom Design', description: 'We design a waterproofing system tailored to your specific situation and budget.' },
      { title: 'Installation', description: 'Our certified technicians install your system with minimal disruption to your home.' },
      { title: 'Warranty', description: 'Your system is backed by our lifetime transferable warranty for complete peace of mind.' },
    ],
    faqs: [
      { question: 'How much does basement waterproofing cost?', answer: 'Costs vary based on the size of your basement, severity of the water problem, and solution required. We provide free estimates with transparent pricing.' },
      { question: 'How long does waterproofing take?', answer: 'Most basement waterproofing projects are completed in 1-3 days, depending on the scope of work.' },
      { question: 'Will waterproofing disrupt my daily life?', answer: 'We work efficiently to minimize disruption. Most homeowners can continue their daily routines during installation.' },
    ],
    icon: Home,
  },
  'foundation-crack-repair': {
    title: 'Foundation Crack Repair',
    metaTitle: 'Foundation Crack Repair Services Northeast Ohio',
    metaDescription: 'Expert foundation and wall crack repair in Warren, Youngstown & Northeast Ohio. Structural repairs & waterproofing. Free inspections.',
    heroTitle: 'Foundation Crack Repair',
    heroSubtitle: 'Stop water intrusion and prevent structural damage',
    intro: 'Foundation cracks are more than cosmetic issues—they\'re pathways for water to enter your basement and can indicate structural problems. Our expert technicians repair foundation cracks using proven methods that last.',
    benefits: [
      'Prevents water infiltration',
      'Stops crack progression',
      'Preserves structural integrity',
      'Multiple repair methods available',
      'Interior and exterior solutions',
      'Long-lasting results',
    ],
    process: [
      { title: 'Assessment', description: 'We evaluate the type, location, and cause of your foundation cracks.' },
      { title: 'Method Selection', description: 'We choose the best repair method: injection, excavation, or carbon fiber reinforcement.' },
      { title: 'Repair', description: 'Our technicians perform the repair using professional-grade materials.' },
      { title: 'Verification', description: 'We verify the repair is complete and provide care instructions.' },
    ],
    faqs: [
      { question: 'Are foundation cracks serious?', answer: 'It depends on the type and size. Hairline cracks are often normal settling, but wider or horizontal cracks may indicate structural issues.' },
      { question: 'What causes foundation cracks?', answer: 'Common causes include soil settlement, hydrostatic pressure, freeze-thaw cycles, and poor drainage.' },
      { question: 'How do you repair foundation cracks?', answer: 'We use several methods including epoxy/polyurethane injection, exterior excavation and sealing, or carbon fiber reinforcement for structural cracks.' },
    ],
    icon: Shield,
  },
  'sump-pump-services': {
    title: 'Sump Pump Services',
    metaTitle: 'Sump Pump Installation & Repair Northeast Ohio',
    metaDescription: 'Professional sump pump installation, repair & maintenance in Warren, Youngstown & Northeast Ohio. Battery backup systems. 24/7 emergency service.',
    heroTitle: 'Sump Pump Services',
    heroSubtitle: 'Installation, repair & battery backup systems',
    intro: 'Your sump pump is your basement\'s last line of defense against flooding. AK Water Works provides expert sump pump installation, repair, and maintenance to ensure your pump works when you need it most.',
    benefits: [
      '24/7 emergency sump pump repair',
      'Battery backup systems for power outages',
      'High-capacity pumps for heavy water flow',
      'Cast iron pumps for durability',
      'Annual maintenance programs',
      'Quick response times',
    ],
    process: [
      { title: 'Evaluation', description: 'We assess your current pump, pit, and discharge system.' },
      { title: 'Recommendation', description: 'We recommend the right pump size and backup options for your needs.' },
      { title: 'Installation', description: 'We install your new pump with proper pit preparation and discharge routing.' },
      { title: 'Testing', description: 'We thoroughly test the system and show you how it operates.' },
    ],
    faqs: [
      { question: 'How often should I replace my sump pump?', answer: 'Most sump pumps last 7-10 years. We recommend replacement before failure to avoid flooding.' },
      { question: 'Do I need a battery backup?', answer: 'We highly recommend battery backup systems. Power outages often occur during storms—exactly when you need your pump most.' },
      { question: 'Why is my sump pump running constantly?', answer: 'This could indicate a stuck switch, underground spring, or undersized pump. Contact us for an evaluation.' },
    ],
    icon: Waves,
  },
  'crawl-space-encapsulation': {
    title: 'Crawl Space Encapsulation',
    metaTitle: 'Crawl Space Encapsulation Services Northeast Ohio',
    metaDescription: 'Professional crawl space encapsulation & vapor barriers in Warren, Youngstown & Northeast Ohio. Moisture control & energy savings.',
    heroTitle: 'Crawl Space Encapsulation',
    heroSubtitle: 'Complete moisture control for healthier indoor air',
    intro: 'Your crawl space affects your entire home\'s air quality, energy efficiency, and structural health. Our encapsulation systems seal out moisture, prevent mold growth, and create a clean, dry space beneath your home.',
    benefits: [
      'Eliminates musty odors',
      'Prevents mold and mildew growth',
      'Reduces energy costs',
      'Protects floor joists and structure',
      'Improves indoor air quality',
      'Keeps pests out',
    ],
    process: [
      { title: 'Inspection', description: 'We inspect your crawl space for moisture, damage, and ventilation issues.' },
      { title: 'Preparation', description: 'We address any existing mold, standing water, or debris.' },
      { title: 'Encapsulation', description: 'We install vapor barriers, seal vents, and add drainage if needed.' },
      { title: 'Dehumidification', description: 'We install a dehumidifier to maintain optimal humidity levels.' },
    ],
    faqs: [
      { question: 'What is crawl space encapsulation?', answer: 'Encapsulation involves sealing your crawl space with heavy-duty vapor barriers, closing vents, and controlling humidity to prevent moisture problems.' },
      { question: 'How much does encapsulation cost?', answer: 'Costs depend on crawl space size and condition. We provide free estimates with detailed scope of work.' },
      { question: 'Will encapsulation help with energy bills?', answer: 'Yes! Encapsulation can reduce heating and cooling costs by preventing conditioned air from escaping through the floor.' },
    ],
    icon: PenTool,
  },
  'french-drains': {
    title: 'French Drain Systems',
    metaTitle: 'French Drain Installation Northeast Ohio',
    metaDescription: 'Professional French drain installation for basements & yards in Warren, Youngstown & Northeast Ohio. Interior & exterior drainage solutions.',
    heroTitle: 'French Drain Systems',
    heroSubtitle: 'Interior & exterior drainage solutions',
    intro: 'French drains are one of the most effective ways to redirect water away from your foundation. Whether you need an interior perimeter drain or exterior French drain system, we install drainage solutions that work.',
    benefits: [
      'Redirects water away from foundation',
      'Prevents hydrostatic pressure buildup',
      'Works with sump pump systems',
      'Interior and exterior options',
      'Low maintenance once installed',
      'Proven technology',
    ],
    process: [
      { title: 'Site Survey', description: 'We assess your property\'s grading, water flow patterns, and drainage needs.' },
      { title: 'System Design', description: 'We design a drain system to effectively capture and redirect water.' },
      { title: 'Excavation', description: 'We carefully excavate the trench, protecting your landscaping.' },
      { title: 'Installation', description: 'We install the drain pipe, gravel, and filter fabric, then restore the area.' },
    ],
    faqs: [
      { question: 'What\'s the difference between interior and exterior French drains?', answer: 'Interior drains are installed inside the basement along the perimeter. Exterior drains are buried outside along the foundation. Both redirect water to a sump pump or away from the house.' },
      { question: 'How deep are French drains installed?', answer: 'Depth varies. Interior drains are typically at footing level. Exterior drains are usually 18-24 inches deep or at footing level.' },
      { question: 'Do French drains require maintenance?', answer: 'French drains are low maintenance but should be inspected periodically to ensure they\'re not clogged.' },
    ],
    icon: Droplets,
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  
  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default async function WaterproofingServicePage({ params }: Props) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/waterproofing" className="text-slate-500 hover:text-[var(--color-primary)] flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          Back to Waterproofing
        </Link>
      </nav>

      {/* Hero */}
      <header className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-7 h-7 text-[var(--color-primary)]" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              {service.heroTitle}
            </h1>
            <p className="text-lg text-slate-600">{service.heroSubtitle}</p>
          </div>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          {service.intro}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {siteConfig.phone}
          </a>
          <Link
            href="/waterproofing/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold rounded-lg transition-colors"
          >
            Get Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </header>

      {/* Image Gallery - Scrollable on mobile */}
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
        {/* Scroll indicator for mobile */}
        <div className="flex justify-center gap-2 mt-3 md:hidden">
          <span className="text-xs text-slate-400">← Swipe to see more →</span>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
          Benefits of {service.title}
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
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
          Our Process
        </h2>
        <div className="space-y-6">
          {service.process.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {service.faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 last:border-0 pb-6 last:pb-0">
              <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
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
            Contact us today for a free {service.title.toLowerCase()} estimate. 
            Our experts will assess your situation and recommend the best solution.
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
              href="/waterproofing/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"
            >
              Schedule Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
