'use client'

import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { useBooking } from '@/components/providers/booking-provider'

interface PlumbingCTAProps {
  variant?: 'hero' | 'section' | 'emergency'
  service?: string
}

export function PlumbingCTA({ variant = 'section', service }: PlumbingCTAProps) {
  const { openBookingModal } = useBooking()

  if (variant === 'hero') {
    return (
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call {siteConfig.phone}
        </a>
        <button
          onClick={() => openBookingModal(service)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors border border-white/30"
        >
          Book Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    )
  }

  if (variant === 'emergency') {
    return (
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          {siteConfig.phone}
        </a>
        <button
          onClick={() => openBookingModal(service || 'Emergency Service')}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"
        >
          Book Now
        </button>
      </div>
    )
  }

  // Default section variant
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors"
      >
        <Phone className="w-5 h-5" />
        Call {siteConfig.phone}
      </a>
      <button
        onClick={() => openBookingModal(service)}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold rounded-lg transition-colors"
      >
        Book Now
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
