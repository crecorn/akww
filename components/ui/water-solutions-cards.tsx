'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Droplets, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

type ServiceLink = {
  name: string
  href: string
}

type ServiceCard = {
  title: string
  href: string
  bgColor: string
  links: ServiceLink[]
}

const serviceCards: ServiceCard[] = [
  {
    title: 'Plumbing',
    href: '/plumbing-services',
    bgColor: 'bg-[#dc2626]', // Red
    links: [
      { name: 'Water Heaters', href: '/plumbing-services/water-heaters' },
      { name: 'Pipe Repair', href: '/plumbing-services/pipe-repair' },
      { name: 'Gas Lines', href: '/plumbing-services/gas-lines' },
      { name: 'All Plumbing Services', href: '/plumbing-services' },
    ],
  },
  {
    title: 'Waterproofing',
    href: '/waterproofing',
    bgColor: 'bg-[var(--color-primary)]', // Primary blue
    links: [
      { name: 'Basement Waterproofing', href: '/waterproofing/basement-waterproofing' },
      { name: 'Sump Pump Services', href: '/waterproofing/sump-pump-services' },
      { name: 'Foundation Crack Repair', href: '/waterproofing/foundation-crack-repair' },
      { name: 'All Waterproofing Services', href: '/waterproofing' },
    ],
  },
  {
    title: 'Sewer & Drain',
    href: '/sewer-drain',
    bgColor: 'bg-[#0891b2]', // Cyan/Teal
    links: [
      { name: 'Drain Cleaning', href: '/sewer-drain/drain-cleaning' },
      { name: 'Sewer Line Repair', href: '/sewer-drain/sewer-line-repair' },
      { name: 'Camera Inspection', href: '/sewer-drain/sewer-camera-inspection' },
      { name: 'All Sewer & Drain Services', href: '/sewer-drain' },
    ],
  },
  {
    title: 'Restoration',
    href: '/restoration',
    bgColor: 'bg-[#d97706]', // Amber
    links: [
      { name: 'Water Damage Restoration', href: '/restoration/water-damage-restoration' },
      { name: 'Water Pump Out & Clean Up', href: '/restoration/water-extraction' },
      { name: 'All Restoration Services', href: '/restoration' },
    ],
  },
]

function WaterDropIcon() {
  return (
    <div className="relative w-20 h-20 mx-auto mb-4">
      {/* Outer gold ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#d4af37] via-[#c5a028] to-[#b8960f] p-1">
        {/* Inner blue circle */}
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#1e5a8a] to-[#0f4c81] flex items-center justify-center">
          <Droplets className="w-9 h-9 text-[#d4af37]" />
        </div>
      </div>
    </div>
  )
}

export function WaterSolutionsCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {serviceCards.map((card, index) => (
        <div key={card.href} className="relative">
          {/* Mobile: Collapsible card */}
          <div className="md:hidden">
            <button
              onClick={() => toggleCard(index)}
              className={cn(
                'w-full rounded-2xl overflow-hidden transition-all duration-300',
                card.bgColor
              )}
              aria-expanded={openIndex === index}
            >
              <div className="p-6 pb-4">
                <WaterDropIcon />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide text-center">
                  {card.title}
                </h3>
                <ChevronDown
                  className={cn(
                    'w-6 h-6 text-white mx-auto mt-2 transition-transform duration-300',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </div>
            </button>

            {/* Expandable content */}
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className={cn('px-4 pb-4 pt-0 rounded-b-2xl -mt-2', card.bgColor)}>
                <div className="space-y-2">
                  {card.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block w-full py-3 px-4 bg-white rounded-lg text-slate-900 font-semibold text-center hover:bg-slate-100 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Always expanded */}
          <div
            className={cn(
              'hidden md:block rounded-2xl overflow-hidden',
              card.bgColor
            )}
          >
            <div className="p-6">
              <WaterDropIcon />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide text-center mb-6">
                {card.title}
              </h3>
              <div className="space-y-2">
                {card.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block w-full py-3 px-4 bg-white rounded-lg text-slate-900 font-semibold text-center hover:bg-slate-100 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
