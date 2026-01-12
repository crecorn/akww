'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react'
import { getCountyBySlug } from '@/lib/constants/counties'
import { siteConfig } from '@/lib/constants/site'

const county = getCountyBySlug('mahoning-county')!

const SERVICE_TYPES = [
  'Plumbing - General', 'Plumbing - Water Heater', 'Plumbing - Emergency',
  'Sewer & Drain - Clogged Drain', 'Sewer & Drain - Sewer Line', 'Sewer & Drain - Camera Inspection',
  'Waterproofing - Wet Basement', 'Waterproofing - Foundation Crack', 'Waterproofing - Sump Pump', 'Other',
]

const URGENCY_LEVELS = [
  { value: 'emergency', label: '🚨 Emergency - Need help NOW' },
  { value: 'urgent', label: 'Urgent - Within 24 hours' },
  { value: 'soon', label: 'Soon - This week' },
  { value: 'scheduled', label: 'Scheduled - Planning ahead' },
]

export default function MahoningContactPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', serviceType: '', urgency: '', message: '' })
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
          message: `County: ${county.name}\nUrgency: ${formData.urgency}\nService: ${formData.serviceType}\nAddress: ${formData.address}, ${formData.city}, ${county.state}\n\n${formData.message}`,
          source: `${county.name} Contact Form`,
          sourcePage: `/service-areas/${county.slug}/contact`,
        }),
      })
      const result = await response.json()
      setSubmitStatus(result.success ? 'success' : 'error')
    } catch { setSubmitStatus('error') }
    finally { setIsSubmitting(false) }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Request Service in {county.name}</h1>
          <p className="text-lg text-slate-600">Fill out the form below and we'll get back to you quickly. For emergencies, call us directly.</p>
        </header>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
          <div>
            <h2 className="font-bold text-red-800">Plumbing Emergency?</h2>
            <p className="text-red-700 text-sm mt-1">Don't wait - call us immediately for 24/7 emergency service in {county.name}.</p>
            <a href={`tel:${county.phoneRaw}`} className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
              <Phone className="w-4 h-4" />Call {county.phone}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h2>
                <p className="text-slate-600 mb-4">We've received your service request for {county.name} and will contact you shortly.</p>
                <p className="text-sm text-slate-500">For emergencies, call <a href={`tel:${county.phoneRaw}`} className="text-[var(--color-primary)] font-semibold">{county.phone}</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Service Address *</label><input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="Street address" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">City *</label><select name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"><option value="">Select city...</option>{county.cities.map(city => (<option key={city} value={city}>{city}</option>))}<option value="Other">Other</option></select></div>
                </div>
                <div><label className="block text-sm font-medium text-slate-700 mb-1">What do you need help with? *</label><select name="serviceType" value={formData.serviceType} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"><option value="">Select a service...</option>{SERVICE_TYPES.map(type => (<option key={type} value={type}>{type}</option>))}</select></div>
                <div><label className="block text-sm font-medium text-slate-700 mb-2">How urgent is this? *</label><div className="grid sm:grid-cols-2 gap-2">{URGENCY_LEVELS.map(level => (<label key={level.value} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${formData.urgency === level.value ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-slate-200 hover:bg-slate-50'}`}><input type="radio" name="urgency" value={level.value} checked={formData.urgency === level.value} onChange={handleChange} className="text-[var(--color-primary)]" /><span className="text-sm text-slate-700">{level.label}</span></label>))}</div></div>
                <div><label className="block text-sm font-medium text-slate-700 mb-1">Describe your issue</label><textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Please provide details about your plumbing, drain, or waterproofing issue..." className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none" /></div>
                <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:bg-slate-400 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                  {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Submitting...</>) : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="font-bold text-slate-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <a href={`tel:${county.phoneRaw}`} className="flex items-center gap-3 text-slate-600 hover:text-[var(--color-primary)]"><div className="p-2 bg-[var(--color-primary)]/10 rounded-lg"><Phone className="w-5 h-5 text-[var(--color-primary)]" /></div><div><p className="text-xs text-slate-500">{county.name} Direct Line</p><p className="font-semibold text-slate-900">{county.phone}</p></div></a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-slate-600 hover:text-[var(--color-primary)]"><div className="p-2 bg-slate-100 rounded-lg"><Mail className="w-5 h-5 text-slate-600" /></div><span>{siteConfig.email}</span></a>
                <div className="flex items-start gap-3 text-slate-600"><div className="p-2 bg-slate-100 rounded-lg"><MapPin className="w-5 h-5 text-slate-600" /></div><div><p className="text-sm">Serving all of {county.name}</p><p className="text-xs text-slate-500 mt-1">Based in Warren, OH</p></div></div>
                <div className="flex items-center gap-3 text-slate-600"><div className="p-2 bg-slate-100 rounded-lg"><Clock className="w-5 h-5 text-slate-600" /></div><div><p className="font-medium text-slate-900">24/7 Emergency Service</p><p className="text-xs text-slate-500">Always available when you need us</p></div></div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h2 className="font-bold text-slate-900 mb-3">Cities We Serve</h2>
              <div className="flex flex-wrap gap-2">{county.cities.map(city => (<span key={city} className="px-2 py-1 bg-white rounded text-xs text-slate-600">{city}</span>))}</div>
            </div>
            <div className="text-center"><img src="/images/Jack Standing.svg" alt="" className="h-28 mx-auto opacity-75" aria-hidden="true" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
