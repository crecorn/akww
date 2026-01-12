'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Droplets, Waves, Shield, ArrowDownToLine, Home, BookOpen, Phone, Sparkles,
  type LucideIcon
} from 'lucide-react'
import { restoreServicesData, restoreSectionLinksData } from '@/lib/constants/restore'
import { useBooking } from '@/components/providers/booking-provider'
import { cn } from '@/lib/utils/cn'

const iconMap: Record<string, LucideIcon> = {
  Droplets, Waves, Shield, ArrowDownToLine, Home, BookOpen, Phone, Sparkles,
}

interface SectionNavProps {
  variant?: 'sidebar' | 'horizontal'
}

export function RestoreSectionNav({ variant = 'sidebar' }: SectionNavProps) {
  const pathname = usePathname()
  const { openBookingModal } = useBooking()

  const services = restoreServicesData.map(service => ({
    ...service,
    href: `/restore/${service.slug}`,
    Icon: iconMap[service.iconName] || Droplets,
  }))

  const sectionLinks = restoreSectionLinksData.map(link => ({
    ...link,
    Icon: iconMap[link.iconName] || BookOpen,
  }))

  if (variant === 'horizontal') {
    return (
      <div className="lg:hidden bg-white border-b border-slate-200 sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            <Link
              href="/restore"
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
                pathname === '/restore'
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              Overview
            </Link>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
                  pathname === service.href
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                )}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-28 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-[var(--color-primary)] text-white">
          <h2 className="font-bold text-lg">Restore Services</h2>
          <p className="text-sm text-blue-100 mt-1">Water damage & waterproofing</p>
        </div>

        <nav className="p-2">
          <Link
            href="/restore"
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
              pathname === '/restore'
                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                : 'text-slate-600 hover:bg-slate-50'
            )}
          >
            <Sparkles className="w-5 h-5" />
            Overview
          </Link>

          <div className="my-2 border-t border-slate-100" />

          {services.map((service) => {
            const Icon = service.Icon
            return (
              <Link
                key={service.slug}
                href={service.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  pathname === service.href
                    ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                <Icon className="w-5 h-5" />
                {service.title}
              </Link>
            )
          })}

          <div className="my-2 border-t border-slate-100" />

          {sectionLinks.map((link) => {
            const Icon = link.Icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 bg-slate-50">
          <p className="text-sm text-slate-600 mb-3">
            Water emergency?
          </p>
          <button
            onClick={() => openBookingModal('Water Emergency')}
            className="block w-full py-2.5 px-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-center font-semibold rounded-lg transition-colors text-sm"
          >
            Get Help Now
          </button>
        </div>
      </div>
    </aside>
  )
}
