'use client'

import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

interface CommercialCTAProps {
  variant?: 'hero' | 'section' | 'inline'
}

export function CommercialCTA({ variant = 'section' }: CommercialCTAProps) {
  if (variant === 'hero') {
    return (
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/commercial/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold text-lg rounded-lg transition-colors"
        >
          Contact Us to Discuss Your Project
          <ArrowRight className="w-5 h-5" />
        </Link>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-lg transition-colors border border-white/20"
        >
          <Phone className="w-5 h-5" />
          {siteConfig.phone}
        </a>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <Link
        href="/commercial/contact"
        className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
      >
        Contact Us to Discuss Your Project
        <ArrowRight className="w-4 h-4" />
      </Link>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        href="/commercial/contact"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-lg transition-colors"
      >
        Contact Us to Discuss Your Project
        <ArrowRight className="w-5 h-5" />
      </Link>
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-colors"
      >
        <Phone className="w-5 h-5" />
        {siteConfig.phone}
      </a>
    </div>
  )
}
