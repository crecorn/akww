import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Phone, CheckCircle2, ArrowRight, Clock, Shield, 
  CreditCard, Calculator, Percent, CalendarDays, Ban
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Flexible Financing Options | AK Water Works',
  description: 'Affordable payment plans for plumbing, drain, and water damage services. Finance from $500-$25,000 with rates as low as 0% APR. Quick approval through Wisetack.',
}

const benefits = [
  {
    icon: Clock,
    title: 'Fast & Easy',
    desc: 'Quick application—see your options within seconds on your phone',
  },
  {
    icon: Ban,
    title: 'No Hidden Fees',
    desc: 'See exactly what you\'ll pay right from the start',
  },
  {
    icon: Calculator,
    title: 'Options For You',
    desc: 'Choose the monthly payment that works best for your budget',
  },
  {
    icon: Shield,
    title: 'No Credit Impact',
    desc: 'Checking eligibility doesn\'t impact your credit score',
  },
]

const financingDetails = [
  { icon: CreditCard, label: 'Financing Amount', value: '$500 – $25,000', note: 'Some services max at $15,000' },
  { icon: Percent, label: 'APR Range', value: '0% – 35.9%', note: 'Based on creditworthiness' },
  { icon: CalendarDays, label: 'Terms Available', value: '3 months – 10 years', note: 'Some services up to 24 months' },
]

const howItWorks = [
  { step: '1', title: 'Get Your Estimate', desc: 'We provide a quote for your plumbing or restoration project' },
  { step: '2', title: 'Apply in Seconds', desc: 'Click the Wisetack link and enter basic information on your phone' },
  { step: '3', title: 'Choose Your Plan', desc: 'See up to 6 payment options with clear monthly amounts' },
  { step: '4', title: 'We Get to Work', desc: 'Your service is complete—you pay over time with no surprises' },
]

const noHiddenFees = [
  'No pre-payment penalties',
  'No origination fees',
  'No compounding interest',
  'No annual fees',
  'Simple interest with clear terms',
  'Pay off early anytime',
]

export default function FinancingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[550px] flex items-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Financing Options</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pay Over Time.
              <span className="block text-[var(--color-accent)]">Fix It Today.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Don&apos;t let budget concerns delay important plumbing repairs or water damage restoration. 
              With flexible financing through Wisetack, you can get the service you need now and pay over time.
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
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Jack Mascot */}
        <div className="hidden lg:block absolute bottom-8 right-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/Jack w Wrench.svg" 
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
              Simple, Transparent Financing
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Powered by Wisetack—financing that&apos;s fast, fair, and designed for real-life home services.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div 
                    key={benefit.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center"
                  >
                    <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.desc}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Financing Details */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
                Financing at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {financingDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div key={detail.label} className="text-center">
                      <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-[var(--color-accent)]" />
                      </div>
                      <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">{detail.label}</p>
                      <p className="text-3xl font-bold text-slate-900 mb-2">{detail.value}</p>
                      <p className="text-sm text-slate-500">{detail.note}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              How It Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* No Hidden Fees */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                  Clear Terms. No Tricks.
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {noHiddenFees.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services You Can Finance */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
              Services You Can Finance
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                'Water heater installation',
                'Pipe repair & repiping',
                'Sewer line repair',
                'Water damage restoration',
                'Basement waterproofing',
                'French drain installation',
                'Drain cleaning services',
                'Emergency plumbing repairs',
                'And more...',
              ].map((service) => (
                <div 
                  key={service}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-slate-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto">
              Call us to discuss your project and learn about your financing options. 
              Quick approval, flexible terms, and no obligation.
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-xl rounded-lg transition-colors"
            >
              <Phone className="w-6 h-6" />
              Call to Ask for Details
            </a>
            <p className="text-slate-400 text-sm mt-6">
              {siteConfig.phone} • Available during business hours
            </p>
          </section>

          {/* Disclaimer */}
          <p className="text-xs text-slate-500 text-center mt-8 max-w-3xl mx-auto">
            *All financing is subject to credit approval. Your terms may vary. Payment options through Wisetack are provided by their lending partners. 
            APRs range from 0-35.9% based on creditworthiness. State interest rate caps may apply. 
            See additional terms at wisetack.com/faqs.
          </p>
        </div>
      </div>
    </>
  )
}
