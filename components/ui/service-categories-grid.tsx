'use client'

import { useState } from 'react'
import {
  Wrench,
  Droplets,
  Waves,
  Building2,
  Toilet,
  type LucideIcon,
} from 'lucide-react'
import { ServiceCategoryCard } from './service-category-card'
import { plumbingServicesData } from '@/lib/constants/plumbing'
import { waterproofingServicesData } from '@/lib/constants/waterproofing'
import { sewerDrainServicesData } from '@/lib/constants/sewer-drain'
import { emergencyServicesData } from '@/lib/constants/restoration'
import { commercialServicesData } from '@/lib/constants/commercial'

interface ServiceCategory {
  id: string
  icon: LucideIcon
  title: string
  href: string
  services: { name: string; href: string }[]
}

// Map service data to consistent format
const serviceCategories: ServiceCategory[] = [
  {
    id: 'plumbing',
    icon: Wrench,
    title: 'Plumbing',
    href: '/plumbing-services',
    services: plumbingServicesData.map((s) => ({
      name: s.name,
      href: s.href,
    })),
  },
  {
    id: 'waterproofing',
    icon: Droplets,
    title: 'Waterproofing',
    href: '/waterproofing',
    services: waterproofingServicesData.map((s) => ({
      name: s.name,
      href: s.href,
    })),
  },
  {
    id: 'sewer-drain',
    icon: Toilet,
    title: 'Sewer & Drain',
    href: '/sewer-drain',
    services: sewerDrainServicesData.map((s) => ({
      name: s.title,
      href: `/sewer-drain/${s.slug}`,
    })),
  },
  {
    id: 'emergencies',
    icon: Waves,
    title: 'Emergencies',
    href: '/emergencies',
    services: emergencyServicesData.map((s) => ({
      name: s.title,
      href: `/emergencies/${s.slug}`,
    })),
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial',
    href: '/commercial',
    services: commercialServicesData.map((s) => ({
      name: s.title,
      href: `/commercial/${s.slug}`,
    })),
  },
]

export function ServiceCategoriesGrid() {
  // Track which category is open (null = none, or category id)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (id: string) => {
    setOpenCategory((prev) => (prev === id ? null : id))
  }

  return (
    <section className="pt-0 pb-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Service Image - overlaps into hero section */}
        <div className="flex justify-center mb-12 -mt-24 relative z-10">
          <img
            src="/images/AK Water Works Plumbing Service.webp"
            alt="AK Water Works Plumbing Service"
            className="max-w-full h-auto rounded-2xl"
            style={{ maxHeight: '300px' }}
          />
        </div>

        {/* Grid - 2 cols on tablet, 3 cols on desktop, 5 cols on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 gap-y-12">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard
              key={category.id}
              id={category.id}
              icon={category.icon}
              title={category.title}
              href={category.href}
              services={category.services}
              isOpen={openCategory === category.id}
              onToggle={toggleCategory}
            />
          ))}
        </div>

        {/* Title section - below cards */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trust AK Water Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From emergency repairs to preventive maintenance, we handle all your
            plumbing and waterproofing needs.
          </p>
        </div>
      </div>
    </section>
  )
}
