'use client'

import { useState } from 'react'
import { Phone, Mail, Building2, Clock, CheckCircle2, Loader2 } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

const SERVICE_TYPES = [
  'New Construction',
  'Municipal / Government',
  'Industrial / Manufacturing',
  'Restaurant / Food Service',
  'Retail / Office',
  'Emergency Service',
  'Maintenance Program',
  'Other',
]

const PROJECT_SIZES = [
  'Small (Under $5,000)',
  'Medium ($5,000 - $25,000)',
  'Large ($25,000 - $100,000)',
  'Enterprise ($100,000+)',
  'Not Sure',
]

export default function CommercialContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectSize: '',
    timeline: '',
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
          firstName: formData.contactName.split(' ')[0],
          lastName: formData.contactName.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          serviceType: `Commercial: ${formData.serviceType}`,
          message: `Company: ${formData.companyName}\nService Type: ${formData.serviceType}\nProject Size: ${formData.projectSize}\nTimeline: ${formData.timeline}\n\n${formData.message}`,
          source: 'Commercial Contact Form',
          sourcePage: '/commercial/contact',
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
        <div className="flex items-center gap-2 text-slate-500 text-sm uppercase tracking-wide mb-2">
          <Building2 className="w-4 h-4" />
          <span className="font-medium">Commercial Division</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Let's Discuss Your Project
        </h1>
        <p className="text-lg text-slate-600">
          Tell us about your commercial plumbing needs and our team will provide a detailed consultation and proposal.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received!</h2>
              <p className="text-slate-600 mb-4">
                Our commercial team will review your project details and contact you within 1 business day.
              </p>
              <p className="text-sm text-slate-500">
                For urgent needs, call <a href={`tel:${siteConfig.phoneRaw}`} className="text-[var(--color-primary)] font-semibold">{siteConfig.phone}</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contact Name *</label>
                  <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Type *</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent">
                    <option value="">Select service...</option>
                    {SERVICE_TYPES.map(type => (<option key={type} value={type}>{type}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Project Size</label>
                  <select name="projectSize" value={formData.projectSize} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent">
                    <option value="">Select size...</option>
                    {PROJECT_SIZES.map(size => (<option key={size} value={size}>{size}</option>))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Timeline</label>
                <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g., Starting in 2 weeks, Need by end of quarter" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Describe your project requirements, location, special considerations..." className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-4 px-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] disabled:bg-slate-400 text-white font-semibold text-lg rounded-lg transition-colors flex items-center justify-center gap-2">
                {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Submitting...</>) : 'Submit Project Inquiry'}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-bold text-slate-900 mb-4">Contact Our Commercial Team</h2>
            <div className="space-y-4">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-slate-600 hover:text-[var(--color-primary)]">
                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg"><Phone className="w-5 h-5 text-[var(--color-primary)]" /></div>
                <div>
                  <p className="text-xs text-slate-500">Commercial Direct</p>
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
                  <p className="font-medium text-slate-900">24/7 Emergency Service</p>
                  <p className="text-xs text-slate-500">For commercial emergencies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h2 className="font-bold text-slate-900 mb-3">Why Choose Us</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Licensed commercial plumbers</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Full liability insurance</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Competitive pricing</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Flexible scheduling</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5" />Detailed proposals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
