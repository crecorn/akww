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
  Wrench,
  Flame,
  Construction,
  Droplets,
  Pipette
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { PlumbingCTA } from '@/components/plumbing/cta-buttons'

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
  'emergency-plumbing': {
    title: 'Emergency Plumbing',
    metaTitle: '24/7 Emergency Plumbing Services Warren & Youngstown OH',
    metaDescription: 'Emergency plumber available 24/7 in Northeast Ohio. Fast response for burst pipes, sewer backups, flooding & more. Call AK Water Works now.',
    heroTitle: '24/7 Emergency Plumbing',
    heroSubtitle: 'Fast response when you need it most',
    intro: 'Plumbing emergencies don\'t wait for business hours, and neither do we. AK Water Works provides round-the-clock emergency plumbing services throughout Northeast Ohio. When disaster strikes, our experienced plumbers arrive quickly with fully-stocked trucks to handle any emergency.',
    benefits: [
      '24/7 availability, 365 days a year',
      'Fast response times (usually under 1 hour)',
      'Fully stocked trucks for immediate repairs',
      'Upfront pricing, even for emergencies',
      'Licensed and insured technicians',
      'We handle all types of plumbing emergencies',
    ],
    process: [
      { title: 'Call Us', description: 'Call our emergency line and speak with a real person immediately.' },
      { title: 'Fast Dispatch', description: 'We dispatch the nearest available plumber to your location.' },
      { title: 'Arrive & Assess', description: 'We arrive quickly, assess the situation, and provide upfront pricing.' },
      { title: 'Fix the Problem', description: 'We get to work immediately to stop the damage and make repairs.' },
    ],
    faqs: [
      { question: 'How fast can you get here?', answer: 'For emergencies, we typically arrive within 30-60 minutes, depending on your location and current call volume.' },
      { question: 'Do you charge extra for emergency calls?', answer: 'We have a service call fee for after-hours emergencies, but our repair rates remain competitive. We always provide upfront pricing before starting work.' },
      { question: 'What qualifies as a plumbing emergency?', answer: 'Burst pipes, major leaks, sewer backups, no water, flooding, and gas leaks are all emergencies. When in doubt, call us.' },
    ],
    icon: AlertTriangle,
  },
  'drain-cleaning': {
    title: 'Drain Cleaning',
    metaTitle: 'Drain Cleaning Services Northeast Ohio',
    metaDescription: 'Professional drain cleaning in Warren, Youngstown & Northeast Ohio. Clogged drains, slow drains, main line cleaning. Same-day service available.',
    heroTitle: 'Drain Cleaning Services',
    heroSubtitle: 'Clear clogs and keep drains flowing',
    intro: 'Slow drains and stubborn clogs are more than just annoying—they can lead to bigger problems if left untreated. Our professional drain cleaning services use the latest equipment to clear blockages and restore proper flow to your plumbing system.',
    benefits: [
      'Same-day service available',
      'Video camera inspection included',
      'Safe for all pipe types',
      'Preventive maintenance plans',
      'Commercial and residential service',
      'Eco-friendly cleaning options',
    ],
    process: [
      { title: 'Inspection', description: 'We assess the drain and may use camera inspection to locate the blockage.' },
      { title: 'Method Selection', description: 'We choose the best cleaning method: snaking, hydro-jetting, or other techniques.' },
      { title: 'Clear the Clog', description: 'We clear the blockage completely, not just punch a hole through it.' },
      { title: 'Prevention Tips', description: 'We provide tips to prevent future clogs and discuss maintenance options.' },
    ],
    faqs: [
      { question: 'How often should I have my drains cleaned?', answer: 'For most homes, annual drain cleaning is recommended. Homes with trees near sewer lines or older pipes may need more frequent service.' },
      { question: 'Can I use chemical drain cleaners?', answer: 'We don\'t recommend chemical drain cleaners. They can damage pipes and often don\'t fully clear clogs. Professional cleaning is safer and more effective.' },
      { question: 'What causes recurring drain clogs?', answer: 'Common causes include tree roots, grease buildup, soap scum, hair, and damaged pipes. We can diagnose the root cause and recommend solutions.' },
    ],
    icon: Pipette,
  },
  'water-heater': {
    title: 'Water Heater Services',
    metaTitle: 'Water Heater Repair & Replacement Northeast Ohio',
    metaDescription: 'Water heater repair, replacement & installation in Warren, Youngstown & Northeast Ohio. Tank and tankless options. Same-day service.',
    heroTitle: 'Water Heater Services',
    heroSubtitle: 'Repair, replacement & installation',
    intro: 'Nothing ruins your morning like a cold shower. Whether your water heater needs repair or it\'s time for a replacement, AK Water Works has you covered. We service all brands and types of water heaters, including traditional tank and modern tankless systems.',
    benefits: [
      'Same-day water heater repair',
      'Tank and tankless installation',
      'All major brands serviced',
      'Energy-efficient upgrades',
      'Proper disposal of old units',
      'Financing available',
    ],
    process: [
      { title: 'Diagnosis', description: 'We inspect your water heater to determine if repair or replacement is best.' },
      { title: 'Options & Pricing', description: 'We present your options with transparent pricing for each.' },
      { title: 'Installation/Repair', description: 'We complete the work efficiently with minimal disruption.' },
      { title: 'Testing', description: 'We verify everything is working properly and explain operation and maintenance.' },
    ],
    faqs: [
      { question: 'How long do water heaters last?', answer: 'Traditional tank water heaters typically last 8-12 years. Tankless units can last 20+ years with proper maintenance.' },
      { question: 'Should I repair or replace my water heater?', answer: 'Generally, if your water heater is over 10 years old and needs significant repairs, replacement is often more cost-effective.' },
      { question: 'Are tankless water heaters worth it?', answer: 'Tankless units have higher upfront costs but offer energy savings, endless hot water, and longer lifespan. We can help you decide what\'s best for your home.' },
    ],
    icon: Flame,
  },
  'sewer-line': {
    title: 'Sewer Line Services',
    metaTitle: 'Sewer Line Repair & Replacement Northeast Ohio',
    metaDescription: 'Sewer line repair, replacement & inspection in Warren, Youngstown & Northeast Ohio. Camera inspection, trenchless options available.',
    heroTitle: 'Sewer Line Services',
    heroSubtitle: 'Repair, replacement & inspection',
    intro: 'Sewer line problems can quickly become serious—and expensive—if not addressed promptly. From minor repairs to complete line replacement, we offer comprehensive sewer services using the latest technology, including trenchless options that minimize disruption to your property.',
    benefits: [
      'Video camera inspection',
      'Trenchless repair options',
      'Full line replacement',
      'Root removal',
      'Preventive maintenance',
      'Minimal yard disruption',
    ],
    process: [
      { title: 'Camera Inspection', description: 'We send a camera through your sewer line to identify the problem exactly.' },
      { title: 'Diagnosis', description: 'We review the footage with you and explain what we found.' },
      { title: 'Solution Options', description: 'We present repair options, including trenchless methods when possible.' },
      { title: 'Professional Repair', description: 'We complete the repair and verify the line is flowing properly.' },
    ],
    faqs: [
      { question: 'How do I know if I have a sewer line problem?', answer: 'Signs include multiple slow drains, gurgling sounds, sewage smells, wet spots in the yard, and sewage backups.' },
      { question: 'What is trenchless sewer repair?', answer: 'Trenchless methods repair or replace sewer lines without digging up your entire yard. We use pipe lining or pipe bursting techniques.' },
      { question: 'How much does sewer line replacement cost?', answer: 'Costs vary based on length, depth, and method. We provide free estimates after camera inspection.' },
    ],
    icon: Construction,
  },
  'pipe-repair': {
    title: 'Pipe Repair & Repiping',
    metaTitle: 'Pipe Repair & Repiping Services Northeast Ohio',
    metaDescription: 'Pipe repair, leak detection & whole-house repiping in Warren, Youngstown & Northeast Ohio. Fix leaks fast. Free estimates.',
    heroTitle: 'Pipe Repair & Repiping',
    heroSubtitle: 'Leak repair to complete repiping',
    intro: 'Leaky pipes waste water, damage your home, and cost you money. Whether you need a simple leak repair or your home needs complete repiping, our experienced plumbers deliver quality workmanship that lasts.',
    benefits: [
      'Quick leak repairs',
      'Electronic leak detection',
      'Copper, PEX, and CPVC options',
      'Whole-house repiping',
      'Minimal wall damage',
      'Warranty on all work',
    ],
    process: [
      { title: 'Leak Detection', description: 'We locate the leak using visual inspection and electronic detection when needed.' },
      { title: 'Assessment', description: 'We assess the extent of damage and condition of surrounding pipes.' },
      { title: 'Repair/Replace', description: 'We repair the leak or recommend repiping if pipes are failing.' },
      { title: 'Testing', description: 'We pressure test to ensure no other leaks exist.' },
    ],
    faqs: [
      { question: 'How do you find hidden leaks?', answer: 'We use electronic leak detection equipment that can locate leaks behind walls and under floors without destructive exploration.' },
      { question: 'When should I consider repiping?', answer: 'Consider repiping if you have galvanized pipes, frequent leaks, low water pressure, or discolored water.' },
      { question: 'How long does repiping take?', answer: 'Most whole-house repiping jobs are completed in 2-3 days, depending on home size and accessibility.' },
    ],
    icon: Wrench,
  },
  'fixture-installation': {
    title: 'Fixture Installation',
    metaTitle: 'Plumbing Fixture Installation Northeast Ohio',
    metaDescription: 'Professional fixture installation in Warren, Youngstown & Northeast Ohio. Faucets, toilets, sinks, showers & more. Quality workmanship.',
    heroTitle: 'Fixture Installation',
    heroSubtitle: 'Faucets, toilets, sinks & more',
    intro: 'Upgrading your plumbing fixtures can transform your bathroom or kitchen while improving functionality and water efficiency. Our plumbers ensure proper installation for leak-free operation and optimal performance.',
    benefits: [
      'All fixture types installed',
      'Proper sizing and fit',
      'Leak-free installation',
      'Old fixture removal included',
      'Water-efficient options',
      'Same-day service available',
    ],
    process: [
      { title: 'Consultation', description: 'We discuss your needs and help select the right fixtures if needed.' },
      { title: 'Preparation', description: 'We protect your home and prepare the work area.' },
      { title: 'Installation', description: 'We install your new fixtures with attention to detail.' },
      { title: 'Testing', description: 'We test everything thoroughly and clean up completely.' },
    ],
    faqs: [
      { question: 'Can I supply my own fixtures?', answer: 'Yes! We\'re happy to install fixtures you\'ve purchased. Just make sure they\'re quality products from reputable manufacturers.' },
      { question: 'Do you install shower systems?', answer: 'Yes, we install everything from simple showerheads to complete shower systems with multiple heads and body sprays.' },
      { question: 'How long does fixture installation take?', answer: 'Most single fixture installations take 1-2 hours. Multiple fixtures or complex installations may take longer.' },
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

export default async function PlumbingServicePage({ params }: Props) {
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
        <Link href="/plumbing-services" className="text-slate-500 hover:text-[var(--color-primary)] flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          Back to Plumbing Services
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

        <PlumbingCTA service={service.title} />
      </header>

      {/* Image Gallery Placeholder */}
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
          Why Choose Us for {service.title}
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
            Contact us today to schedule {service.title.toLowerCase()} service. 
            Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PlumbingCTA variant="emergency" service={service.title} />
          </div>
        </div>
      </section>
    </div>
  )
}
