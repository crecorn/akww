'use client'

import Link from 'next/link'
import { ChevronDown, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface ServiceLink {
  name: string
  href: string
}

interface ServiceCategoryCardProps {
  id: string
  icon: LucideIcon
  title: string
  href: string
  services: ServiceLink[]
  isOpen: boolean
  onToggle: (id: string) => void
}

export function ServiceCategoryCard({
  id,
  icon: Icon,
  title,
  href,
  services,
  isOpen,
  onToggle,
}: ServiceCategoryCardProps) {
  return (
    <>
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden relative pl-7">
        {/* Mobile Icon - vertically centered with header, half outside on left */}
        <Link
          href={href}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 group"
        >
          <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] ring-4 ring-blue-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-[var(--color-primary)]" />
          </div>
        </Link>

        {/* Mobile Card body */}
        <div className="bg-[var(--color-primary)] rounded-2xl overflow-hidden shadow-lg">
          <button
            onClick={() => onToggle(id)}
            className="w-full py-4 pl-12 pr-4 focus:outline-none"
            aria-expanded={isOpen}
            aria-controls={`services-mobile-${id}`}
          >
            <div className="flex items-center justify-start gap-2">
              <h3 className="text-base font-bold text-white uppercase tracking-wide whitespace-nowrap">
                {title} Services
              </h3>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-white/70 transition-transform duration-300 flex-shrink-0',
                  isOpen && 'rotate-180'
                )}
              />
            </div>
          </button>

          {/* Mobile accordion content */}
          <div
            id={`services-mobile-${id}`}
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              isOpen ? 'max-h-[600px]' : 'max-h-0'
            )}
          >
            <div className="px-4 pb-4 space-y-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block w-full py-3 px-4 bg-white text-slate-800 font-medium text-center rounded-lg hover:bg-slate-100 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href={href}
                className="block w-full py-3 px-4 bg-white text-slate-800 font-medium text-center rounded-lg hover:bg-slate-100 transition-colors"
              >
                All {title} Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block relative pt-10">
        {/* Desktop Icon - centered, half outside top */}
        <Link
          href={href}
          className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 group"
        >
          <div className="w-20 h-20 rounded-full bg-[var(--color-accent)] ring-4 ring-blue-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Icon className="w-10 h-10 text-[var(--color-primary)]" />
          </div>
        </Link>

        {/* Desktop Card body */}
        <div className="bg-[var(--color-primary)] rounded-2xl overflow-hidden shadow-lg">
          <div className="pt-12 pb-4 px-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wide text-center h-14 flex items-center justify-center">
              {title}<br />Services
            </h3>
          </div>

          {/* Desktop service list - always visible */}
          <div className="px-4 pb-4 space-y-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block w-full py-3 px-4 bg-white text-slate-800 font-medium text-center rounded-lg hover:bg-slate-100 transition-colors"
              >
                {service.name}
              </Link>
            ))}
            <Link
              href={href}
              className="block w-full py-3 px-4 bg-white text-slate-800 font-medium text-center rounded-lg hover:bg-slate-100 transition-colors"
            >
              All {title} Services
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
