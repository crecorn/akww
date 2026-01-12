'use client'

import Link from 'next/link'
import { 
  Phone, CheckCircle2, ArrowRight, ArrowLeft, Clock, Shield, Star,
  Video, Camera, Search, Monitor, AlertTriangle
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { useBooking } from '@/components/providers/booking-provider'

const services = [
  { icon: Camera, title: 'Sewer Line Inspection', desc: 'Full main line video' },
  { icon: Video, title: 'Drain Camera', desc: 'Interior drain inspection' },
  { icon: Search, title: 'Locate Problems', desc: 'Find blockages & damage' },
  { icon: Monitor, title: 'Real-Time Video', desc: 'See it as we film' },
]

const benefits = [
  'See inside your pipes live',
  'Pinpoint exact problem location',
  'No guessing—know for sure',
  'Recording available for you',
  'Helps avoid unnecessary work',
  'Great for home purchases',
]

const reasons = [
  'Recurring drain clogs',
  'Buying or selling a home',
  'Sewage smell or backups',
  'Before major landscaping',
  'Old home with unknown pipes',
  'After sewer line repair',
]

const faqs = [
  { 
    q: 'What can the camera see?', 
    a: 'Our HD cameras show blockages, tree roots, cracks, bellied pipes, collapsed sections, and buildup. We can see exactly what\'s causing your problem.' 
  },
  { 
    q: 'How far can the camera go?', 
    a: 'Our cameras can inspect 200+ feet of pipe, enough to cover most residential sewer lines from house to street.' 
  },
  { 
    q: 'Do I get a copy of the video?', 
    a: 'Yes! We can provide you with a recording of the inspection. Great for insurance claims or home sale documentation.' 
  },
  { 
    q: 'Is camera inspection included with drain cleaning?', 
    a: 'Yes, we include camera inspection with most drain cleaning services to ensure the clog is fully cleared and check pipe condition.' 
  },
]

export default function CameraInspectionPage() {
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
              href="/sewer-drain" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sewer & Drain
            </Link>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Video className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Camera Inspection</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            See Inside Your Pipes
            <span className="block text-[var(--color-accent)]">With HD Camera.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            No more guessing what&apos;s wrong. Our HD sewer cameras show you exactly 
            what&apos;s happening inside your pipes—in real time.
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
              onClick={() => openBooking('Camera Inspection')}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg transition-colors border border-white/20"
            >
              Schedule Inspection
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

      {/* Services Grid */}
      <section className="bg-slate-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Camera Inspection Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div 
                key={service.title}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-start gap-4"
              >
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Icon className="w-6 h-6 text-purple-600" />
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
          What We Find
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {[1, 2, 3, 4].map((num) => (
            <div 
              key={num}
              className="flex-shrink-0 w-[180px] md:w-auto snap-center"
            >
              <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-300">
                <div className="text-center text-slate-400 p-4">
                  <Camera className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                  <span className="text-xs">Camera View {num}</span>
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
            <h2 className="text-2xl font-bold mb-1">Buying a Home?</h2>
            <p className="text-blue-100">Get a sewer inspection before you close—avoid surprises!</p>
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

      {/* Why Choose Us + Reasons Side by Side */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Benefits */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)]" />
              Why Camera Inspection?
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

          {/* When to Get One */}
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              When to Get Inspection
            </h2>
            <div className="space-y-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-slate-700">{reason}</span>
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
            { step: '1', title: 'Access Point', desc: 'Find cleanout or drain' },
            { step: '2', title: 'Insert Camera', desc: 'HD camera goes in' },
            { step: '3', title: 'Live View', desc: 'Watch with us' },
            { step: '4', title: 'Report', desc: 'Get your recording' },
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
              <strong className="text-white">Jack says:</strong> &quot;A camera inspection now 
              can save you thousands later. Knowledge is power!&quot;
            </p>
          </div>
          <button
            onClick={() => openBooking('Camera Inspection')}
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
              &quot;We were buying an older home and they did a sewer inspection. 
              Found tree roots starting to invade. Saved us from a huge surprise!&quot;
            </blockquote>
            <p className="font-semibold">— Mark & Susan T., Cortland, OH</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See What&apos;s Really Going On
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto">
            Stop guessing about your sewer and drain problems. 
            Schedule a camera inspection and get answers.
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
              onClick={() => openBooking('Camera Inspection')}
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
