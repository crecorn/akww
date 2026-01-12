'use client'

import Link from 'next/link'
import { 
  Phone, CheckCircle2, ArrowRight, ArrowLeft, Clock, Shield, Star,
  Flame, Zap, Home, Wrench, AlertTriangle
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { useBooking } from '@/components/providers/booking-provider'

const services = [
  { icon: Flame, title: 'Gas Line Installation', desc: 'New lines for appliances' },
  { icon: Wrench, title: 'Gas Line Repair', desc: 'Fix leaks safely' },
  { icon: Zap, title: 'Appliance Hookups', desc: 'Stoves, dryers & more' },
  { icon: Home, title: 'Gas Line Inspections', desc: 'Safety checks & testing' },
]

const benefits = [
  'Licensed gas line technicians',
  'Safety-first approach',
  'Leak detection & testing',
  'All appliance types',
  'Code-compliant work',
  'Same-day service available',
]

const signs = [
  'Smell of rotten eggs (gas odor)',
  'Hissing sound near gas lines',
  'Dead plants near gas lines',
  'Higher than normal gas bills',
  'Pilot lights keep going out',
  'Visible damage to lines',
]

const faqs = [
  { 
    q: 'What should I do if I smell gas?', 
    a: 'Leave your home immediately, don\'t turn on any lights or appliances, and call your gas company from outside. Then call us for repairs.' 
  },
  { 
    q: 'Can you run a gas line to my outdoor grill?', 
    a: 'Yes! We install gas lines for outdoor grills, fire pits, pool heaters, and more. No more propane tanks to refill.' 
  },
  { 
    q: 'How do you check for gas leaks?', 
    a: 'We use professional gas leak detectors and pressure testing to locate even the smallest leaks in your system.' 
  },
  { 
    q: 'Do I need a permit for gas line work?', 
    a: 'Most gas line work requires permits. We handle all permits and inspections as part of our service.' 
  },
]

export default function GasLinesPage() {
  const { openBooking } = useBooking()

  return (
    <div className="space-y-8">
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
              href="/plumbing-services" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Plumbing Services
            </Link>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Gas Line Services</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gas Line Services
            <span className="block text-[var(--color-accent)]">Done Safely.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Licensed technicians for all your gas line needs. Installation, repair, 
            and appliance hookups—always safe, always code-compliant.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
            <button
              onClick={() => openBooking('Gas Line Service')}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg transition-colors border border-white/20"
            >
              Schedule Service
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--color-accent)]" />
              Same-Day Service
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[var(--color-accent)]" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[var(--color-accent)]" />
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

      {/* Emergency Warning */}
      <section className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-red-100 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-red-900 mb-1">Smell Gas? Get Out Immediately!</h2>
            <p className="text-red-700">
              If you smell gas, leave your home right away. Don&apos;t use light switches, phones, 
              or anything that could create a spark. Call your gas company from outside, then call us.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Our Gas Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div 
                key={service.title}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-start gap-4"
              >
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Icon className="w-6 h-6 text-yellow-600" />
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

      {/* Gallery Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Our Work
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {[1, 2, 3, 4].map((num) => (
            <div 
              key={num}
              className="flex-shrink-0 w-[180px] md:w-auto snap-center"
            >
              <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-300">
                <div className="text-center text-slate-400 p-4">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                  <span className="text-xs">Gas Work {num}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-3 md:hidden">← Swipe to see more →</p>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-1">Need a Gas Line Run?</h2>
            <p className="text-blue-100">From grills to generators—we do it all safely.</p>
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

      {/* Why Choose Us + Signs Side by Side */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Benefits */}
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

          {/* Warning Signs */}
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              Signs of a Gas Leak
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

      {/* Process Section with Jack */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Call Us', desc: 'Describe your needs' },
            { step: '2', title: 'We Assess', desc: 'Plan the safest route' },
            { step: '3', title: 'Install', desc: 'Code-compliant work' },
            { step: '4', title: 'Test', desc: 'Pressure test for safety' },
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
              <strong className="text-white">Jack says:</strong> &quot;Gas work is no DIY job. 
              Leave it to the licensed pros for your family&apos;s safety!&quot;
            </p>
          </div>
          <button
            onClick={() => openBooking('Gas Line Service')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Book Now
          </button>
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
              &quot;Had a gas line run to our new outdoor kitchen. Professional work, 
              passed inspection first try, and no mess left behind. Highly recommend!&quot;
            </blockquote>
            <p className="font-semibold">— Tom D., Cortland, OH</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gas Line Service Done Right
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto">
            Don&apos;t trust gas work to just anyone. Our licensed technicians 
            ensure safe, code-compliant installations and repairs.
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
              onClick={() => openBooking('Gas Line Service')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
            >
              Schedule Online
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Final Jack */}
          <div className="mt-8 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/Jack w Wrench.svg" 
              alt="" 
              className="h-20 w-auto opacity-80"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
