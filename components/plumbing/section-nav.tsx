'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Wrench,
  AlertTriangle,
  Flame,
  Construction,
  Droplets,
  Pipette,
  BookOpen,
  Phone,
  ChevronRight,
  Siren,
  Zap,
  Filter,
  LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { plumbingServicesData, plumbingSectionLinksData } from '@/lib/constants/plumbing'
import { useBooking } from '@/components/providers/booking-provider'

// Map icon names to actual components
const iconMap: Record<string, LucideIcon> = {
  Wrench,
  AlertTriangle,
  Flame,
  Construction,
  Droplets,
  Pipette,
  BookOpen,
  Phone,
  Siren,
  Zap,
  Filter,
}

// Add icons to the data
const plumbingServices = plumbingServicesData.map(service => ({
  ...service,
  icon: iconMap[service.iconName] || Wrench,
}))

const sectionLinks = plumbingSectionLinksData.map(link => ({
  ...link,
  icon: iconMap[link.iconName] || Phone,
}))

interface SectionNavProps {
  variant?: 'sidebar' | 'horizontal'
}

export function PlumbingSectionNav({ variant = 'sidebar' }: SectionNavProps) {
  const pathname = usePathname()
  const { openBookingModal } = useBooking()

  if (variant === 'horizontal') {
    return (
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            <Link
              href="/plumbing-services"
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
                pathname === '/plumbing-services'
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              )}
            >
              Overview
            </Link>
            {plumbingServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
                  pathname === service.href
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                )}
              >
                {service.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-slate-600 mx-2" />
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
                  pathname === link.href
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }

  // Sidebar variant (for desktop)
  return (
    <aside className="w-72 flex-shrink-0">
      <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[var(--color-primary)] p-4">
          <Link href="/plumbing-services" className="flex items-center gap-3 text-white">
            <Wrench className="w-6 h-6" />
            <span className="font-bold text-lg">Plumbing Services</span>
          </Link>
        </div>

        {/* Services */}
        <div className="p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Our Services
          </p>
          <nav className="space-y-1">
            {plumbingServices.map((service) => {
              const isActive = pathname === service.href
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group',
                    isActive
                      ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  <service.icon className={cn(
                    'w-5 h-5 flex-shrink-0',
                    isActive ? 'text-[var(--color-primary)]' : 'text-slate-400 group-hover:text-slate-600'
                  )} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{service.name}</p>
                  </div>
                  <ChevronRight className={cn(
                    'w-4 h-4 flex-shrink-0 transition-transform',
                    isActive ? 'text-[var(--color-primary)]' : 'text-slate-300 group-hover:translate-x-0.5'
                  )} />
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mx-4" />

        {/* Other Links */}
        <div className="p-4">
          <nav className="space-y-1">
            {sectionLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all',
                    isActive
                      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  <link.icon className={cn(
                    'w-5 h-5',
                    isActive ? 'text-[var(--color-accent)]' : 'text-slate-400'
                  )} />
                  <span className="font-medium text-sm">{link.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* CTA */}
        <div className="p-4 bg-slate-50">
          <p className="text-sm text-slate-600 mb-3">
            Need a plumber right now?
          </p>
          <button
            onClick={() => openBookingModal()}
            className="block w-full py-2.5 px-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-center font-semibold rounded-lg transition-colors text-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </aside>
  )
}
