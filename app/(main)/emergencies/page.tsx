import { Metadata } from 'next'
import Link from 'next/link'
import {
  Droplets, Waves,
  ArrowRight, Phone, AlertTriangle,
} from 'lucide-react'
import { emergencyServicesData } from '@/lib/constants/restoration'
import { siteConfig } from '@/lib/constants/site'
import {
  VanSection,
  ReviewSection,
  EmergencyCTA,
  JackMascotAccent,
  ServiceAreaSection,
  FeatureCardsSection,
} from '@/components/ui/hub-page-sections'

export const metadata: Metadata = {
  title: 'Emergency Water Damage Services | 24/7 Response | AK Water Works',
  description: 'Professional emergency water damage cleanup and recovery services in Northeast Ohio. 24/7 emergency response. IICRC certified. Free estimates.',
}

const iconMap: Record<string, typeof Droplets> = {
  Droplets, Waves,
}

const trustIndicators = [
  { stat: 'Fast', label: 'Response Time' },
  { stat: '24/7', label: 'Emergency Service' },
  { stat: 'IICRC', label: 'Certified Techs' },
  { stat: '100%', label: 'Satisfaction Guaranteed' },
]

const processSteps = [
  { step: '1', title: 'Emergency Contact', desc: 'Call 24/7 for immediate response' },
  { step: '2', title: 'Assessment', desc: 'We inspect and document damage' },
  { step: '3', title: 'Mitigation', desc: 'Stop damage and begin drying' },
  { step: '4', title: 'Recovery', desc: 'Complete repairs and cleanup' },
]

export default function EmergenciesPage() {
  return (
    <>
      {/* Full-Width Hero */}
      <section className="relative min-h-[875px] md:min-h-[700px] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-[66%] md:bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/images/Hero-Restoration.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Waves className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Emergency Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Water Damage
              <span className="block text-[var(--color-accent)]">Emergency Response</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              When water damage strikes, every minute counts. Our certified emergency
              team responds 24/7 to extract water, dry your property, and recover
              your home to pre-loss condition.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Emergency: {siteConfig.phone}
              </a>
              <Link
                href="/emergencies/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg transition-colors border border-white/20"
              >
                Free Estimate
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
        <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-gradient-to-t from-red-600 to-transparent" />
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <AlertTriangle className="w-6 h-6" />
              <div>
                <span className="font-bold">Have a Water Emergency?</span>
                <span className="hidden sm:inline ml-2">Standing water causes more damage every minute.</span>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Van Section */}
      <VanSection />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Emergency Services
            </h2>
            <p className="text-lg text-slate-600">
              Complete water damage emergency services. From emergency water extraction
              to full property recovery, we handle it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {emergencyServicesData.map((service) => {
              const Icon = iconMap[service.iconName] || Waves
              return (
                <Link
                  key={service.slug}
                  href={`/emergencies/${service.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--color-primary)]/10 rounded-xl group-hover:bg-[var(--color-primary)] transition-colors">
                      <Icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">
                        {service.shortDescription}
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

          {/* Link to Waterproofing */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-4">
              <strong>Looking for waterproofing services?</strong> Prevent future water damage with our basement waterproofing solutions.
            </p>
            <Link
              href="/waterproofing"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
            >
              View Waterproofing Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-lg text-slate-600">
              We follow a proven process to recover your property quickly and thoroughly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={item.step} className="text-center relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-200" />
                )}
                <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl relative z-10">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Review Section */}
      <ReviewSection
        categoryTitle="Why Northeast Ohio Trusts Our Emergency Team"
        categoryDescription="When water damage strikes, you need a team that responds fast. Our IICRC certified technicians are available 24/7 and work with your insurance."
      />

      {/* Emergency CTA */}
      <EmergencyCTA
        title="Water Damage Emergency?"
        description="Don't wait! Water damage gets worse every minute. Call now for 24/7 emergency response."
      />

      {/* Jack Mascot */}
      <JackMascotAccent />

      {/* Service Areas */}
      <ServiceAreaSection
        categoryDescription="Serving 4 counties across Northeast Ohio with 24/7 emergency water damage response, extraction, and recovery services."
      />

      {/* Feature Cards */}
      <FeatureCardsSection
        financingDescription="Flexible payment options for emergency services. We also work directly with your insurance company."
        guaranteeDescription="We stand behind our emergency work. Your property recovery is our priority."
      />
    </>
  )
}
