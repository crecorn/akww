import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Building2, Landmark, Factory, Siren, HardHat, Wrench,
  CheckCircle2, ArrowRight, Phone, Shield, Clock, Users,
  Building, Store, UtensilsCrossed, GraduationCap, Hotel,
  Stethoscope, Warehouse, Church
} from 'lucide-react'
import { commercialServicesData } from '@/lib/constants/commercial'
import { siteConfig } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Commercial Plumbing Services | AK Water Works',
  description: 'Professional commercial plumbing for businesses, industrial facilities, and municipal buildings in Northeast Ohio. New construction, tenant build-outs, emergency service, and maintenance programs.',
}

const iconMap: Record<string, typeof Building2> = {
  Building2, Landmark, Factory, Siren,
}

const commercialVenues = [
  { name: 'Office Buildings', icon: Building, description: 'Corporate offices & business parks' },
  { name: 'Retail & Shopping', icon: Store, description: 'Stores, malls & shopping centers' },
  { name: 'Restaurants & Food Service', icon: UtensilsCrossed, description: 'Kitchens, bars & dining facilities' },
  { name: 'Healthcare Facilities', icon: Stethoscope, description: 'Clinics, medical offices & labs' },
  { name: 'Hotels & Hospitality', icon: Hotel, description: 'Hotels, motels & event venues' },
  { name: 'Educational Institutions', icon: GraduationCap, description: 'Schools, colleges & training centers' },
  { name: 'Industrial & Manufacturing', icon: Factory, description: 'Plants, factories & production facilities' },
  { name: 'Warehouses & Distribution', icon: Warehouse, description: 'Storage & logistics facilities' },
  { name: 'Government & Municipal', icon: Landmark, description: 'Public buildings & facilities' },
  { name: 'Religious Institutions', icon: Church, description: 'Churches, temples & community centers' },
]

const trustIndicators = [
  { stat: '500+', label: 'Commercial Projects' },
  { stat: '24/7', label: 'Emergency Response' },
  { stat: '100%', label: 'Licensed & Insured' },
  { stat: '5+', label: 'Years Experience' },
]

const newConstructionFeatures = [
  'Complete plumbing system design & installation',
  'Code compliance & permit management',
  'Coordination with general contractors',
  'Multi-story & complex building systems',
  'Water heater & boiler installations',
  'Backflow prevention systems',
  'Grease trap & interceptor installation',
  'ADA-compliant fixture installation',
]

const expansionFeatures = [
  'Tenant build-out plumbing',
  'System capacity upgrades',
  'Additional fixture installations',
  'Restroom additions & renovations',
  'Break room & kitchen plumbing',
  'Equipment hookups',
  'Water line extensions',
  'Drain line modifications',
]

export default function CommercialPage() {
  return (
    <>
      {/* Full-Width Video Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Commercial-plumber.mp4" type="video/mp4" />
        </video>
        {/* Fallback image if video doesn't load */}
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/images/AK-Water-Works-Van.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Commercial Division</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Commercial
              <span className="block text-[var(--color-accent)]">Plumbing Solutions</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Trusted by businesses across Northeast Ohio for new construction, 
              renovations, and ongoing maintenance. Licensed, insured, and 
              committed to minimizing disruption to your operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/commercial/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold text-lg rounded-lg transition-colors"
              >
                Contact Us to Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg transition-colors border border-white/20"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
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
              Comprehensive Commercial Services
            </h2>
            <p className="text-lg text-slate-600">
              From emergency repairs to complete new construction, our commercial division 
              delivers professional plumbing solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {commercialServicesData.map((service) => {
              const Icon = iconMap[service.iconName] || Building2
              return (
                <Link
                  key={service.slug}
                  href={`/commercial/${service.slug}`}
                  className="group bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-slate-900 rounded-xl group-hover:bg-[var(--color-primary)] transition-colors">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {service.shortDescription}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold group-hover:gap-3 transition-all">
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

      {/* Commercial Venues Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industries & Facilities We Serve
            </h2>
            <p className="text-lg text-slate-600">
              Our commercial plumbing team has extensive experience working with diverse 
              businesses and facilities across Northeast Ohio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {commercialVenues.map((venue) => {
              const Icon = venue.icon
              return (
                <div 
                  key={venue.name}
                  className="bg-slate-50 rounded-xl p-5 text-center hover:bg-slate-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{venue.name}</h3>
                  <p className="text-sm text-slate-500">{venue.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* New Construction & Expansions */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* New Construction */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[var(--color-accent)] rounded-xl">
                  <HardHat className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">New Construction</h2>
              </div>
              <p className="text-slate-400 mb-6 text-lg">
                Building something new? Our team works directly with contractors and 
                project managers to deliver complete plumbing systems on time and to code.
              </p>
              <ul className="space-y-3 mb-8">
                {newConstructionFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/commercial/new-construction"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:gap-3 transition-all"
              >
                Learn More About New Construction <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Expansions & Renovations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[var(--color-primary)] rounded-xl">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Expansions & Renovations</h2>
              </div>
              <p className="text-slate-400 mb-6 text-lg">
                Growing your business? Renovating your space? We handle all plumbing 
                modifications with minimal disruption to your ongoing operations.
              </p>
              <ul className="space-y-3 mb-8">
                {expansionFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/commercial/contact"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
              >
                Discuss Your Expansion Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Businesses Choose AK Water Works
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We understand that commercial plumbing issues can impact your bottom line. 
                That&apos;s why we&apos;re committed to professional service, transparent pricing, 
                and minimal disruption to your operations.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Fully Licensed & Insured', desc: 'Complete liability coverage and all required commercial licensing' },
                  { icon: Clock, title: 'Flexible Scheduling', desc: 'After-hours and weekend work available to minimize business disruption' },
                  { icon: Users, title: 'Dedicated Project Managers', desc: 'Single point of contact for seamless communication throughout your project' },
                  { icon: CheckCircle2, title: 'Transparent Pricing', desc: 'Detailed proposals with no hidden fees or surprise charges' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-slate-200 rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-slate-300">
              <div className="text-center text-slate-400 p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-slate-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8" />
                </div>
                <p className="font-medium">Commercial Project Photo</p>
                <p className="text-sm mt-1">Add an image of a completed commercial project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re planning new construction, expanding your facility, or need 
            reliable maintenance, our commercial team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/commercial/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-bold text-lg rounded-lg hover:bg-slate-100 transition-colors"
            >
              Contact Us to Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762208.5765653821!2d-81.4!3d41.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830d7958b2efab7%3A0x29c96c33f802bed8!2sNortheast%20Ohio!5e0!3m2!1sen!2sus!4v1704931200000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AK Water Works Commercial Service Area - Northeast Ohio"
                className="w-full"
              />
            </div>

            {/* Service Area Info */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Serving Northeast Ohio Businesses
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our commercial plumbing team provides service throughout the 
                greater Cleveland, Akron, and Youngstown metro areas.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {[
                  'Cleveland',
                  'Akron',
                  'Youngstown',
                  'Warren',
                  'Ashtabula',
                  'Parma',
                  'Canton',
                  'Mentor',
                  'Boardman',
                  'Niles',
                  'Kent',
                  'Aurora',
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:gap-3 transition-all"
              >
                View All Service Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
