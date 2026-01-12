'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X, MapPin, ArrowLeft } from 'lucide-react'
import { CountyData } from '@/lib/constants/counties'
import { useBooking } from '@/components/providers/booking-provider'

interface CountyHeaderProps {
  county: CountyData
}

export function CountyHeader({ county }: CountyHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openBookingModal } = useBooking()

  const navLinks = [
    { name: 'Overview', href: `/service-areas/${county.slug}` },
    { name: 'Plumbing', href: `/service-areas/${county.slug}/plumbing` },
    { name: 'Sewer & Drain', href: `/service-areas/${county.slug}/sewer-drain` },
    { name: 'Waterproofing', href: `/service-areas/${county.slug}/waterproofing` },
    { name: 'Contact', href: `/service-areas/${county.slug}/contact` },
  ]

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      {/* Top bar - county identifier */}
      <div className="bg-[var(--color-primary)] text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Serving {county.name}, {county.state}</span>
          </div>
          <Link 
            href="/service-areas" 
            className="flex items-center gap-1 hover:underline"
          >
            <ArrowLeft className="w-3 h-3" />
            All Service Areas
          </Link>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/service-areas/${county.slug}`} className="flex items-center gap-3">
            <img 
              src="/images/AK-WW-Logo-HZ.svg" 
              alt="AK Water Works" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${county.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
            >
              <Phone className="w-4 h-4" />
              {county.phone}
            </a>
            <button
              onClick={() => openBookingModal()}
              className="px-4 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-sm font-bold rounded-lg transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 mt-4 space-y-3">
              <a
                href={`tel:${county.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-primary)] text-white font-bold rounded-lg"
              >
                <Phone className="w-5 h-5" />
                Call {county.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openBookingModal()
                }}
                className="w-full py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg"
              >
                Book Online
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
