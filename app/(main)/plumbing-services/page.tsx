import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Flame,
  Droplets,
  Zap,
  Filter,
  Siren,
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { plumbingServicesData } from '@/lib/constants/plumbing'
import {
  VanSection,
  ReviewSection,
  EmergencyCTA,
  JackMascotAccent,
  ServiceAreaSection,
  FeatureCardsSection,
} from '@/components/ui/hub-page-sections'

export const metadata: Metadata = {
  title: 'Plumbing Services Northeast Ohio | AK Water Works',
  description: `Professional plumbing services in Warren, Youngstown & Northeast Ohio. 24/7 emergency service, drain cleaning, water heaters, sewer repair & more. Call ${siteConfig.phone}.`,
}

const iconMap: Record<string, typeof Wrench> = {
  Wrench, Flame, Droplets, Zap, Filter, Siren,
}

const trustIndicators = [
  { stat: '1000+', label: 'Jobs Completed' },
  { stat: '24/7', label: 'Emergency Service' },
  { stat: '100%', label: 'Satisfaction Guaranteed' },
]

const commonProblems = [
  'Dripping faucets & running toilets',
  'Slow or clogged drains',
  'No hot water',
  'Low water pressure',
  'Leaky pipes',
  'Sewer smell in house',
  'Water heater issues',
  'Frozen pipes',
]

export default function PlumbingHubPage() {
  return (
    <>
      {/* Full-Width Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Hero-plumbing.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Plumbing Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Plumbing
              <span className="block text-[var(--color-accent)]">You Can Trust</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              From emergency repairs to complete installations, our licensed plumbers
              deliver quality workmanship and reliable service throughout Northeast Ohio.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold text-lg rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="/plumbing-services/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg transition-colors border border-white/20"
              >
                Schedule Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustIndicators.map((item) => (
                <div key={item.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white">{item.stat}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Van Section */}
      <VanSection />

      {/* Services Section */}
      <section className="pt-[0.1rem] pb-16 md:pb-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-lg text-slate-600">
              Complete plumbing solutions for residential and commercial properties.
              From routine maintenance to emergency repairs, we do it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plumbingServicesData.map((service) => {
              const Icon = iconMap[service.iconName] || Wrench
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--color-primary)]/10 rounded-xl group-hover:bg-[var(--color-primary)] transition-colors">
                      <Icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[var(--color-primary)] font-medium text-sm group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Common Plumbing Problems We Fix
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Experiencing any of these issues? Our team can diagnose and fix
                the problem quickly, often in a single visit.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {commonProblems.map((problem) => (
                  <div key={problem} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                    <span className="text-slate-700">{problem}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/plumbing-services/contact"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
                >
                  Don&apos;t see your problem? Contact us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-slate-300">
              <div className="text-center text-slate-400 p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-slate-200 flex items-center justify-center">
                  <Wrench className="w-8 h-8" />
                </div>
                <p className="font-medium">Plumber at Work Photo</p>
                <p className="text-sm mt-1">Add an image of your team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Review Section */}
      <ReviewSection
        categoryTitle="Why Northeast Ohio Trusts Our Plumbing Team"
        categoryDescription="When plumbing problems strike, you need a team that responds fast, works professionally, and stands behind their work. That's been our commitment since day one."
      />

      {/* Emergency CTA */}
      <EmergencyCTA
        title="Plumbing Emergency?"
        description="Don't wait! Our team is available 24/7 to help."
      />

      {/* Jack Mascot */}
      <JackMascotAccent />

      {/* Service Areas */}
      <ServiceAreaSection
        categoryDescription="Serving 4 counties across Northeast Ohio with expert plumbing services including water heaters, pipe repair, and 24/7 emergency response."
      />

      {/* Feature Cards */}
      <FeatureCardsSection
        financingDescription="Flexible payment options for plumbing repairs and installations. Get the service you need now."
        guaranteeDescription="We stand behind every plumbing job. Your satisfaction is our promise."
      />
    </>
  )
}
