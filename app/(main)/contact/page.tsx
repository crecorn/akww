import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'
import { ContactForm } from '@/components/forms/contact-form'
import { BookNowButton } from '@/components/ui/book-now-button'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Estimate',
  description: `Contact AK Water Works for plumbing and waterproofing services in Warren, Youngstown & Northeast Ohio. Call ${siteConfig.phone} or fill out our form for a free estimate.`,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100">
              Have a plumbing emergency or need a free estimate? We're here to help 24/7.
              Fill out the form below or give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
                    <p className="text-slate-600">We typically respond within 1 hour during business hours</p>
                  </div>
                </div>

                <Suspense fallback={<div className="h-96 bg-slate-100 animate-pulse rounded-lg" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Contact</h3>
                
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="flex items-center gap-4 p-4 bg-[var(--color-accent)]/10 rounded-xl hover:bg-[var(--color-accent)]/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[var(--color-accent)] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Call or Text</p>
                      <p className="text-lg font-bold text-slate-900 group-hover:text-[var(--color-accent)]">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Email Us</p>
                      <p className="text-lg font-bold text-slate-900 group-hover:text-[var(--color-primary)]">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Schedule Online Card */}
              <div className="bg-[var(--color-primary)] rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-bold">Schedule Online</h3>
                </div>
                <p className="text-blue-100 mb-4">
                  Book your appointment directly through our online scheduling system.
                </p>
                <BookNowButton 
                  variant="ghost" 
                  className="w-full bg-white text-[var(--color-primary)] hover:bg-blue-50"
                >
                  Book Now
                </BookNowButton>
              </div>

              {/* Office Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Office Location</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">{siteConfig.name}</p>
                      <p className="text-slate-600">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Hours</p>
                      <p className="text-slate-600">
                        Office: Mon-Fri 8am-6pm<br />
                        <span className="text-[var(--color-accent)] font-medium">
                          Emergency: 24/7
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Service Areas</h3>
                <p className="text-slate-600 mb-3">
                  We proudly serve Northeast Ohio and Western Pennsylvania:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Trumbull County', 'Mahoning County', 'Portage County', 'Ashtabula County', 'Mercer County (PA)'].map(county => (
                    <Link
                      key={county}
                      href={`/service-areas/${county.toLowerCase().replace(/\s+/g, '-').replace('-(pa)', '-pa').replace(' county', '-county')}-${county.includes('PA') ? 'pa' : 'oh'}`}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
                    >
                      {county}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-[var(--color-accent)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Plumbing Emergency? Don't Wait!
          </h2>
          <p className="text-orange-100 mb-6 max-w-xl mx-auto">
            We're available 24/7 for emergency plumbing services throughout Northeast Ohio.
          </p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--color-accent)] font-bold text-xl rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-6 h-6" />
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  )
}
