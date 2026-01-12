'use client'

import { usePathname } from 'next/navigation'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHubPage = pathname === '/about'

  // Hub page gets full-width layout
  if (isHubPage) {
    return (
      <div className="min-h-screen">
        {children}
      </div>
    )
  }

  // Sub-pages get standard layout
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {children}
      </div>
    </div>
  )
}
