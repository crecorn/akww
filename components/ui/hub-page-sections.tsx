'use client'

import Link from 'next/link'
import Script from 'next/script'
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Droplets,
  Shield,
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

// Van section that appears under hero
export function VanSection() {
  return (
    <section className="relative bg-slate-50 pt-0 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <img
            src="/images/AK Water Works Plumbing Service.webp"
            alt="AK Water Works Service Van"
            className="h-[180px] md:h-[220px] w-auto object-contain -mt-8"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="font-medium">{siteConfig.reviews.count}+ Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="font-medium">Bonded & Insured</span>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ReviewSectionProps {
  categoryTitle: string
  categoryDescription: string
}

// Why Choose Us / Review section
export function ReviewSection({ categoryTitle, categoryDescription }: ReviewSectionProps) {
  return (
    <>
      <Script
        src="https://app.akwaterworks.net/reputation/assets/review-widget.js"
        strategy="lazyOnload"
      />
      <section className="py-20 bg-[#1D283B]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <img
                  src="/images/Jack Waving.svg"
                  alt=""
                  className="h-24 md:h-32 lg:h-48 w-auto flex-shrink-0 -mt-2"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {categoryTitle}
                  </h2>
                  <p className="text-lg text-slate-300">
                    {categoryDescription}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'Rapid Response', desc: '24/7 emergency service with fast arrival times' },
                  { title: 'Upfront Pricing', desc: 'No surprises - you know the cost before work begins' },
                  { title: 'Quality Guaranteed', desc: 'We stand behind every job with our satisfaction guarantee' },
                  { title: 'Local Experts', desc: 'We know Northeast Ohio homes and their unique challenges' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
                >
                  Learn more about our team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <iframe
                className="lc_reviews_widget"
                src="https://app.akwaterworks.net/reputation/widgets/review_widget/rEZCKfcVxZKDCOzh8Vn9?widgetId=6974f97ddd279f45cdf53f6a"
                frameBorder="0"
                scrolling="no"
                style={{ minWidth: '100%', width: '100%', minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface EmergencyCTAProps {
  title: string
  description: string
}

// Emergency CTA section (green)
export function EmergencyCTA({ title, description }: EmergencyCTAProps) {
  return (
    <section className="py-16 bg-[var(--color-accent)]">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertTriangle className="w-8 h-8 text-white" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h2>
        </div>
        <p className="text-xl text-green-100 mb-6">
          {description}
        </p>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-slate-100 text-[var(--color-accent)] font-bold text-xl rounded-xl transition-colors shadow-xl"
          data-cta="emergency-phone"
        >
          <Phone className="w-6 h-6" />
          Call Now: {siteConfig.phone}
        </a>
      </div>
    </section>
  )
}

// Jack mascot accent between sections
export function JackMascotAccent() {
  return (
    <div className="relative z-10">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/images/Jack Running.svg"
          alt=""
          className="h-[115px] w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

interface ServiceAreaSectionProps {
  categoryDescription: string
}

const serviceAreas = [
  { name: 'Trumbull County', state: 'OH', slug: 'trumbull-county' },
  { name: 'Mahoning County', state: 'OH', slug: 'mahoning-county' },
  { name: 'Portage County', state: 'OH', slug: 'portage-county' },
  { name: 'Ashtabula County', state: 'OH', slug: 'ashtabula-county' },
]

// Service Areas section
export function ServiceAreaSection({ categoryDescription }: ServiceAreaSectionProps) {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proudly Serving Northeast Ohio
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {categoryDescription}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="px-4 py-2 bg-slate-800 hover:bg-[var(--color-primary)] rounded-full text-sm font-medium transition-colors"
            >
              {area.name}, {area.state}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
          >
            View all service areas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardsSectionProps {
  financingDescription: string
  guaranteeDescription: string
}

// Feature Cards section (Agua Kare, Financing, Satisfaction Guaranteed)
export function FeatureCardsSection({ financingDescription, guaranteeDescription }: FeatureCardsSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Agua Kare */}
          <Link
            href="/agua-kare"
            className="group bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">
                Agua Kare
              </h3>
            </div>
            <p className="text-slate-600 text-sm mb-3">
              Priority service membership with exclusive benefits and savings.
            </p>
            <span className="inline-flex items-center gap-1 text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {/* Financing */}
          <Link
            href="/financing"
            className="group bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">
                Financing
              </h3>
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {financingDescription}
            </p>
            <span className="inline-flex items-center gap-1 text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 transition-all">
              View Options <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {/* Satisfaction Guaranteed */}
          <Link
            href="/satisfaction-guarantee"
            className="group bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">
                Satisfaction Guaranteed
              </h3>
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {guaranteeDescription}
            </p>
            <span className="inline-flex items-center gap-1 text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 transition-all">
              Our Promise <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
