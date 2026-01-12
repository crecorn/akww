import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, ArrowRight, MapPin, Clock, Shield, Award, Droplets, Home, Wrench, Star } from 'lucide-react'
import { getCountyBySlug } from '@/lib/constants/counties'
import { siteConfig } from '@/lib/constants/site'
import { BookNowButton } from '@/components/ui/book-now-button'

const county = getCountyBySlug('ashtabula-county')!

export const metadata: Metadata = {
  title: `Plumbing & Waterproofing in ${county.name} | AK Water Works`,
  description: `Professional plumbing, sewer & drain, and waterproofing services in ${county.name}, ${county.state}. Serving ${county.cities.slice(0, 5).join(', ')} and surrounding areas. 24/7 emergency service.`,
}

const services = [
  { title: 'Plumbing Services', description: 'Complete residential and commercial plumbing repairs, installations, and maintenance.', href: `/service-areas/${county.slug}/plumbing`, icon: Wrench, features: ['Water Heaters', 'Pipe Repair', 'Fixture Installation', 'Emergency Service'] },
  { title: 'Sewer & Drain', description: 'Professional drain cleaning, sewer repair, and camera inspection services.', href: `/service-areas/${county.slug}/sewer-drain`, icon: Droplets, features: ['Drain Cleaning', 'Sewer Repair', 'Hydro Jetting', 'Camera Inspection'] },
  { title: 'Waterproofing', description: 'Protect your basement and foundation from water damage with our waterproofing solutions.', href: `/service-areas/${county.slug}/waterproofing`, icon: Home, features: ['Basement Waterproofing', 'Foundation Repair', 'Sump Pumps', 'French Drains'] },
]

const whyChooseUs = [
  { icon: MapPin, title: `Serving ${county.name}`, description: 'Full coverage across Ashtabula, Geneva, Conneaut, and all surrounding communities.' },
  { icon: Clock, title: '24/7 Emergency Service', description: 'Plumbing emergencies don\'t wait. Neither do we. Call anytime.' },
  { icon: Shield, title: 'Licensed & Insured', description: 'Fully licensed, bonded, and insured for your protection.' },
  { icon: Award, title: 'Satisfaction Guaranteed', description: 'We stand behind every job with our satisfaction guarantee.' },
]

export default function AshtabulaCountyPage() {
  return (
    <div className="space-y-12 py-8">
      <header className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[var(--color-primary)] to-blue-800 rounded-2xl p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-blue-200 mb-4"><MapPin className="w-5 h-5" /><span className="font-medium">Proudly Serving {county.name}</span></div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Your Trusted Plumber in {county.name}, {county.state}</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl">{county.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${county.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"><Phone className="w-5 h-5" />Call {county.phone}</a>
                <BookNowButton variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/30">Book Now</BookNowButton>
              </div>
            </div>
            <div className="hidden lg:flex w-80 self-stretch bg-white/10 rounded-xl border-2 border-dashed border-white/30 items-center justify-center"><div className="text-center text-white/50"><div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-white/10 flex items-center justify-center"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div><p className="text-sm font-medium">Hero Image</p></div></div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><Shield className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" /><p className="font-bold text-slate-900">BBB A+</p><p className="text-sm text-slate-500">Accredited</p></div>
          <div><Clock className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" /><p className="font-bold text-slate-900">24/7</p><p className="text-sm text-slate-500">Emergency Service</p></div>
          <div><Star className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" /><p className="font-bold text-slate-900">{siteConfig.reviews.rating}★</p><p className="text-sm text-slate-500">{siteConfig.reviews.count}+ Reviews</p></div>
          <div><CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" /><p className="font-bold text-slate-900">Licensed</p><p className="text-sm text-slate-500">Bonded & Insured</p></div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Our Services in {county.name}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => { const Icon = service.icon; return (
            <Link key={service.title} href={service.href} className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all">
              <div className="flex items-center gap-4 mb-4"><div className="p-3 bg-[var(--color-primary)]/10 rounded-lg group-hover:bg-[var(--color-primary)] transition-colors"><Icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" /></div><h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">{service.title}</h3></div>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">{service.features.map((feature) => (<li key={feature} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />{feature}</li>))}</ul>
              <div className="mt-4 flex items-center gap-1 text-[var(--color-primary)] font-medium group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></div>
            </Link>
          )})}
        </div>
      </section>

      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Cities & Areas We Serve in {county.name}</h2>
          <p className="text-slate-300 mb-6">We provide fast, reliable service throughout {county.name}. Our service area includes:</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">{county.cities.map((city) => (<div key={city} className="flex items-center gap-2 text-slate-200"><MapPin className="w-4 h-4 text-[var(--color-accent)]" />{city}</div>))}</div>
          <div className="mt-6 pt-6 border-t border-slate-700"><h3 className="font-semibold text-white mb-3">Townships:</h3><div className="flex flex-wrap gap-2">{county.townships.map((township) => (<span key={township} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">{township}</span>))}</div></div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Why {county.name} Trusts AK Water Works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyChooseUs.map((item) => { const Icon = item.icon; return (
            <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200"><div className="p-2 bg-[var(--color-accent)]/10 rounded-lg w-fit mb-3"><Icon className="w-5 h-5 text-[var(--color-accent)]" /></div><h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.description}</p></div>
          )})}
        </div>
      </section>

      <section className="bg-[var(--color-accent)] py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div><h3 className="text-2xl font-bold text-white mb-6">Why We're the Best Choice for {county.name}</h3><div className="space-y-3">{county.highlights.map((highlight, index) => (<div key={index} className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0" />{highlight}</div>))}</div></div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4"><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />))}</div><div><span className="text-2xl font-bold text-slate-900">{siteConfig.reviews.rating}</span><span className="text-slate-600 ml-2">({siteConfig.reviews.count}+ reviews)</span></div></div>
              <blockquote className="text-lg text-slate-700 italic mb-4">"Our lakefront property had major drainage issues. AK Water Works came out and fixed everything. They understand the unique challenges of waterfront homes!"</blockquote>
              <p className="text-slate-500">— Satisfied Customer, Geneva-on-the-Lake, OH</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-[var(--color-primary)] rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 h-64 lg:h-auto min-h-[300px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380797.9036880893!2d-80.75!3d41.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883283e6b2b3c5e5%3A0x5b5c5c5c5c5c5c5c!2sAshtabula%20County%2C%20OH!5e0!3m2!1sen!2sus!4v1704931200000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0, minHeight: '300px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Map of ${county.name}, ${county.state}`} />
            </div>
            <div className="p-6 md:p-8 text-white flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Service in {county.name}?</h2>
              <p className="text-blue-100 mb-6">Whether it's a plumbing emergency or scheduled maintenance, we're here to help.</p>
              <div className="flex flex-col gap-3">
                <a href={`tel:${county.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"><Phone className="w-5 h-5" />{county.phone}</a>
                <BookNowButton variant="primary" size="lg">Book Now</BookNowButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
