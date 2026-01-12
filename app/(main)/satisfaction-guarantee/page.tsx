import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Phone, CheckCircle2, ArrowRight, Heart, Shield, 
  Users, Handshake, Star, MessageSquare
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Satisfaction Guarantee | AK Water Works',
  description: 'At AK Water Works, we treat every home like our own. Learn about our commitment to quality work and customer satisfaction. Call for warranty details.',
}

const values = [
  {
    icon: Heart,
    title: 'Family Values',
    desc: 'We treat your home with the same care and respect we would give our own family\'s home.',
  },
  {
    icon: Handshake,
    title: 'Honest Communication',
    desc: 'We explain what we find, what we recommend, and why—no pressure, no surprises.',
  },
  {
    icon: Shield,
    title: 'Quality Workmanship',
    desc: 'We take pride in doing the job right. Our reputation depends on your satisfaction.',
  },
  {
    icon: Users,
    title: 'Standing Behind Our Work',
    desc: 'If something isn\'t right, we want to know. We\'ll work with you to make it right.',
  },
]

const commitments = [
  'We show up on time and ready to work',
  'We keep you informed throughout the job',
  'We respect your home—clean workspace, clean finish',
  'We explain our work so you understand what was done',
  'We answer your questions honestly',
  'We follow up to make sure you\'re happy',
]

const testimonials = [
  {
    quote: 'They treated my grandmother\'s home like it was their own mother\'s house. That\'s rare these days.',
    name: 'Jennifer R.',
    location: 'Warren, OH',
  },
  {
    quote: 'No pushy upsells, just honest advice. They actually talked me out of work I didn\'t need.',
    name: 'Mark & Susan T.',
    location: 'Boardman, OH',
  },
  {
    quote: 'When I had a question weeks after the job, they picked up the phone and helped right away.',
    name: 'David L.',
    location: 'Cortland, OH',
  },
]

export default function SatisfactionGuaranteePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[450px] md:min-h-[500px] flex items-center text-white overflow-hidden">
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
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Our Promise</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Family,
              <span className="block text-yellow-300">Helping Your Family.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              At AK Water Works, we believe in doing right by our neighbors. 
              When you invite us into your home, we take that trust seriously.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call for Warranty Details
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg transition-colors border border-white/20"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Main Content */}
      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          
          {/* Values Grid */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
              What Satisfaction Means to Us
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              It&apos;s not about fine print or legal language. It&apos;s about treating 
              you the way we&apos;d want to be treated.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div 
                    key={value.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center"
                  >
                    <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Our Commitments */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    How We Work
                  </h2>
                  <p className="text-slate-600 mb-6">
                    We don&apos;t believe in gimmicks or marketing promises. We believe 
                    in showing up, doing quality work, and building relationships 
                    that last. Here&apos;s what you can expect when you work with us:
                  </p>
                  <div className="space-y-3">
                    {commitments.map((commitment) => (
                      <div key={commitment} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{commitment}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <Heart className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Family-Owned Since 2020
                  </h3>
                  <p className="text-slate-600 mb-6">
                    When you call AK Water Works, you&apos;re not calling a faceless 
                    corporation. You&apos;re calling a local family business that 
                    cares about our community.
                  </p>
                  <p className="text-slate-500 text-sm">
                    Founded by {siteConfig.founder.name} in Warren, Ohio
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Warranty Info */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <Shield className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Warranty Information
                </h2>
                <p className="text-slate-300 text-lg mb-6">
                  Different services come with different warranty coverage. We&apos;re 
                  happy to explain warranty details for any service you&apos;re 
                  considering—just give us a call.
                </p>
                <p className="text-slate-400 mb-8">
                  We believe in being upfront about what&apos;s covered and for how long. 
                  No fine print surprises, no runaround when you need us.
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call for Warranty Details
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
              What Our Neighbors Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
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
                  <blockquote className="text-slate-700 mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Not Happy Section */}
          <section className="mb-16">
            <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-200">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <MessageSquare className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      Not Happy With Something?
                    </h2>
                    <p className="text-slate-700">
                      We want to know. Seriously. If something doesn&apos;t feel right 
                      about your experience with us, please reach out. We can&apos;t 
                      fix what we don&apos;t know about, and we genuinely want every 
                      customer to feel good about choosing us.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 ml-12">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us Directly
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-amber-100 text-amber-700 font-semibold rounded-lg transition-colors border border-amber-300"
                  >
                    Send Us a Message
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-[var(--color-primary)] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Our Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto">
              We&apos;re happy to discuss any service, explain warranty coverage, 
              or answer questions before you commit to anything.
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[var(--color-primary)] font-bold text-xl rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.phone}
            </a>
            <p className="text-blue-200 text-sm mt-6">
              Call for warranty details on the service you&apos;re interested in
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
