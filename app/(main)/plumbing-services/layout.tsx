'use client'

import { usePathname } from 'next/navigation'
import { PlumbingSectionNav } from '@/components/plumbing/section-nav'

export default function PlumbingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHubPage = pathname === '/plumbing-services'

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
      <div className="lg:hidden">
        <PlumbingSectionNav variant="horizontal" />
      </div>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex gap-8">
          {/* Sidebar for desktop */}
          <div className="hidden lg:block">
            <PlumbingSectionNav variant="sidebar" />
          </div>

          {/* Page content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
