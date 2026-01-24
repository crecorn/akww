'use client'

import Link from 'next/link'
import {
  Phone, CheckCircle2, ArrowRight, ArrowLeft, Clock, Shield, Star,
  CloudRain, Home, Wind, AlertTriangle
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { useBooking } from '@/components/providers/booking-provider'

const services = [
  { icon: CloudRain, title: 'Flood Water Removal', desc: 'Fast storm water extraction' },
  { icon: Home, title: 'Emergency Tarping', desc: 'Protect exposed areas' },
  { icon: Wind, title: 'Wind Damage Cleanup', desc: 'Debris removal & cleanup' },
  { icon: Shield, title: 'Insurance Documentation', desc: 'Help with your claim' },
]

const benefits = [
  '24/7 storm response team',
  'Emergency tarping available',
  'Full property recovery',
  'Insurance claim assistance',
  'Debris removal included',
  'Local emergency team',
]

const signs = [
  'Flooding from heavy rain',
  'Roof damage causing leaks',
  'Wind damage to home',
  'Fallen tree damage',
  'Power outage water issues',
  'Basement flooding after storm',
]

const faqs = [
  {
    q: 'Do you respond during active storms?',
    a: 'Yes, our team responds during and after storms when it is safe to do so. We prioritize emergency tarping and water removal to prevent further damage.'
  },
  {
    q: 'Can you help with insurance claims?',
    a: 'Absolutely! We document all storm damage thoroughly and work directly with your insurance company to ensure your claim is processed smoothly.'
  },
  {
    q: 'How quickly can you respond after a storm?',
    a: 'We respond within 60 minutes during normal conditions. After major storms, response times may be longer due to high demand, but we prioritize the most urgent cases.'
  },
  {
    q: 'Do you handle both water and structural damage?',
    a: 'Yes, we provide complete storm damage recovery from water extraction and drying to structural repairs and rebuilding.'
  },
]

export default function StormDamageRecoveryPage() {
  const { openBooking } = useBooking()

  return (
    <div className="space-y-8">
      {/* Emergency Banner */}
      <section className="bg-red-600 text-white rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <CloudRain className="w-7 h-7" />
          <span className="text-xl font-bold">Storm Damage? We&apos;re Ready to Help!</span>
        </div>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold text-xl rounded-lg hover:bg-red-50 transition-colors"
        >
          <Phone className="w-6 h-6" />
          Call Now: {siteConfig.phone}
        </a>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl overflow-hidden p-6 md:p-10">
        <div className="absolute inset-0 opacity-10 rounded-2xl">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative">
          <nav className="mb-6">
            <Link
              href="/emergencies"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Emergency Services
            </Link>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <CloudRain className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Storm Damage Recovery</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Storm Damage?
            <span className="block text-[var(--color-accent)]">We Recover It All.</span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            When severe weather strikes Northeast Ohio, we&apos;re ready to help.
            Emergency tarping, water removal, cleanup, and complete recovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
            <button
              onClick={() => openBooking('Storm Damage Recovery')}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg transition-colors border border-white/20"
            >
              Request Service
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--color-accent)]" />
              24/7 Storm Response
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[var(--color-accent)]" />
              Insurance Assistance
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[var(--color-accent)]" />
              {siteConfig.reviews.rating} Rating
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-4 right-4">
          <img
            src="/images/Jack w Wrench.svg"
            alt=""
            className="h-36 w-auto opacity-90"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Storm Recovery Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-start gap-4"
              >
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-1">Storm Damage Gets Worse Fast!</h2>
            <p className="text-blue-100">Exposed areas lead to more damage. Call now to protect your property.</p>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Why Choose Us + Signs */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)]" />
              Why Choose Us
            </h2>
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              When to Call Us
            </h2>
            <div className="space-y-3">
              {signs.map((sign) => (
                <div key={sign} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-slate-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Our Storm Recovery Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Emergency Response', desc: 'Secure your property' },
            { step: '2', title: 'Water Removal', desc: 'Extract flood water' },
            { step: '3', title: 'Dry & Clean', desc: 'Thorough drying & cleanup' },
            { step: '4', title: 'Restore', desc: 'Repairs & rebuilding' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                {item.step}
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recover From the Storm
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto">
            Don&apos;t let storm damage get worse.
            Call now for emergency response and complete recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <button
              onClick={() => openBooking('Storm Damage Recovery')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
            >
              Request Service
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
