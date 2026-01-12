import { Metadata } from 'next'
import { WaterproofingSectionNav } from '@/components/waterproofing/section-nav'

export const metadata: Metadata = {
  title: {
    template: '%s | Waterproofing Services | AK Water Works',
    default: 'Basement Waterproofing Services | AK Water Works',
  },
}

export default function WaterproofingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Horizontal nav for mobile/tablet */}
      <div className="lg:hidden">
        <WaterproofingSectionNav variant="horizontal" />
      </div>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex gap-8">
          {/* Sidebar for desktop */}
          <div className="hidden lg:block">
            <WaterproofingSectionNav variant="sidebar" />
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
