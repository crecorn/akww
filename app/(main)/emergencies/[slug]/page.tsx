import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  Droplets, Waves,
  CheckCircle2, Phone, AlertTriangle
} from 'lucide-react'
import { emergencyServicesData } from '@/lib/constants/restoration'
import { siteConfig } from '@/lib/constants/site'
import { EmergencyCTA } from '@/components/restoration'

const iconMap: Record<string, typeof Droplets> = {
  Droplets, Waves,
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return emergencyServicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = emergencyServicesData.find(s => s.slug === params.slug)
  if (!service) return { title: 'Service Not Found' }

  return {
    title: `${service.title} | AK Water Works`,
    description: service.description,
  }
}

export default function EmergencyServicePage({ params }: Props) {
  const service = emergencyServicesData.find(s => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.iconName] || Waves

  return (
    <div className="space-y-8">
      {/* Emergency Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
        <div className="flex-1">
          <h2 className="font-bold text-red-800">24/7 Emergency Response</h2>
          <p className="text-red-700 text-sm mt-1">
            Water damage gets worse every minute. Call now for immediate help.
          </p>
        </div>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-sm"
        >
          <Phone className="w-4 h-4" />
          Emergency Line
        </a>
      </div>

      {/* Hero */}
      <header className="bg-gradient-to-br from-[var(--color-primary)] to-blue-800 rounded-2xl p-6 md:p-10 text-white">
        <div className="flex items-center gap-2 text-blue-200 mb-4">
          <Icon className="w-5 h-5" />
          <span className="font-medium">Emergency Services</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-blue-100 mb-6 max-w-2xl">
          {service.description}
        </p>
        <EmergencyCTA variant="hero" service={service.title} />
      </header>

      {/* Features */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          What's Included
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[var(--color-accent)]/10 rounded-2xl p-6 md:p-8 border border-[var(--color-accent)]/20">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Why Choose Us for {service.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
              <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-slate-900">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Image Placeholders */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Our Work
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-slate-200 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center"
            >
              <div className="text-center text-slate-400">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-slate-300 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Before/After {i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">
          Need Emergency Help?
        </h2>
        <p className="text-blue-100 mb-6">
          Our team is standing by 24/7 to respond to water emergencies.
        </p>
        <EmergencyCTA variant="emergency" service={service.title} />
      </section>
    </div>
  )
}
