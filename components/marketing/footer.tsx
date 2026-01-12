'use client'

import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/constants/site'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { useBooking } from '@/components/providers/booking-provider'

const footerLinks = {
  services: [
    { name: 'Plumbing', href: '/plumbing-services' },
    { name: 'Sewer & Drain', href: '/sewer-drain' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Restore (Water Damage)', href: '/restore' },
    { name: '24/7 Emergency', href: '/commercial/emergency' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Community', href: '/community' },
    { name: 'Financing', href: '/financing' },
    { name: 'Satisfaction Guarantee', href: '/satisfaction-guarantee' },
    { name: 'Agua Kare', href: '/agua-kare' },
    { name: 'Contact', href: '/contact' },
  ],
  areas: [
    { name: 'Trumbull County, OH', href: '/service-areas/trumbull-county' },
    { name: 'Mahoning County, OH', href: '/service-areas/mahoning-county' },
    { name: 'Portage County, OH', href: '/service-areas/portage-county' },
    { name: 'Ashtabula County, OH', href: '/service-areas/ashtabula-county' },
    { name: 'All Service Areas', href: '/service-areas' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { openBookingModal } = useBooking()

  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="bg-[var(--color-primary)] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Solve Your Water Problems?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            From emergency plumbing to basement waterproofing, we're here 24/7 to protect your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
            <button
              onClick={() => openBookingModal()}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg transition-colors border-2 border-white/30"
            >
              Schedule Online
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/AK-WW-Logo-HZ.svg"
                  alt="AK Water Works - Plumbing & Waterproofing"
                  width={180}
                  height={54}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-slate-400 mb-6 max-w-sm">
                Family-owned plumbing, waterproofing, and restoration company serving Northeast Ohio since 2020.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                  {siteConfig.email}
                </a>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                  <span>24/7 Emergency Service Available</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-[var(--color-primary)] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-[var(--color-primary)] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-bold text-lg mb-4">Service Areas</h3>
              <ul className="space-y-3">
                {footerLinks.areas.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[var(--color-accent)]">BBB A+</span>
                <span className="text-sm text-slate-400">Accredited Business</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[var(--color-accent)]">24/7</span>
                <span className="text-sm text-slate-400">Emergency Service</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[var(--color-accent)]">{siteConfig.reviews.rating}★</span>
                <span className="text-sm text-slate-400">{siteConfig.reviews.count}+ Reviews</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[var(--color-accent)]">Licensed</span>
                <span className="text-sm text-slate-400">Bonded & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p suppressHydrationWarning>© {currentYear} {siteConfig.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
