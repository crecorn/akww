import { Metadata } from 'next'
import { Phone, CheckCircle2, Home, Droplets, Shield, AlertTriangle, Construction, Clock, Star, MapPin } from 'lucide-react'
import { getCountyBySlug } from '@/lib/constants/counties'
import { siteConfig } from '@/lib/constants/site'
import { BookNowButton } from '@/components/ui/book-now-button'

const county = getCountyBySlug('ashtabula-county')!

export const metadata: Metadata = {
  title: `Basement Waterproofing in ${county.name} | AK Water Works`,
  description: `Professional basement waterproofing and foundation repair in ${county.name}, ${county.state}. Sump pumps, French drains, crack repair, and more.`,
}

const services = [
  { title: 'Interior Waterproofing', description: 'French drains, sump pumps, and interior drainage systems.', icon: Home },
  { title: 'Exterior Waterproofing', description: 'Excavation and waterproof membrane application.', icon: Shield },
  { title: 'Foundation Crack Repair', description: 'Epoxy injection and carbon fiber reinforcement.', icon: Construction },
  { title: 'Sump Pump Installation', description: 'Primary and backup sump pump systems.', icon: Droplets },
  { title: 'Crawl Space Encapsulation', description: 'Moisture barrier and dehumidification systems.', icon: Home },
  { title: 'Emergency Water Removal', description: '24/7 response for flooded basements.', icon: Clock },
]

const benefits = ['Free basement inspections', 'Lifetime transferable warranties', 'Licensed, bonded, and insured', '24/7 emergency response', 'Lake Erie waterfront expertise', 'Financing options available']
const warningSignsList = ['Water seeping through basement walls', 'Musty odors in the basement', 'Visible cracks in foundation', 'Efflorescence (white mineral deposits)', 'Mold or mildew growth', 'Standing water after rain']

export default function AshtabulaWaterproofingPage() {
  return (
    <div className="space-y-0">
      <header className="bg-gradient-to-br from-[var(--color-primary)] to-blue-800 py-12 md:py-16 text-white"><div className="container mx-auto px-4"><div className="flex items-center gap-2 text-blue-200 mb-4"><Home className="w-5 h-5" /><span className="font-medium">Waterproofing Services</span></div><h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Basement Waterproofing in {county.name}, {county.state}</h1><p className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl">Protect your home from water damage with professional basement waterproofing and foundation repair. From Lake Erie waterfront properties to inland homes, we keep basements dry.</p><div className="flex flex-col sm:flex-row gap-4"><a href={`tel:${county.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"><Phone className="w-5 h-5" />Call {county.phone}</a><BookNowButton variant="ghost" size="lg" service="Waterproofing" className="bg-white/10 hover:bg-white/20 text-white border border-white/30">Book Now</BookNowButton></div></div></header>

      <section className="container mx-auto px-4 py-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"><div><Shield className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" /><p className="font-bold text-slate-900">BBB A+</p><p className="text-sm text-slate-500">Accredited</p></div><div><Clock className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" /><p className="font-bold text-slate-900">24/7</p><p className="text-sm text-slate-500">Emergency Service</p></div><div><Star className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" /><p className="font-bold text-slate-900">{siteConfig.reviews.rating}★</p><p className="text-sm text-slate-500">{siteConfig.reviews.count}+ Reviews</p></div><div><CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" /><p className="font-bold text-slate-900">Licensed</p><p className="text-sm text-slate-500">Bonded & Insured</p></div></div></section>

      <section className="bg-slate-900 py-12"><div className="container mx-auto px-4"><h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Waterproofing Services</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{services.map((service) => { const Icon = service.icon; return (<div key={service.title} className="bg-slate-800 rounded-xl p-5 border border-slate-700"><div className="flex items-start gap-4"><div className="p-2 bg-[var(--color-accent)]/20 rounded-lg"><Icon className="w-5 h-5 text-[var(--color-accent)]" /></div><div><h3 className="font-semibold text-white">{service.title}</h3><p className="text-sm text-slate-400 mt-1">{service.description}</p></div></div></div>)})}</div></div></section>

      <section className="py-12"><div className="container mx-auto px-4"><div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8"><div className="flex items-start gap-4 mb-6"><AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" /><div><h2 className="text-xl font-bold text-slate-900">Signs Your Basement Needs Waterproofing</h2><p className="text-slate-600 mt-1">Early intervention can save thousands in repairs</p></div></div><div className="grid sm:grid-cols-2 gap-3">{warningSignsList.map((sign, index) => (<div key={index} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" /><span className="text-slate-700">{sign}</span></div>))}</div></div></div></section>

      <section className="pb-12"><div className="container mx-auto px-4"><h2 className="text-2xl font-bold text-slate-900 mb-4">Why {county.name} Homes Need Waterproofing</h2><p className="text-slate-600 mb-4">{county.name}'s proximity to Lake Erie means high water tables and significant moisture challenges. Our team understands the unique waterproofing needs of this region.</p><div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">{county.cities.map((city) => (<div key={city} className="flex items-center gap-2 text-slate-700"><MapPin className="w-4 h-4 text-[var(--color-primary)]" />{city}</div>))}</div></div></section>

      <section className="bg-[var(--color-accent)] py-12"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-8 items-center"><div><h3 className="text-2xl font-bold text-white mb-6">Why Choose AK Water Works for Waterproofing?</h3><div className="space-y-3">{benefits.map((benefit, index) => (<div key={index} className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0" />{benefit}</div>))}</div></div><div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"><div className="flex items-center gap-4 mb-4"><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />))}</div><div><span className="text-2xl font-bold text-slate-900">{siteConfig.reviews.rating}</span><span className="text-slate-600 ml-2">({siteConfig.reviews.count}+ reviews)</span></div></div><blockquote className="text-lg text-slate-700 italic mb-4">"Living near the lake, moisture was always a problem. AK Water Works installed a comprehensive system that finally solved our basement water issues."</blockquote><p className="text-slate-500">— Customer in Conneaut, OH</p></div></div></div></section>

      <section className="py-12"><div className="container mx-auto px-4"><div className="bg-[var(--color-primary)] rounded-2xl overflow-hidden"><div className="grid lg:grid-cols-3"><div className="lg:col-span-2 h-64 lg:h-auto min-h-[300px]"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380797.9036880893!2d-80.75!3d41.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883283e6b2b3c5e5%3A0x5b5c5c5c5c5c5c5c!2sAshtabula%20County%2C%20OH!5e0!3m2!1sen!2sus!4v1704931200000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0, minHeight: '300px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Map of ${county.name}`} /></div><div className="p-6 md:p-8 text-white flex flex-col justify-center"><h2 className="text-2xl md:text-3xl font-bold mb-3">Get a Free Waterproofing Estimate</h2><p className="text-blue-100 mb-6">We'll inspect your basement and provide a detailed quote with no obligation.</p><div className="flex flex-col gap-3"><a href={`tel:${county.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"><Phone className="w-5 h-5" />{county.phone}</a><BookNowButton variant="primary" size="lg" service="Waterproofing">Book Now</BookNowButton></div></div></div></div></div></section>
    </div>
  )
}
