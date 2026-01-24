import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Droplets,
  Home,
  Waves,
  PenTool,
  AlertTriangle,
  Star,
  Users
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { waterproofingServicesData } from '@/lib/constants/waterproofing'

export const metadata: Metadata = {
  title: 'Basement Waterproofing Services Northeast Ohio',
  description: `Professional basement waterproofing, foundation repair, sump pump services & crawl space encapsulation in Warren, Youngstown & Northeast Ohio. Free estimates. Call ${siteConfig.phone}.`,
}

const serviceIcons: Record<string, React.ElementType> = {
  Home,
  Shield,
  Waves,
  PenTool,
  Droplets,
}

const trustIndicators = [
  { stat: 'Lifetime', label: 'Transferable Warranty' },
  { stat: 'Free', label: 'Inspections' },
  { stat: '100%', label: 'Satisfaction Guaranteed' },
  { stat: '5+', label: 'Years Experience' },
]

const warningSignsData = [
  'Water stains on basement walls or floor',
  'Musty or moldy odors',
  'Visible cracks in foundation walls',
  'Efflorescence (white mineral deposits)',
  'Peeling paint or wallpaper',
  'Warped or buckling floors',
  'Standing water after rain',
  'High humidity in basement',
]

const whyChooseUs = [
  { icon: Shield, title: 'Lifetime Warranty', desc: 'Transferable warranty that protects your investment.' },
  { icon: Clock, title: 'Fast Response', desc: 'Same-day estimates and quick project starts.' },
  { icon: Award, title: 'Certified Technicians', desc: 'Trained in the latest waterproofing techniques.' },
  { icon: Users, title: 'Local Experts', desc: 'We know Northeast Ohio basements.' },
]

export default function WaterproofingHubPage() {
  return (
    <>
      {/* Full-Width Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Hero-waterproofing.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Waterproofing Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Keep Your Basement
              <span className="block text-[var(--color-accent)]">Dry & Protected</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Northeast Ohio's trusted waterproofing experts. We solve wet basement problems
              permanently with proven solutions backed by our lifetime warranty.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold text-lg rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="/waterproofing/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg transition-colors border border-white/20"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustIndicators.map((item) => (
                <div key={item.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white">{item.stat}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Waterproofing Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive solutions for every water intrusion problem. From minor seepage
              to major flooding, we have the expertise to fix it right.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterproofingServicesData.map((service) => {
              const IconComponent = serviceIcons[service.iconName] || Droplets
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--color-primary)]/10 rounded-xl group-hover:bg-[var(--color-primary)] transition-colors">
                      <IconComponent className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[var(--color-primary)] font-medium text-sm group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Warning Signs You Need Waterproofing
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                Don't ignore these common signs of water intrusion. Early detection can save
                thousands in repairs.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {warningSignsData.map((sign) => (
                  <div key={sign} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="text-slate-700">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800">
                  <strong>Notice any of these signs?</strong> Get a free inspection before the problem gets worse.{' '}
                  <Link href="/waterproofing/contact" className="underline font-semibold">
                    Schedule your free inspection →
                  </Link>
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-slate-300">
              <div className="text-center text-slate-400 p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-slate-200 flex items-center justify-center">
                  <Droplets className="w-8 h-8" />
                </div>
                <p className="font-medium">Waterproofing Work Photo</p>
                <p className="text-sm mt-1">Add an image of your team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Northeast Ohio Trusts AK Water Works
            </h2>
            <p className="text-lg text-slate-400">
              We've built our reputation on quality work, lifetime warranties, and exceptional customer service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-slate-800 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-[var(--color-accent)]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Waterproofing Process
            </h2>
            <p className="text-lg text-slate-600">
              From inspection to installation, we follow a proven process to ensure your basement stays dry.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Free Inspection', desc: 'We assess your basement and identify all water entry points.' },
              { step: '2', title: 'Custom Solution', desc: 'We design a waterproofing system tailored to your home.' },
              { step: '3', title: 'Expert Installation', desc: 'Our certified team installs your system efficiently.' },
              { step: '4', title: 'Lifetime Protection', desc: 'Enjoy a dry basement backed by our lifetime warranty.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-white text-white" />
                  ))}
                </div>
                <span className="text-2xl font-bold">{siteConfig.reviews.rating}</span>
                <span className="text-green-100">({siteConfig.reviews.count}+ reviews)</span>
              </div>
              <p className="text-green-100 mb-6">
                Don't just take our word for it. See what Northeast Ohio homeowners
                are saying about our waterproofing services.
              </p>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
              >
                Read All Reviews <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                &quot;After years of dealing with a wet basement, AK Water Works finally solved the problem.
                Their team was professional, the price was fair, and the lifetime warranty gives us peace of mind.
                Should have called them years ago!&quot;
              </blockquote>
              <p className="font-semibold text-slate-900">— Sarah M., Warren, OH</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 md:py-20 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <AlertTriangle className="w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Water in Your Basement?
                </h2>
              </div>
              <p className="text-xl text-red-100">
                Don't wait for the damage to get worse. We offer fast response and emergency service.
              </p>
            </div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-red-600 font-bold text-xl rounded-xl hover:bg-red-50 transition-colors shadow-xl whitespace-nowrap"
            >
              <Phone className="w-6 h-6" />
              Call Now: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Dry Basement?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your free waterproofing inspection today. Our experts will identify the
            source of your water problems and recommend the best solution for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-bold text-lg rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <Link
              href="/waterproofing/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
