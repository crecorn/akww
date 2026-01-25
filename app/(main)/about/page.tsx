import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Phone, ArrowRight, Users, Shield, Award, Heart, Star, 
  CheckCircle2, Clock, Wrench, Droplets, FileText, HandHeart,
  CreditCard, BadgeCheck, Sparkles, MessageSquare, MapPin
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'About Us | AK Water Works | Family-Owned Plumbing',
  description: 'AK Water Works is a family-owned plumbing company serving Northeast Ohio. Learn about our team, values, and commitment to quality service.',
}

const trustIndicators = [
  { stat: '2020', label: 'Est.' },
  { stat: '343+', label: 'Reviews' },
  { stat: '4.7', label: 'Star Rating' },
  { stat: '24/7', label: 'Service' },
]

const values = [
  { icon: Shield, title: 'Integrity', desc: "Honest pricing, honest work. We tell you what you need, not what we want to sell." },
  { icon: Award, title: 'Quality', desc: "We do it right the first time, every time. Our work speaks for itself." },
  { icon: Heart, title: 'Community', desc: "We're your neighbors. Your success is our success." },
  { icon: Clock, title: 'Reliability', desc: "When we say we'll be there, we're there. No excuses." },
]

const services = [
  { icon: Wrench, name: 'Plumbing', href: '/plumbing-services' },
  { icon: Droplets, name: 'Sewer & Drain', href: '/sewer-drain' },
  { icon: Users, name: 'Commercial', href: '/commercial' },
  { icon: Shield, name: 'Restoration', href: '/restoration' },
]

const companyLinks = [
  { icon: FileText, title: 'Blog', desc: 'Tips, guides, and industry news', href: '/blog' },
  { icon: HandHeart, title: 'Community', desc: 'How we give back locally', href: '/community' },
  { icon: CreditCard, title: 'Financing', desc: 'Flexible payment options', href: '/financing' },
  { icon: BadgeCheck, title: 'Satisfaction Guarantee', desc: 'Our promise to you', href: '/satisfaction-guarantee' },
  { icon: Sparkles, title: 'Agua Kare', desc: 'Membership program', href: '/agua-kare' },
  { icon: Star, title: 'Reviews', desc: 'See what customers say', href: '/reviews' },
  { icon: MapPin, title: 'Service Areas', desc: 'Counties & cities we serve', href: '/service-areas' },
  { icon: MessageSquare, title: 'Contact Us', desc: 'Get in touch with our team', href: '/contact' },
]

