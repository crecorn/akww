import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  Droplets,
  Home,
  Shield,
  Waves,
  PenTool,
  AlertTriangle,
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { waterproofingServicesData } from '@/lib/constants/waterproofing'
import {
  VanSection,
  ReviewSection,
  EmergencyCTA,
  JackMascotAccent,
  ServiceAreaSection,
  FeatureCardsSection,
} from '@/components/ui/hub-page-sections'

export const metadata: Metadata = {
  title: 'Basement Waterproofing Services Northeast Ohio',
  description: `Professional basement waterproofing, foundation repair, sump pump services & crawl space encapsulation in Warren, Youngstown & Northeast Ohio. Free estimates. Call ${siteConfig.phone}.`,
}

const serviceIcons: Record<string, React.ElementType> = {
  Home,
  Shield,
  Waves,
  PenTool,
  Droplets,
}

const trustIndicators = [
  { stat: 'Lifetime', label: 'Transferable Warranty' },
  { stat: 'Free', label: 'Inspections' },
  { stat: '100%', label: 'Satisfaction Guaranteed' },
]

const warningSignsData = [
  'Water stains on basement walls or floor',
  'Musty or moldy odors',
  'Visible cracks in foundation walls',
  'Efflorescence (white mineral deposits)',
  'Peeling paint or wallpaper',
  'Warped or buckling floors',
  'Standing water after rain',
  'High humidity in basement',
]

export default function WaterproofingHubPage() {
  return (
    <>
      {/* Full-Width Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Hero-Waterproofing.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Waterproofing Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Keep Your Basement
              <span className="block text-[var(--color-accent)]">Dry & Protected</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Northeast Ohio&apos;s trusted waterproofing experts. We solve wet basement problems
              permanently with proven solutions backed by our lifetime warranty.
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
                href="/waterproofing/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg transition-colors border border-white/20"
              >
                Get Free Estimate
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
              Our Waterproofing Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive solutions for every water intrusion problem. From minor seepage
              to major flooding, we have the expertise to fix it right.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterproofingServicesData.map((service) => {
              const IconComponent = serviceIcons[service.iconName] || Droplets
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--color-primary)]/10 rounded-xl group-hover:bg-[var(--color-primary)] transition-colors">
                      <IconComponent className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
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

      {/* Warning Signs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Warning Signs You Need Waterproofing
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                Don&apos;t ignore these common signs of water intrusion. Early detection can save
                thousands in repairs.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {warningSignsData.map((sign) => (
                  <div key={sign} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="text-slate-700">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800">
                  <strong>Notice any of these signs?</strong> Get a free inspection before the problem gets worse.{' '}
                  <Link href="/waterproofing/contact" className="underline font-semibold">
                    Schedule your free inspection →
                  </Link>
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-slate-300">
              <div className="text-center text-slate-400 p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-slate-200 flex items-center justify-center">
                  <Droplets className="w-8 h-8" />
                </div>
                <p className="font-medium">Waterproofing Work Photo</p>
                <p className="text-sm mt-1">Add an image of your team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Review Section */}
      <ReviewSection
        categoryTitle="Why Northeast Ohio Trusts Our Waterproofing Team"
        categoryDescription="When water problems threaten your home, you need experts with proven solutions. Our lifetime warranty and certified technicians give you peace of mind."
      />

      {/* Emergency CTA */}
      <EmergencyCTA
        title="Waterproofing Emergency?"
        description="Don't wait! Water damage gets worse every day. Get a free inspection now."
      />

      {/* Jack Mascot */}
      <JackMascotAccent />

      {/* Service Areas */}
      <ServiceAreaSection
        categoryDescription="Serving 4 counties across Northeast Ohio with expert basement waterproofing, foundation repair, and crawl space encapsulation."
      />

      {/* Feature Cards */}
      <FeatureCardsSection
        financingDescription="Flexible payment options for waterproofing projects. Protect your home now, pay over time."
        guaranteeDescription="Our lifetime transferable warranty backs every waterproofing job. Your dry basement is guaranteed."
      />
    </>
  )
}
