'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/constants/site'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const navigation = [
  {
    name: 'Plumbing',
    href: '/plumbing-services',
    children: [
      { name: 'Water Heaters', href: '/plumbing-services/water-heaters', description: 'Installation & repair' },
      { name: 'Pipe Repair', href: '/plumbing-services/pipe-repair', description: 'Leak fixes & repiping' },
      { name: 'Fixture Installation', href: '/plumbing-services/fixtures', description: 'Faucets, toilets & more' },
      { name: 'Gas Lines', href: '/plumbing-services/gas-lines', description: 'Safe gas line services' },
      { name: 'Water Treatment', href: '/plumbing-services/water-treatment', description: 'Filtration & softeners' },
      { name: '24/7 Emergency', href: '/plumbing-services/emergency', description: 'Immediate response' },
      { name: 'All Plumbing Services →', href: '/plumbing-services' },
    ],
  },
  {
    name: 'Sewer & Drain',
    href: '/sewer-drain',
    children: [
      { name: 'Drain Cleaning', href: '/sewer-drain/drain-cleaning', description: 'Clear clogged drains' },
      { name: 'Sewer Line Repair', href: '/sewer-drain/sewer-line-repair', description: 'Trenchless options' },
      { name: 'Camera Inspection', href: '/sewer-drain/sewer-camera-inspection', description: 'Video diagnostics' },
      { name: 'Hydro Jetting', href: '/sewer-drain/hydro-jetting', description: 'High-pressure cleaning' },
      { name: 'Root Removal', href: '/sewer-drain/root-removal', description: 'Tree root solutions' },
      { name: '24/7 Emergency', href: '/sewer-drain/emergency', description: 'Immediate response' },
      { name: 'All Sewer & Drain →', href: '/sewer-drain' },
    ],
  },
  {
    name: 'Commercial',
    href: '/commercial',
    children: [
      { name: 'New Construction', href: '/commercial/new-construction', description: 'Build-out plumbing' },
      { name: 'Municipal', href: '/commercial/municipal', description: 'Government facilities' },
      { name: 'Industrial', href: '/commercial/industrial', description: 'Manufacturing & plants' },
      { name: '24/7 Emergency', href: '/commercial/emergency', description: 'Immediate response' },
      { name: 'All Commercial Services →', href: '/commercial' },
    ],
  },
  {
    name: 'Emergencies',
    href: '/emergencies',
    children: [
      { name: 'Water Damage Recovery', href: '/emergencies/water-damage', description: 'Full recovery services' },
      { name: 'Water Pump Out & Clean Up', href: '/emergencies/water-extraction', description: 'Emergency removal' },
      { name: 'All Emergency Services →', href: '/emergencies' },
    ],
  },
  {
    name: 'Waterproofing',
    href: '/waterproofing',
    children: [
      { name: 'Basement Waterproofing', href: '/waterproofing/basement-waterproofing', description: 'Keep your basement dry' },
      { name: 'Basement Drainage', href: '/waterproofing/basement-drainage', description: 'French drains & more' },
      { name: 'Crawl Space Encapsulation', href: '/waterproofing/crawl-space-encapsulation', description: 'Moisture control' },
      { name: 'All Waterproofing Services →', href: '/waterproofing' },
    ],
  },
  {
    name: 'Service Areas',
    href: '/service-areas',
    children: [
      { name: 'Trumbull County, OH', href: '/service-areas/trumbull-county' },
      { name: 'Mahoning County, OH', href: '/service-areas/mahoning-county' },
      { name: 'Portage County, OH', href: '/service-areas/portage-county' },
      { name: 'Ashtabula County, OH', href: '/service-areas/ashtabula-county' },
      { name: 'View All Areas →', href: '/service-areas' },
    ],
  },
  {
    name: 'Company',
    href: '/about',
    children: [
      { name: 'About Us', href: '/about', description: 'Our story & team' },
      { name: 'Blog', href: '/blog', description: 'Tips & news' },
      { name: 'Community', href: '/community', description: 'Giving back locally' },
      { name: 'Financing', href: '/financing', description: 'Flexible payment options' },
      { name: 'Satisfaction Guarantee', href: '/satisfaction-guarantee', description: 'Our promise to you' },
      { name: 'Agua Kare', href: '/agua-kare', description: 'Water care program' },
    ],
  },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <>
      {/* Top bar - contact info */}
      <div className="bg-slate-900 text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              24/7 Emergency Service
            </span>
            <span>Serving Northeast Ohio</span>
          </div>
          <div className="flex items-center gap-4">
            <span>⭐ {siteConfig.reviews.rating} Rating ({siteConfig.reviews.count}+ Reviews)</span>
            <span>|</span>
            <span>BBB A+ Accredited</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/AK-WW-Logo-HZ.svg"
                alt="AK Water Works - Plumbing & Waterproofing"
                width={200}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-slate-700 hover:text-[var(--color-primary)] font-medium transition-colors flex items-center gap-1 text-[15px]',
                      item.children && 'pr-1'
                    )}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg border border-slate-100 py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-medium text-slate-900">{child.name}</span>
                          {'description' in child && (
                            <span className="block text-sm text-slate-500">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Phone - Desktop */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-lg transition-colors shadow-lg shadow-green-500/25"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>

              {/* Phone - Mobile */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="md:hidden flex items-center justify-center w-12 h-12 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white rounded-full transition-colors shadow-lg"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[var(--color-primary)]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 animate-slide-up max-h-[80vh] overflow-y-auto">
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.slice(0, 5).map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-[var(--color-primary)]"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-accent)] text-white font-bold rounded-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
