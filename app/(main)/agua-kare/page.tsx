import { Metadata } from 'next'
import {
  Phone,
  CheckCircle2,
  Percent,
  Droplets,
  Flame,
  Shield,
  Camera,
  CalendarClock,
  BadgeCheck,
  Bath,
  Gauge
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Aqua-Kare Plumbing Protection Plan | AK Water Works',
  description: 'Peace of Mind. Protected Plumbing. Priority Service. Join the Aqua-Kare plumbing maintenance program for annual inspections, 10% savings, and priority scheduling.',
}

const maintenanceBenefits = [
  {
    icon: Percent,
    title: 'Save on Repairs',
    desc: 'Get 10% off plumbing services.',
  },
  {
    icon: Droplets,
    title: 'Cleaner, Safer Water',
    desc: 'Annual checkup of your home\'s water filtration system.',
  },
  {
    icon: Flame,
    title: 'Reliable Hot Water',
    desc: 'Water heater inspection and flush to prevent breakdowns.',
  },
  {
    icon: Shield,
    title: 'Peace of Mind',
    desc: 'We check shut-off valves and supply lines to help prevent leaks.',
  },
  {
    icon: Camera,
    title: 'Protect Your Home',
    desc: 'Sewer line camera inspection to catch issues early.',
  },
  {
    icon: CalendarClock,
    title: 'Skip the Wait',
    desc: 'Priority scheduling for faster service.',
  },
  {
    icon: BadgeCheck,
    title: 'No Surprise Fees',
    desc: 'Never pay extra just to schedule a visit.',
  },
  {
    icon: Bath,
    title: 'Bathroom Confidence',
    desc: 'Toilet dye test to ensure there are no leaks.',
  },
  {
    icon: Gauge,
    title: 'Longer-Lasting Plumbing',
    desc: 'Water pressure test to protect pipes and fixtures.',
  },
]

const servicesIncluded = [
  'Plumbing Services',
  'Drain Services',
  'Excavating',
  'Emergency Restoration',
  'Basement Waterproofing',
  'Bathroom Remodel',
  'Water Treatment',
  'Well Pumps',
]

export default function AquaKarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[550px] flex items-center text-white overflow-hidden">
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
              <span className="text-sm font-medium tracking-wide uppercase">Plumbing Protection Plan</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-yellow-300">Aqua-Kare!</span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl font-semibold text-blue-100 mb-4">
              Peace of Mind. Protected Plumbing. Priority Service.
            </p>

            {/* Subheading */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              With your Plumbing Maintenance Agreement, you&apos;ve taken a smart step to protect your
              home&apos;s plumbing, save on future repairs, and enjoy peace of mind all year long.
            </p>

            {/* CTA */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call for More Information
            </a>
            <p className="text-blue-200 mt-4 text-lg">{siteConfig.phone}</p>
          </div>
        </div>

        {/* Logo/Mascot */}
        <div className="hidden lg:block absolute bottom-8 right-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Jack Waving.svg"
            alt=""
            className="h-48 w-auto opacity-90"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:py-20">

          {/* Thank You Message */}
          <section className="mb-16 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Thank You for Joining Aqua-Kare!
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We&apos;re grateful you&apos;ve trusted AK Water Works to care for your home&apos;s plumbing.
              Your membership means more reliable service, extra savings, and peace of mind for your household.
            </p>
          </section>

          {/* Maintenance Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
              Aqua-Kare Plumbing Maintenance Benefits
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Your plan includes annual inspections and exclusive member perks.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceBenefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{benefit.title}</h3>
                        <p className="text-slate-600">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Services Covered */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Your Benefits Apply to All Services
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Our team is here to keep your water systems running smoothly—so you can
                    relax knowing we&apos;ve got you covered. Your 10% discount and priority
                    scheduling apply to everything we do.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {servicesIncluded.map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 text-white text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Jack w Wrench.svg"
                    alt=""
                    className="h-24 w-auto mx-auto mb-4 opacity-90"
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-bold mb-2">Ruff Day?</h3>
                  <p className="text-xl font-semibold text-yellow-300 mb-4">Call The Top Dawgs!</p>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Stay Connected */}
          <section className="mb-16">
            <div className="bg-slate-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Connect • Contact • Review
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                Stay connected with us on social media for tips, updates, and special offers.
                And if you&apos;ve had a great experience, we&apos;d love for you to share it—please
                leave us a review online to help others discover the Aqua-Kare difference!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Follow Us on Facebook
                </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Aqua-Kare?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto">
              Our team is happy to explain the Aqua-Kare benefits and help you
              get started. Give us a call!
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-xl rounded-lg transition-colors"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.phone}
            </a>
            <p className="text-blue-200 text-sm mt-6">
              akwaterworks.net • We&apos;re here to help
            </p>
          </section>

        </div>
      </div>
    </>
  )
}
