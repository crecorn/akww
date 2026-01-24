'use client'

import { usePathname } from 'next/navigation'
import { EmergencySectionNav } from '@/components/restoration'

export default function EmergenciesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHubPage = pathname === '/emergencies'

  // Hub page gets full-width layout, sub-pages get sidebar
  if (isHubPage) {
    return (
      <div className="min-h-screen">
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Horizontal nav for mobile/tablet */}
      <EmergencySectionNav variant="horizontal" />

      {/* Main content area with sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar nav for desktop */}
          <EmergencySectionNav variant="sidebar" />

          {/* Page content */}
          <div className="flex-1 min-w-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
