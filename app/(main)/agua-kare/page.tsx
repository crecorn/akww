import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Phone, CheckCircle2, ArrowRight, 
  Percent, CalendarClock, BadgeCheck, Gauge, Heart, Users, Star
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Agua Kare Program | AK Water Works',
  description: 'Welcome to the AK Water Works family! Enjoy exclusive benefits including 10% off services, priority scheduling, no service fees, and free water pressure tests.',
}

const benefits = [
  {
    icon: Percent,
    title: 'Save 10%',
    desc: 'Enjoy a 10% discount on all plumbing, drain, and water services year-round.',
    highlight: '10% OFF',
  },
  {
    icon: CalendarClock,
    title: 'Priority Scheduling',
    desc: 'Get to the top of the service list with fast, preferred appointment times.',
    highlight: 'VIP ACCESS',
  },
  {
    icon: BadgeCheck,
    title: 'No Service Fee',
    desc: 'Pay no trip or diagnostic fee when you schedule a service call.',
    highlight: '$0 FEE',
  },
  {
    icon: Gauge,
    title: 'Free Water Pressure Test',
    desc: 'Receive a complimentary water pressure check to ensure your system is performing safely and efficiently.',
    highlight: 'FREE',
  },
]

const servicesIncluded = [
  'Plumbing repairs & installations',
  'Drain cleaning & clearing',
  'Water heater service',
  'Sewer line services',
  'Water damage restoration',
  'Basement waterproofing',
  'Fixture installation',
  'Emergency services',
  'And all other AK Water Works services',
]

const testimonials = [
  {
    quote: "The Agua Kare program has saved us hundreds on plumbing this year. Priority scheduling is a game changer!",
    name: "Sarah M.",
    location: "Warren, OH",
  },
  {
    quote: "No service fee means we actually call when something seems off instead of waiting. Great peace of mind.",
    name: "Mike & Linda T.",
    location: "Youngstown, OH",
  },
]

export default function AguaKarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[550px] flex items-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-blue-700 to-blue-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Member Benefits</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to the
              <span className="block text-yellow-300">Agua Kare Family!</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              As part of your employee benefits, you now have access to the Agua Kare package—designed 
              to protect your home&apos;s plumbing, reduce repair costs, and provide peace of mind year-round.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call to Ask for Details
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg transition-colors border border-white/20"
              >
                Schedule Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Logo/Mascot */}
        <div className="hidden lg:block absolute bottom-8 right-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/Jack Waving.svg" 
            alt="" 
            className="h-48 w-auto opacity-90"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          
          {/* Benefits Grid */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
              Your Agua Kare Benefits
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Exclusive perks designed to save you money and give you priority access to our team.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div 
                    key={benefit.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative overflow-hidden"
                  >
                    {/* Highlight Badge */}
                    <div className="absolute top-4 right-4 bg-[var(--color-accent)] text-white text-xs font-bold px-2 py-1 rounded">
                      {benefit.highlight}
                    </div>
                    
                    <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Your Benefits Apply to All Services
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Our friendly team is dedicated to keeping your water systems running smoothly. 
                    AK Water Works technicians are skilled in various areas—your 10% discount and 
                    no service fee apply to everything we do.
                  </p>
                  <div className="grid gap-2">
                    {servicesIncluded.map((service) => (
                      <div key={service} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 text-white text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-2xl font-bold mb-2">Part of the Family</h3>
                  <p className="text-blue-100 mb-6">
                    We&apos;re here for all your plumbing and drain needs. Contact us about your project—big or small.
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
              What Agua Kare Members Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 text-lg mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stay Connected */}
          <section className="mb-16">
            <div className="bg-slate-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Stay Connected
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                Follow us on social media for tips, updates, and special offers. If you&apos;ve had 
                a positive experience, please share a review—your feedback helps others discover 
                the Agua Kare difference!
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  Leave a Review
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Your Benefits?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto">
              Our team is happy to explain your Agua Kare benefits and help you 
              schedule your first service. Give us a call!
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-xl rounded-lg transition-colors"
            >
              <Phone className="w-6 h-6" />
              Call to Ask for Details
            </a>
            <p className="text-blue-200 text-sm mt-6">
              {siteConfig.phone} • We&apos;re here to help
            </p>

            {/* Jack */}
            <div className="mt-8 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/Jack w Wrench.svg" 
                alt="" 
                className="h-24 w-auto opacity-80"
                aria-hidden="true"
              />
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
