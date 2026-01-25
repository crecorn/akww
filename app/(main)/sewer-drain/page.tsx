import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Construction,
  Video,
  Waves,
  TreeDeciduous,
  Container,
  Siren,
  AlertTriangle,
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { sewerDrainServicesData } from '@/lib/constants/sewer-drain'
import {
  VanSection,
  ReviewSection,
  EmergencyCTA,
  JackMascotAccent,
  ServiceAreaSection,
  FeatureCardsSection,
} from '@/components/ui/hub-page-sections'

export const metadata: Metadata = {
  title: 'Sewer & Drain Services | AK Water Works',
  description: 'Professional sewer and drain services in Northeast Ohio. Drain cleaning, sewer repair, camera inspection, hydro jetting. 24/7 emergency service available.',
}

const iconMap: Record<string, typeof Droplets> = {
  Droplets, Construction, Video, Waves, TreeDeciduous, Container, Siren,
}

const trustIndicators = [
  { stat: '500+', label: 'Drains Cleared' },
  { stat: '24/7', label: 'Emergency Service' },
  { stat: '100%', label: 'Satisfaction Guaranteed' },
  { stat: 'HD', label: 'Camera Inspection' },
]

const warningSignsList = [
  'Slow draining sinks, tubs, or showers',
  'Gurgling sounds from drains',
  'Sewage odors in your home or yard',
  'Multiple clogged drains at once',
  'Water backing up in unusual places',
  'Wet spots in your yard',
  'Frequent clogs despite plunging',
  'Sewage backup in basement',
]

export default function SewerDrainPage() {
  return (
    <>
      {/* Full-Width Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Hero-sewer-drain.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Sewer & Drain Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Sewer &
              <span className="block text-[var(--color-accent)]">Drain Solutions</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              From clogged drains to complete sewer line replacement, we have the tools
              and expertise to keep your drains flowing and your property protected.
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
                href="/sewer-drain/contact"
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
              Our Sewer & Drain Services
            </h2>
            <p className="text-lg text-slate-600">
              Complete drain and sewer solutions for residential and commercial properties.
              We use the latest technology to diagnose and fix problems efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sewerDrainServicesData.map((service) => {
              const Icon = iconMap[service.iconName] || Droplets
              return (
                <Link
                  key={service.slug}
                  href={`/sewer-drain/${service.slug}`}
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
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Warning Signs
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                Don&apos;t ignore these symptoms – they often indicate bigger problems
                that can lead to costly repairs if left untreated.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {warningSignsList.map((sign) => (
                  <div key={sign} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-700">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-white rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-amber-300">
              <div className="text-center text-slate-400 p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Video className="w-8 h-8 text-amber-600" />
                </div>
                <p className="font-medium text-amber-700">Camera Inspection Photo</p>
                <p className="text-sm mt-1 text-amber-600">Add an image of drain inspection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Review Section */}
      <ReviewSection
        categoryTitle="Why Northeast Ohio Trusts Our Drain Experts"
        categoryDescription="When drain problems strike, you need a team with the right tools and expertise. We use HD camera inspection and hydro jetting to solve problems fast."
      />

      {/* Emergency CTA */}
      <EmergencyCTA
        title="Drain Emergency?"
        description="Don't wait! Our team is available 24/7 to help with sewer backups and clogged drains."
      />

      {/* Jack Mascot */}
      <JackMascotAccent />

      {/* Service Areas */}
      <ServiceAreaSection
        categoryDescription="Serving 4 counties across Northeast Ohio with expert drain cleaning, sewer repair, and camera inspection services."
      />

      {/* Feature Cards */}
      <FeatureCardsSection
        financingDescription="Flexible payment options for sewer and drain repairs. Get the service you need now."
        guaranteeDescription="We stand behind every drain job. Your drains flowing freely is our promise."
      />
    </>
  )
}
