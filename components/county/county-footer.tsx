import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { CountyData } from '@/lib/constants/counties'
import { siteConfig } from '@/lib/constants/site'

interface CountyFooterProps {
  county: CountyData
}

export function CountyFooter({ county }: CountyFooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="/images/AK-WW-Logo-HZ.svg" 
              alt="AK Water Works" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400 mb-4 max-w-md">
              Proudly serving {county.name} with professional plumbing, sewer & drain, 
              and waterproofing services. Available 24/7 for emergencies.
            </p>
            <div className="flex items-center gap-2 text-[var(--color-accent)]">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Serving {county.name}, {county.state}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/service-areas/${county.slug}/plumbing`} className="text-slate-400 hover:text-white">
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link href={`/service-areas/${county.slug}/sewer-drain`} className="text-slate-400 hover:text-white">
                  Sewer & Drain
                </Link>
              </li>
              <li>
                <Link href={`/service-areas/${county.slug}/waterproofing`} className="text-slate-400 hover:text-white">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link href={`/service-areas/${county.slug}/contact`} className="text-slate-400 hover:text-white">
                  Request Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${county.phoneRaw}`} className="flex items-center gap-3 text-slate-400 hover:text-white">
                  <Phone className="w-5 h-5" />
                  {county.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-slate-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block text-sm text-slate-400 hover:text-white underline"
              >
                Visit Main Website →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/service-areas" className="hover:text-white">All Service Areas</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
