'use client'

import { usePathname } from 'next/navigation'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { useBooking } from '@/components/providers/booking-provider'
import { cn } from '@/lib/utils/cn'

export function MobileContactBar() {
  const pathname = usePathname()
  const { openBooking } = useBooking()
  
  // Check if we're on an emergency page
  const isEmergencyPage = pathname?.includes('/emergency')
  
  // Don't show on admin pages
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden",
        "border-t shadow-lg",
        isEmergencyPage 
          ? "bg-red-600 border-red-700" 
          : "bg-white border-slate-200"
      )}
    >
      <div className="grid grid-cols-3 divide-x divide-slate-200">
        {/* Chat Button */}
        <button
          onClick={() => {
            // Chat functionality coming soon
            // For now, could open contact page or show a toast
            window.location.href = '/contact'
          }}
          className={cn(
            "flex flex-col items-center justify-center py-3 transition-colors",
            isEmergencyPage
              ? "text-white hover:bg-red-700 divide-red-500"
              : "text-slate-600 hover:bg-slate-50"
          )}
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Chat</span>
        </button>

        {/* Book Button */}
        <button
          onClick={() => openBooking()}
          className={cn(
            "flex flex-col items-center justify-center py-3 transition-colors",
            isEmergencyPage
              ? "text-white hover:bg-red-700 divide-red-500"
              : "text-slate-600 hover:bg-slate-50"
          )}
        >
          <CalendarCheck className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Book</span>
        </button>

        {/* Call Button */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className={cn(
            "flex flex-col items-center justify-center py-3 transition-colors",
            isEmergencyPage
              ? "bg-white text-red-600 hover:bg-red-50 font-bold"
              : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)]"
          )}
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-semibold">Call Now</span>
        </a>
      </div>
      
      {/* Safe area padding for phones with home indicators */}
      <div className="h-safe-area-inset-bottom bg-inherit" />
    </div>
  )
}
