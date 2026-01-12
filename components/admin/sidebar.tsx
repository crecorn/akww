'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  MapPin, 
  Users,
  Settings,
  HelpCircle,
  Droplets,
  Wrench,
  Image as ImageIcon
} from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Form Submissions', href: '/admin/submissions', icon: MessageSquare },
  { 
    name: 'Content', 
    items: [
      { name: 'Services', href: '/admin/services', icon: Wrench },
      { name: 'Locations', href: '/admin/locations', icon: MapPin },
      { name: 'Testimonials', href: '/admin/testimonials', icon: Users },
      { name: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
      { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
    ]
  },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div className="lg:hidden fixed inset-0 z-40 bg-black/50 hidden" id="sidebar-backdrop" />
      
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 transform -translate-x-full lg:translate-x-0 transition-transform duration-200" id="sidebar">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white">Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            if ('items' in item) {
              // Section with sub-items
              return (
                <div key={item.name} className="pt-4">
                  <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    {item.name}
                  </p>
                  <div className="space-y-1">
                    {item.items.map((subItem) => {
                      const isActive = pathname === subItem.href
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                            isActive
                              ? 'bg-[var(--color-primary)] text-white'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                          )}
                        >
                          <subItem.icon className="w-5 h-5" />
                          {subItem.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            }

            // Regular item
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* View Site Link */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-lg transition-colors"
          >
            View Live Site →
          </Link>
        </div>
      </aside>
    </>
  )
}
