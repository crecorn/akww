'use client'

import { useState } from 'react'
import { Phone, Mail, Waves, Clock, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

const SERVICE_TYPES = [
  'Water Damage - Emergency',
  'Water Damage - Recovery',
  'Water Pump Out & Clean Up',
  'Basement Waterproofing',
  'Basement Drainage / French Drain',
  'Crawl Space Encapsulation',
  'Sump Pump Installation',
  'Free Inspection',
  'Other',
]

const URGENCY_LEVELS = [
  { value: 'emergency', label: '🚨 Emergency - Active water damage NOW' },
  { value: 'urgent', label: 'Urgent - Recent water issue' },
  { value: 'soon', label: 'Soon - Want to waterproof this month' },
  { value: 'planning', label: 'Planning - Gathering estimates' },
]

export default function EmergencyContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    urgency: '',
    hasStandingWater: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          serviceType: `Emergency: ${formData.serviceType}`,
          message: `Service: ${formData.serviceType}\nUrgency: ${formData.urgency}\nStanding Water: ${formData.hasStandingWater}\nAddress: ${formData.address}\n\n${formData.message}`,
          source: 'Emergency Contact Form',
          sourcePage: '/emergencies/contact',
        }),
      })

      const result = await response.json()
      setSubmitStatus(result.success ? 'success' : 'error')
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="space-y-8">
      <header>
        <div className="flex items-center gap-2 text-[var(--color-primary)] mb-2">
          <Waves className="w-5 h-5" />
          <span className="font-medium">Emergency Services</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Request Service or Free Estimate
        </h1>
        <p className="text-lg text-slate-600">
          Tell us about your water damage or waterproofing needs.
        </p>
      </header>

      {/* Emergency Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
        <div className="flex-1">
          <h2 className="font-bold text-red-800">Water Emergency?</h2>
          <p className="text-red-700 text-sm mt-1">
            Don't wait - call immediately for 24/7 emergency water damage response.
          </p>
        </div>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h2>
              <p className="text-slate-600 mb-4">
                We'll contact you shortly to discuss your needs.
              </p>
              <p className="text-sm text-slate-500">
                For emergencies, call <a href={`tel:${siteConfig.phoneRaw}`} className="text-[var(--color-primary)] font-semibold">{siteConfig.phone}</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Address *</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="Full address" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed *</label>
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent">
                  <option value="">Select a service...</option>
                  {SERVICE_TYPES.map(type => (<option key={type} value={type}>{type}</option>))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">How urgent is this? *</label>
                <div className="space-y-2">
                  {URGENCY_LEVELS.map(level => (
                    <label key={level.value} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${formData.urgency === level.value ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-slate-200 hover:bg-slate-50'}`}>
                      <input type="radio" name="urgency" value={level.value} checked={formData.urgency === level.value} onChange={handleChange} className="text-[var(--color-primary)]" />
                      <span className="text-sm text-slate-700">{level.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Do you currently have standing water?</label>
                <div className="flex gap-4">
                  {['Yes', 'No', 'Not Sure'].map(option => (
                    <label key={option} className="flex items-center gap-2">
                      <input type="radio" name="hasStandingWater" value={option} checked={formData.hasStandingWater === option} onChange={handleChange} className="text-[var(--color-primary)]" />
                      <span className="text-sm text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Describe your situation</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your water damage, basement moisture issues, or waterproofing needs..." className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:bg-slate-400 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Submitting...</>) : 'Submit Request'}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-bold text-slate-900 mb-4">Contact Us</h2>
            <div className="space-y-4">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-slate-600 hover:text-[var(--color-primary)]">
                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg"><Phone className="w-5 h-5 text-[var(--color-primary)]" /></div>
                <div>
                  <p className="text-xs text-slate-500">24/7 Emergency Line</p>
                  <p className="font-semibold text-slate-900">{siteConfig.phone}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-slate-600 hover:text-[var(--color-primary)]">
                <div className="p-2 bg-slate-100 rounded-lg"><Mail className="w-5 h-5 text-slate-600" /></div>
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-slate-100 rounded-lg"><Clock className="w-5 h-5 text-slate-600" /></div>
                <div>
                  <p className="font-medium text-slate-900">Available 24/7</p>
                  <p className="text-xs text-slate-500">For emergencies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h2 className="font-bold text-slate-900 mb-3">What to Expect</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Quick response - same day for emergencies</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Free inspections for waterproofing</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Detailed written estimates</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Insurance claim assistance</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Financing options available</li>
            </ul>
          </div>

          <div className="text-center">
            <img src="/images/Jack Standing.svg" alt="" className="h-28 mx-auto opacity-75" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
