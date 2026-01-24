import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Building2, Landmark, Factory, Siren, UtensilsCrossed, Wrench,
  CheckCircle2, Phone, ArrowRight, ArrowLeft
} from 'lucide-react'
import { commercialServicesData } from '@/lib/constants/commercial'
import { siteConfig } from '@/lib/constants/site'

const iconMap: Record<string, typeof Building2> = {
  Building2, Landmark, Factory, Siren, UtensilsCrossed, Wrench,
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return commercialServicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = commercialServicesData.find(s => s.slug === params.slug)
  if (!service) return { title: 'Service Not Found' }
  
  return {
    title: `${service.title} | Commercial Plumbing | AK Water Works`,
    description: service.description,
  }
}

export default function CommercialServicePage({ params }: Props) {
  const service = commercialServicesData.find(s => s.slug === params.slug)
  
  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.iconName] || Building2

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/commercial" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          Commercial Services
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{service.title}</span>
      </div>

      {/* Hero */}
      <header className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/10 rounded-xl">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium text-slate-400 uppercase tracking-wide">Commercial Services</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
          {service.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/commercial/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold rounded-lg transition-colors"
          >
            Contact Us to Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </header>

      {/* Service Details */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Service Overview
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">
          Why Choose AK Water Works
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--color-accent)] rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-200">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Project Gallery Placeholder */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Project Gallery
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="aspect-[4/3] bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center"
            >
              <div className="text-center text-slate-400">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-slate-200 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Project Photo</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Our commercial team is ready to provide a detailed consultation for your 
            {' '}{service.title.toLowerCase()} needs. Contact us to schedule a site visit 
            and receive a comprehensive proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/commercial/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Contact Us to Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
