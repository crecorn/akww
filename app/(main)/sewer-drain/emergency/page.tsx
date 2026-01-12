'use client'

import Link from 'next/link'
import { 
  Phone, CheckCircle2, ArrowRight, ArrowLeft, Clock, Shield, Star,
  Siren, Droplets, AlertTriangle, Wrench, Home
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { useBooking } from '@/components/providers/booking-provider'

const services = [
  { icon: Droplets, title: 'Sewer Backups', desc: 'Clear blockages fast' },
  { icon: Home, title: 'Flooded Basements', desc: 'Stop the flow now' },
  { icon: AlertTriangle, title: 'Drain Overflows', desc: 'Emergency clearing' },
  { icon: Wrench, title: 'Broken Lines', desc: 'Urgent repairs' },
]

const emergencies = [
  'Sewage backing up into home',
  'Toilet overflowing non-stop',
  'Basement flooding',
  'Multiple drains backing up',
  'Sewage smell in home',
  'Main line blockage',
  'Broken sewer pipe',
  'Drain emergency at business',
]

const dosList = [
  'Stop using water immediately',
  'Don\'t flush any toilets',
  'Turn off washing machines',
  'Avoid the affected area',
  'Open windows for ventilation',
  'Call us right now!',
]

const faqs = [
  { 
    q: 'How fast can you get here?', 
    a: 'For sewer emergencies, we typically arrive within 30-60 minutes. We know every minute counts when sewage is backing up.' 
  },
  { 
    q: 'Is there an extra charge for emergencies?', 
    a: 'We have an after-hours service fee, but our repair rates remain fair. You\'ll get upfront pricing before we start any work.' 
  },
  { 
    q: 'What should I do while waiting?', 
    a: 'Stop all water use immediately—no flushing, no washing, no dishwasher. This prevents more sewage from backing up. We\'ll guide you when you call.' 
  },
  { 
    q: 'Can you help with commercial emergencies?', 
    a: 'Absolutely. We provide 24/7 emergency service for restaurants, businesses, and commercial properties throughout Northeast Ohio.' 
  },
]

export default function SewerEmergencyPage() {
  const { openBooking } = useBooking()

  return (
    <div className="space-y-8">
      {/* Emergency Alert Banner */}
      <section className="bg-red-600 text-white rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Siren className="w-7 h-7 animate-pulse" />
          <span className="text-xl font-bold">Sewer Emergency? We&apos;re Available 24/7!</span>
          <Siren className="w-7 h-7 animate-pulse" />
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 rounded-2xl">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link 
              href="/sewer-drain" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sewer & Drain
            </Link>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Siren className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-200">24/7 Emergency Service</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sewer Emergency?
            <span className="block text-[var(--color-accent)]">We&apos;re On Our Way.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Sewage backups and drain emergencies can&apos;t wait. We respond 24/7 
            with fast service to stop the damage and fix the problem.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
            <button
              onClick={() => openBooking('Sewer Emergency')}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg transition-colors border border-white/20"
            >
              Request Callback
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400" />
              60 Min Response
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-400" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-red-400" />
              {siteConfig.reviews.rating} Rating
            </div>
          </div>
        </div>

        {/* Jack Mascot */}
        <div className="hidden lg:block absolute bottom-4 right-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/Jack w Wrench.svg" 
            alt="" 
            className="h-36 w-auto opacity-90"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Response Stats */}
      <section className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-200 text-center">
          <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
          <p className="text-2xl md:text-3xl font-bold text-slate-900">60 Min</p>
          <p className="text-slate-600 text-sm">Avg Response</p>
        </div>
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-200 text-center">
          <Shield className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
          <p className="text-2xl md:text-3xl font-bold text-slate-900">24/7</p>
          <p className="text-slate-600 text-sm">Always Available</p>
        </div>
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-200 text-center">
          <CheckCircle2 className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
          <p className="text-2xl md:text-3xl font-bold text-slate-900">Same Day</p>
          <p className="text-slate-600 text-sm">Repairs Done</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Emergencies We Handle
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div 
                key={service.title}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-start gap-4"
              >
                <div className="p-3 bg-red-100 rounded-xl">
                  <Icon className="w-6 h-6 text-red-600" />
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
      <section className="bg-red-600 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-1">Sewage Backing Up Right Now?</h2>
            <p className="text-red-100">Stop using water and call immediately!</p>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* We Handle + What To Do Side by Side */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Emergencies We Handle */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Siren className="w-6 h-6 text-red-500" />
              We Respond To
            </h2>
            <div className="space-y-3">
              {emergencies.map((emergency) => (
                <div key={emergency} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-slate-700">{emergency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What To Do */}
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              While You Wait
            </h2>
            <div className="space-y-3">
              {dosList.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with Jack */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Our Emergency Response
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Call Us', desc: 'Available 24/7/365' },
            { step: '2', title: 'Fast Dispatch', desc: 'Technician en route' },
            { step: '3', title: 'Assess', desc: 'Find the cause' },
            { step: '4', title: 'Clear It!', desc: 'Stop the backup' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                {item.step}
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Jack Callout */}
        <div className="mt-8 flex items-center gap-4 bg-slate-800 rounded-xl p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/Jack w Wrench.svg" 
            alt="" 
            className="h-16 w-auto"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="text-slate-300">
              <strong className="text-white">Jack says:</strong> &quot;Sewer backups are no joke! 
              Don&apos;t wait—the sooner you call, the less damage you&apos;ll have.&quot;
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Emergency Questions
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

      {/* Review Highlight */}
      <section className="bg-[var(--color-accent)] rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <div className="flex-1 text-white">
            <blockquote className="text-lg italic mb-2">
              &quot;Woke up to sewage in our basement at 5 AM. Called AK Water Works 
              and they were here within the hour. Saved us from a disaster!&quot;
            </blockquote>
            <p className="font-semibold">— Steve & Janet R., Niles, OH</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-600 text-white rounded-2xl p-6 md:p-10">
        <div className="text-center">
          <Siren className="w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t Wait—Call Now!
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-xl mx-auto">
            Sewer emergencies get worse fast. Our team is ready 
            to help 24/7, 365 days a year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:bg-red-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <button
              onClick={() => openBooking('Sewer Emergency')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-lg rounded-lg transition-colors"
            >
              Request Callback
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Final Jack */}
          <div className="mt-8 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/Jack w Wrench.svg" 
              alt="" 
              className="h-20 w-auto opacity-90"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
