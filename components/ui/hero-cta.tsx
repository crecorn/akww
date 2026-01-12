'use client'

import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { useBooking } from '@/components/providers/booking-provider'

export function HeroCTA() {
  const { openBookingModal } = useBooking()

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in stagger-3">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-xl transition-all shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-0.5"
        data-cta="hero-phone"
      >
        <Phone className="w-6 h-6" />
        Call {siteConfig.phone}
      </a>
      <button
        onClick={() => openBookingModal()}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl transition-all border-2 border-white/30 hover:border-white/50"
        data-cta="hero-schedule"
      >
        Schedule Online
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
