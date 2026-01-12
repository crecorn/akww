import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
  AlertTriangle
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { waterproofingServicesData } from '@/lib/constants/waterproofing'

export const metadata: Metadata = {
  title: 'Basement Waterproofing Services Northeast Ohio',
  description: `Professional basement waterproofing, foundation repair, sump pump services & crawl space encapsulation in Warren, Youngstown & Northeast Ohio. Free estimates. Call ${siteConfig.phone}.`,
}

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Lifetime Transferable Warranty',
    description: 'Our waterproofing systems come with a lifetime warranty that transfers to new homeowners.',
  },
  {
    icon: Clock,
    title: 'Fast Response Times',
    description: 'Water damage can\'t wait. We offer same-day estimates and quick project starts.',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Our team is trained and certified in the latest waterproofing techniques.',
  },
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

const serviceIcons: Record<string, React.ElementType> = {
  Home,
  Shield,
  Waves,
  PenTool,
  Droplets,
}

export default function WaterproofingHubPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden">
        {/* Background - Using gradient placeholder, replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-[var(--color-primary)]" />
        <div className="absolute inset-0 bg-[url('/images/waterproofing-hero.jpg')] bg-cover bg-center opacity-30" />
        
        {/* Content */}
        <div className="relative px-6 py-16 md:px-12 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <Droplets className="w-4 h-4" />
              Professional Waterproofing Solutions
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Keep Your Basement
              <span className="block text-[var(--color-accent)]">Dry & Protected</span>
            </h1>
            
            <p className="text-lg text-slate-200 mb-8 max-w-xl">
              Northeast Ohio's trusted waterproofing experts. We solve wet basement problems 
              permanently with proven solutions backed by our lifetime warranty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="/waterproofing/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors border border-white/30"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                Lifetime Warranty
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                Free Inspections
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                Financing Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Our Waterproofing Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions for every water intrusion problem. From minor seepage 
            to major flooding, we have the expertise to fix it right.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {waterproofingServicesData.map((service) => {
            const IconComponent = serviceIcons[service.iconName] || Droplets
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                    <IconComponent className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Warning Signs You Need Waterproofing
            </h2>
            <p className="text-slate-600">
              Don't ignore these common signs of water intrusion. Early detection can save 
              thousands in repairs.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {warningSignsData.map((sign, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-slate-700">{sign}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800">
            <strong>Notice any of these signs?</strong> Get a free inspection before the problem gets worse.{' '}
            <Link href="/waterproofing/contact" className="underline font-semibold">
              Schedule your free inspection →
            </Link>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
          Why Choose AK Water Works?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-[var(--color-accent)]" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
          Our Waterproofing Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Free Inspection', desc: 'We assess your basement and identify all water entry points.' },
            { step: '2', title: 'Custom Solution', desc: 'We design a waterproofing system tailored to your home.' },
            { step: '3', title: 'Expert Installation', desc: 'Our certified team installs your system efficiently.' },
            { step: '4', title: 'Lifetime Protection', desc: 'Enjoy a dry basement backed by our lifetime warranty.' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jack Mascot with CTA */}
      <section className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready for a Dry Basement?
            </h2>
            <p className="text-blue-100 mb-6">
              Schedule your free waterproofing inspection today. Our experts will identify the 
              source of your water problems and recommend the best solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
              <Link
                href="/waterproofing/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
          {/* Jack w water Bowl - thematic for waterproofing */}
          <div className="hidden md:block">
            <img 
              src="/images/Jack w water Bowl.svg" 
              alt="" 
              className="h-40 w-auto opacity-90"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
