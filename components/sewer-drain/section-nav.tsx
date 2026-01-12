'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Droplets,
  Construction,
  Video,
  Waves,
  TreeDeciduous,
  BookOpen,
  Phone,
  ChevronRight,
  Siren,
  LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { sewerDrainServicesData, sewerDrainSectionLinksData } from '@/lib/constants/sewer-drain'
import { useBooking } from '@/components/providers/booking-provider'

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Construction,
  Video,
  Waves,
  TreeDeciduous,
  BookOpen,
  Phone,
  Siren,
}

interface SectionNavProps {
  variant?: 'sidebar' | 'horizontal'
}

export function SewerDrainSectionNav({ variant = 'sidebar' }: SectionNavProps) {
  const pathname = usePathname()
  const { openBookingModal } = useBooking()

  // Map data to include actual icon components
  const services = sewerDrainServicesData.map(service => ({
    ...service,
    href: `/sewer-drain/${service.slug}`,
    icon: iconMap[service.iconName] || Droplets,
  }))

  const sectionLinks = sewerDrainSectionLinksData.map(link => ({
    ...link,
    icon: iconMap[link.iconName] || BookOpen,
  }))

  if (variant === 'horizontal') {
    return (
      <nav className="bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            <Link
              href="/sewer-drain"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                pathname === '/sewer-drain'
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              Overview
            </Link>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                  pathname === service.href
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-slate-600 hover:bg-slate-100"
                )}
              >
                {service.title}
              </Link>
            ))}
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                  pathname === link.href
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-slate-600 hover:bg-slate-100"
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

  // Sidebar variant (desktop)
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[var(--color-primary)] text-white p-4">
          <h2 className="font-bold text-lg">Sewer & Drain</h2>
          <p className="text-blue-100 text-sm">Services</p>
        </div>

        {/* Services List */}
        <nav className="p-2">
          <Link
            href="/sewer-drain"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === '/sewer-drain'
                ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <Droplets className="w-5 h-5" />
            Overview
          </Link>
          
          <div className="my-2 border-t border-slate-100" />
          
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={service.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                  pathname === service.href
                    ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1">{service.title}</span>
                <ChevronRight className={cn(
                  "w-4 h-4 opacity-0 -translate-x-2 transition-all",
                  "group-hover:opacity-100 group-hover:translate-x-0",
                  pathname === service.href && "opacity-100 translate-x-0"
                )} />
              </Link>
            )
          })}

          <div className="my-2 border-t border-slate-100" />

          {sectionLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="p-4 bg-slate-50">
          <p className="text-sm text-slate-600 mb-3">
            Drain emergency?
          </p>
          <button
            onClick={() => openBookingModal('Sewer & Drain')}
            className="block w-full py-2.5 px-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-center font-semibold rounded-lg transition-colors text-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </aside>
  )
}
