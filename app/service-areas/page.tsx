import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Phone, Shield, Clock, Star, CheckCircle2, Users, Truck } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { countiesData } from '@/lib/constants/counties'
import { Header } from '@/components/marketing/header'
import { Footer } from '@/components/marketing/footer'
import { MobileContactBar } from '@/components/ui/mobile-contact-bar'

export const metadata: Metadata = {
  title: 'Service Areas | Northeast Ohio Plumbing | AK Water Works',
  description: 'AK Water Works serves Northeast Ohio including Trumbull, Mahoning, Portage, and Ashtabula Counties. 24/7 emergency plumbing and drain services.',
}

const trustIndicators = [
  { stat: '4', label: 'Counties Served' },
  { stat: '24/7', label: 'Emergency Service' },
  { stat: '60 Min', label: 'Response Time' },
  { stat: '100%', label: 'Satisfaction' },
]

const majorCities = [
  { name: 'Warren', county: 'Trumbull', desc: 'Our home base with fastest response' },
  { name: 'Youngstown', county: 'Mahoning', desc: 'Full residential & commercial coverage' },
  { name: 'Boardman', county: 'Mahoning', desc: 'Same-day service available' },
  { name: 'Niles', county: 'Trumbull', desc: 'Fast response from nearby base' },
  { name: 'Cortland', county: 'Trumbull', desc: 'Serving the entire community' },
  { name: 'Canfield', county: 'Mahoning', desc: 'Residential & commercial experts' },
  { name: 'Kent', county: 'Portage', desc: 'Kent State area specialists' },
  { name: 'Ravenna', county: 'Portage', desc: 'Complete plumbing solutions' },
  { name: 'Ashtabula', county: 'Ashtabula', desc: 'Lake Erie region experts' },
  { name: 'Geneva', county: 'Ashtabula', desc: 'Wine country coverage' },
  { name: 'Aurora', county: 'Portage', desc: 'Premium residential service' },
  { name: 'Streetsboro', county: 'Portage', desc: 'Fast growing community support' },
]

const whyLocal = [
  { icon: Truck, title: 'Faster Response', desc: 'Local technicians mean faster arrivals, especially for emergencies.' },
  { icon: MapPin, title: 'Know The Area', desc: 'We understand local building codes, common issues, and best solutions.' },
  { icon: Users, title: 'Community Focus', desc: 'We live and work here. Your neighbors are our neighbors.' },
  { icon: Shield, title: 'Always Available', desc: 'Local presence means 24/7 emergency coverage you can count on.' },
]

export default function ServiceAreasPage() {
  const counties = Object.values(countiesData)
  const ohioCounties = counties.filter(c => c.state === 'OH')

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Full-Width Hero */}
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/AK-Water-Works-Van.webp')" }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">Service Areas</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Proudly Serving
                <span className="block text-[var(--color-accent)]">Northeast Ohio</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                From Warren to Youngstown, Kent to Ashtabula, we&apos;re your local plumbing 
                and drain experts. Fast response, fair pricing, and quality work across 
                four counties.
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg transition-colors border border-white/20"
                >
                  Request Service
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

        {/* Counties Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Counties We Serve
              </h2>
              <p className="text-lg text-slate-600">
                We provide full plumbing, drain, and water damage restoration services 
                across four Northeast Ohio counties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ohioCounties.map((county) => (
                <Link
                  key={county.slug}
                  href={`/service-areas/${county.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--color-primary)]/10 rounded-xl group-hover:bg-[var(--color-primary)] transition-colors">
                      <MapPin className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {county.name}, {county.state}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">
                        {county.cities.slice(0, 5).join(', ')} & more
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {county.highlights.slice(0, 2).map((highlight) => (
                          <span 
                            key={highlight}
                            className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[var(--color-accent)]" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[var(--color-primary)] font-medium text-sm group-hover:gap-2 transition-all">
                        View Cities & Services <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Major Cities Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Major Cities We Serve
              </h2>
              <p className="text-lg text-slate-600">
                Fast, reliable service in all major Northeast Ohio communities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {majorCities.map((city) => (
                <div 
                  key={city.name}
                  className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                >
                  <h3 className="font-bold text-slate-900">{city.name}</h3>
                  <p className="text-xs text-slate-500 mb-1">{city.county} County</p>
                  <p className="text-sm text-slate-600">{city.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">
                Don&apos;t see your city? We likely serve it too!
              </p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call to confirm service in your area
              </a>
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose a Local Plumber?
              </h2>
              <p className="text-lg text-slate-400">
                Being local isn&apos;t just about location—it&apos;s about understanding your community 
                and being there when you need us most.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyLocal.map((item) => {
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

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Our Coverage Area
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Based in Warren, Ohio, we provide fast service throughout Northeast Ohio. 
                  Our central location means quick response times to all four counties we serve.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">{siteConfig.address.full}</p>
                      <p className="text-sm text-slate-600">Our headquarters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-primary)] mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">24/7 Emergency Service</p>
                      <p className="text-sm text-slate-600">Always available when you need us</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[var(--color-primary)] mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">{siteConfig.phone}</p>
                      <p className="text-sm text-slate-600">Call for immediate assistance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764068.4982916546!2d-81.24986395!3d41.1599925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830d7b2acdf20c5%3A0x9a6bb311c4497640!2sNortheast%20Ohio!5e0!3m2!1sen!2sus!4v1704931200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AK Water Works Service Area - Northeast Ohio"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-24 bg-[var(--color-accent)]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Trusted Across Northeast Ohio
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
                  Homeowners across all four counties trust AK Water Works for their 
                  plumbing and drain needs. See what your neighbors are saying.
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
                  &quot;AK Water Works serves the whole Mahoning Valley and they&apos;re always 
                  fast. Had them out to my Warren home and my mom&apos;s place in Boardman 
                  the same week. Professional service both times!&quot;
                </blockquote>
                <p className="font-semibold text-slate-900">— Tom K., Warren/Boardman, OH</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-[var(--color-primary)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Plumber in Your Area?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We&apos;re just a phone call away. Fast response times throughout 
              Trumbull, Mahoning, Portage, and Ashtabula Counties.
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
              >
                Schedule Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileContactBar />
      {/* Spacer for mobile contact bar */}
      <div className="h-16 lg:hidden" />
    </>
  )
}
