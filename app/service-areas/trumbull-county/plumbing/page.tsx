import { Metadata } from 'next'
import { 
  Phone, 
  CheckCircle2, 
  Wrench,
  Flame,
  Droplets,
  ShowerHead,
  Clock,
  Shield,
  Star,
  MapPin
} from 'lucide-react'
import { getCountyBySlug } from '@/lib/constants/counties'
import { siteConfig } from '@/lib/constants/site'
import { BookNowButton } from '@/components/ui/book-now-button'

const county = getCountyBySlug('trumbull-county')!

export const metadata: Metadata = {
  title: `Plumbing Services in ${county.name} | AK Water Works`,
  description: `Professional plumbing services in ${county.name}, ${county.state}. Water heaters, pipe repair, fixture installation, and 24/7 emergency plumbing. Serving ${county.cities.slice(0, 3).join(', ')} and more.`,
}

const services = [
  {
    title: 'Water Heater Services',
    description: 'Installation, repair, and replacement of tank and tankless water heaters.',
    icon: Flame,
  },
  {
    title: 'Pipe Repair & Replacement',
    description: 'Fix leaks, burst pipes, and replace old or corroded plumbing.',
    icon: Wrench,
  },
  {
    title: 'Fixture Installation',
    description: 'Professional installation of faucets, toilets, sinks, and showers.',
    icon: ShowerHead,
  },
  {
    title: 'Leak Detection',
    description: 'Find hidden leaks before they cause major damage.',
    icon: Droplets,
  },
  {
    title: 'Emergency Plumbing',
    description: '24/7 emergency service for burst pipes, major leaks, and no water situations.',
    icon: Clock,
  },
  {
    title: 'Repiping Services',
    description: 'Complete home repiping for older homes with galvanized or polybutylene pipes.',
    icon: Shield,
  },
]

const benefits = [
  'Same-day service available in ' + county.name,
  'Upfront pricing - no surprises',
  'Licensed, bonded, and insured',
  '24/7 emergency service',
  'Satisfaction guaranteed',
  'Local plumbers who know the area',
]

export default function TrumbullPlumbingPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <header className="bg-gradient-to-br from-[var(--color-primary)] to-blue-800 py-12 md:py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-200 mb-4">
            <Wrench className="w-5 h-5" />
            <span className="font-medium">Plumbing Services</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Plumbing Services in {county.name}, {county.state}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl">
            From minor repairs to major installations, our licensed plumbers provide 
            reliable service throughout {county.name}. We serve Warren, Niles, Cortland, 
            and all surrounding communities with fast, professional plumbing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${county.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {county.phone}
            </a>
            <BookNowButton 
              variant="ghost" 
              size="lg"
              service="Plumbing"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30"
            >
              Book Now
            </BookNowButton>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <Shield className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" />
            <p className="font-bold text-slate-900">BBB A+</p>
            <p className="text-sm text-slate-500">Accredited</p>
          </div>
          <div>
            <Clock className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" />
            <p className="font-bold text-slate-900">24/7</p>
            <p className="text-sm text-slate-500">Emergency Service</p>
          </div>
          <div>
            <Star className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" />
            <p className="font-bold text-slate-900">{siteConfig.reviews.rating}★</p>
            <p className="text-sm text-slate-500">{siteConfig.reviews.count}+ Reviews</p>
          </div>
          <div>
            <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" />
            <p className="font-bold text-slate-900">Licensed</p>
            <p className="text-sm text-slate-500">Bonded & Insured</p>
          </div>
        </div>
      </section>

      {/* Services Grid - Dark Background */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Our Plumbing Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div 
                  key={service.title}
                  className="bg-slate-800 rounded-xl p-5 border border-slate-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[var(--color-accent)]/20 rounded-lg">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-slate-400 mt-1">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Plumbing Service Throughout {county.name}
          </h2>
          <p className="text-slate-600 mb-6">
            We provide plumbing services to all cities and townships in {county.name}, including:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {county.cities.map((city) => (
              <div key={city} className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us + Reviews - Green Background */}
      <section className="bg-[var(--color-accent)] py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose AK Water Works for Plumbing?
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Review */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div>
                  <span className="text-2xl font-bold text-slate-900">{siteConfig.reviews.rating}</span>
                  <span className="text-slate-600 ml-2">({siteConfig.reviews.count}+ reviews)</span>
                </div>
              </div>
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Had a water heater emergency on a Sunday. AK Water Works came out within an hour 
                and had a new unit installed by the afternoon. Great service!"
              </blockquote>
              <p className="text-slate-500">— Customer in Warren, OH</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-[var(--color-primary)] rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Left - Google Map (2/3) */}
              <div className="lg:col-span-2 h-64 lg:h-auto min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380797.9036880893!2d-80.95830565!3d41.2365397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833166f1a4f8c7d%3A0x36f96de5f02e23a2!2sTrumbull%20County%2C%20OH!5e0!3m2!1sen!2sus!4v1704931200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${county.name}, ${county.state}`}
                />
              </div>
              
              {/* Right - CTA (1/3) */}
              <div className="p-6 md:p-8 text-white flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Need a Plumber in {county.name}?
                </h2>
                <p className="text-blue-100 mb-6">
                  Call now for fast, reliable plumbing service or schedule online.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${county.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {county.phone}
                  </a>
                  <BookNowButton variant="primary" size="lg" service="Plumbing">
                    Book Now
                  </BookNowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