export default function AboutPage() {
  return (
    <>
      {/* Full-Width Hero */}
      <section className="relative min-h-[880px] flex items-end md:items-center text-white overflow-hidden">
        {/* Background Image - Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/images/Hero-Company mobile.webp')" }}
        />
        {/* Background Image - Desktop */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat hidden md:block"
          style={{ backgroundImage: "url('/images/Hero-Company.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent md:bg-gradient-to-r md:from-slate-900/90 md:via-slate-900/70 md:to-slate-900/30" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pb-16 md:pb-0">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Our Company</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Family-Owned.
              <span className="block text-[var(--color-accent)]">Community-Focused.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 md:mb-8 leading-relaxed">
              AK Water Works is more than a plumbing company—we&apos;re your neighbors.
              Founded in 2020, we&apos;ve built our reputation on honest work, fair pricing,
              and treating every home like our own.
            </p>

            {/* CTAs - Hidden on mobile */}
            <div className="hidden md:flex flex-col sm:flex-row gap-4 mb-12">
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
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Indicators - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  AK Water Works was founded in 2020 by <strong className="text-slate-900">{siteConfig.founder.name}</strong> with 
                  a simple mission: provide Northeast Ohio with plumbing services that are 
                  honest, reliable, and fairly priced.
                </p>
                <p>
                  What started as a one-man operation has grown into a trusted team serving 
                  four counties. But even as we&apos;ve grown, we&apos;ve never lost sight of what 
                  matters most: treating every customer like family.
                </p>
                <p>
                  Today, we&apos;re proud to be a BBB A+ Accredited business with hundreds of 
                  5-star reviews. Our team handles everything from emergency drain calls 
                  to full commercial plumbing installations—always with the same commitment 
                  to quality and service.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-white rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-slate-300 shadow-lg">
              <div className="text-center text-slate-400 p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                  <Users className="w-10 h-10" />
                </div>
                <p className="font-medium text-slate-600">Team Photo</p>
                <p className="text-sm mt-1">Add an image of the team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-400">
              These aren&apos;t just words on a page—they&apos;re the principles that guide 
              every job we do and every interaction we have.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => {
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

      {/* Meet Jack Section */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/Jack w Wrench.svg" 
                  alt="Jack the Plumber Dog - AK Water Works Mascot"
                  className="w-48 h-48 mx-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Jack
              </h2>
              <p className="text-xl text-green-100 mb-6">
                <em>{siteConfig.mascot.description}</em>
              </p>
              <p className="text-green-100 mb-6">
                Jack is more than just our mascot—he&apos;s a reminder of what we stand for: 
                friendly service, hard work, and always being there when you need us. 
                You might spot him on our vans, website, and around the community!
              </p>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5" />
                <span>The friendliest face in plumbing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-600">
              Full-service plumbing and water solutions for residential and commercial properties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-white transition-all"
                >
                  <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                    <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{service.name}</h3>
                  <span className="inline-flex items-center gap-1 text-[var(--color-primary)] font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Links Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our Company
            </h2>
            <p className="text-lg text-slate-600">
              Learn more about our programs, community involvement, resources, and what makes us different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg group-hover:bg-[var(--color-primary)] transition-colors">
                      <Icon className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{link.desc}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <span className="text-2xl font-bold">{siteConfig.reviews.rating}</span>
                <span className="text-slate-400">({siteConfig.reviews.count}+ reviews)</span>
              </div>
              <p className="text-slate-400 mb-6">
                We&apos;re proud of our reputation. Every review represents a homeowner 
                we&apos;ve helped—and a relationship we&apos;ve built.
              </p>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:gap-3 transition-all"
              >
                Read All Reviews <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 md:p-8">
              <blockquote className="text-lg text-slate-300 italic mb-4">
                &quot;AK Water Works is everything you want in a plumber: prompt, professional, 
                and honest. They fixed our issue quickly and didn&apos;t try to upsell us on 
                things we didn&apos;t need. We&apos;ve found our forever plumber!&quot;
              </blockquote>
              <p className="font-semibold text-white">— Jennifer L., Howland, OH</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the AK Water Works difference. Professional service, fair pricing, 
            and a team that treats you like family.
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

      {/* Service Area Map Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 min-h-[500px]">
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

            {/* Service Area Info */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Service Area
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Based in Warren, Ohio, we proudly serve homeowners and businesses 
                throughout Northeast Ohio with fast, reliable plumbing and drain services.
              </p>

              {/* Local Plumbing Services */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                    <Users className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Local Plumbing Services and More</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">Serving these Ohio counties:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                    Trumbull County
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                    Mahoning County
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                    Portage County
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                    Ashtabula County
                  </div>
                </div>
              </div>

              {/* Commercial Services */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[var(--color-accent)]/10 rounded-lg">
                    <Shield className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Commercial Services</h3>
                </div>
                <p className="text-slate-600 mb-2">
                  Serving all of <strong className="text-slate-900">Northeast Ohio</strong>
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  New construction, municipal, industrial & 24/7 emergency
                </p>
                
                {/* Major Cities inside Commercial */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-900 mb-3 text-sm">Major Cities We Serve:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Cleveland', 'Akron', 'Youngstown', 'Warren', 'Boardman', 'Niles', 
                      'Parma', 'Canton', 'Mentor', 'Kent', 'Aurora', 'Ravenna', 
                      'Ashtabula', 'Geneva', 'Cortland', 'Canfield'].map((city) => (
                      <span 
                        key={city}
                        className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full border border-slate-200"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/service-areas"
                    className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
                  >
                    View All Service Areas <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
