import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/constants/site'
import { LocalBusinessSchema } from '@/components/seo/json-ld'
import { HeroCTA } from '@/components/ui/hero-cta'
import { 
  Phone, 
  Droplets, 
  Wrench, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  AlertTriangle
} from 'lucide-react'

export const metadata: Metadata = {
  title: `Plumbing & Waterproofing Services Warren & Youngstown OH | ${siteConfig.name}`,
  description: `Family-owned plumbing and waterproofing company serving Warren, Youngstown & Northeast Ohio. 24/7 emergency service. BBB A+ rated with ${siteConfig.reviews.count}+ reviews. Call ${siteConfig.phone}.`,
  alternates: {
    canonical: siteConfig.url,
  },
}

const services = [
  {
    icon: Wrench,
    title: 'Plumbing Services',
    description: 'Expert repairs, installations, and maintenance for all your plumbing needs. Water heaters, pipes, fixtures & more.',
    href: '/plumbing-services',
    color: 'bg-blue-500',
  },
  {
    icon: Droplets,
    title: 'Basement Waterproofing',
    description: 'Keep your basement dry with professional waterproofing solutions. Foundation repair, sump pumps & drainage systems.',
    href: '/waterproofing',
    color: 'bg-cyan-500',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Services',
    description: 'Fast response to water emergencies. Professional cleanup, drying, and recovery to protect your property.',
    href: '/emergencies',
    color: 'bg-amber-500',
  },
  {
    icon: Building2,
    title: 'Commercial Plumbing',
    description: 'Comprehensive plumbing solutions for businesses, restaurants, and property managers throughout the region.',
    href: '/commercial',
    color: 'bg-emerald-500',
  },
]

const trustBadges = [
  { label: 'BBB A+', sublabel: 'Accredited', icon: Shield },
  { label: '24/7', sublabel: 'Emergency Service', icon: Clock },
  { label: `${siteConfig.reviews.rating}★`, sublabel: `${siteConfig.reviews.count}+ Reviews`, icon: Star },
  { label: 'Licensed', sublabel: 'Bonded & Insured', icon: CheckCircle2 },
]

const serviceAreas = [
  { name: 'Trumbull County', state: 'OH', slug: 'trumbull-county' },
  { name: 'Mahoning County', state: 'OH', slug: 'mahoning-county' },
  { name: 'Portage County', state: 'OH', slug: 'portage-county' },
  { name: 'Ashtabula County', state: 'OH', slug: 'ashtabula-county' },
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/AK-Water-Works-Van.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">24/7 Emergency Service Available</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in stagger-1">
              Northeast Ohio's Trusted
              <span className="block text-[var(--color-accent)]">Plumbing & Waterproofing</span>
              Experts
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl animate-fade-in stagger-2">
              Family-owned since 2020. Serving Warren, Youngstown, and surrounding areas with 
              professional service you can trust.
            </p>

            {/* CTAs */}
            <HeroCTA />

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in stagger-4">
              {trustBadges.map((badge) => (
                <div 
                  key={badge.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <badge.icon className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" />
                  <div className="font-bold text-lg">{badge.label}</div>
                  <div className="text-sm text-blue-200">{badge.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Water Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From emergency repairs to preventive maintenance, we handle all your plumbing and waterproofing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[var(--color-primary)] font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                {/* Jack Waving - responsive sizing */}
                <img 
                  src="/images/Jack Waving.svg" 
                  alt="" 
                  className="h-24 md:h-32 lg:h-48 w-auto flex-shrink-0 -mt-2"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Why Northeast Ohio Trusts AK Water Works
                  </h2>
                  <p className="text-lg text-slate-600">
                    When water problems strike, you need a team that responds fast, works professionally, 
                    and stands behind their work. That's been our commitment since day one.
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
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
                >
                  Learn more about our team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-[var(--color-primary)] mb-2">
                  {siteConfig.reviews.rating}
                </div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  Based on {siteConfig.reviews.count}+ verified reviews
                </p>

                <blockquote className="text-lg text-slate-700 italic mb-4">
                  "AK Water Works was amazing! They came out same day and fixed our burst pipe quickly. 
                  Professional, friendly, and fairly priced. Highly recommend!"
                </blockquote>
                <p className="font-semibold text-slate-900">— John D., Warren, OH</p>

                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 mt-6 text-[var(--color-primary)] font-semibold hover:underline"
                >
                  Read more reviews
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proudly Serving Northeast Ohio
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Serving 4 counties across Northeast Ohio with expert plumbing, waterproofing, and emergency water damage services.
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

      {/* Jack Mascot Accent - straddling sections */}
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

      {/* Emergency CTA */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Plumbing Emergency?
            </h2>
          </div>
          <p className="text-xl text-green-100 mb-6">
            Don't wait! Our team is available 24/7 to help.
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

      {/* Value Propositions */}
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
                Flexible payment options to fit your budget. Get the service you need now.
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
                We stand behind our work 100%. Your satisfaction is our promise.
              </p>
              <span className="inline-flex items-center gap-1 text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 transition-all">
                Our Promise <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
