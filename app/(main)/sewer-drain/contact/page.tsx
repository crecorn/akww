'use client'

import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Droplets
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

const DRAIN_ISSUES = [
  'Clogged drain',
  'Slow draining',
  'Sewage backup',
  'Sewer odor',
  'Gurgling sounds',
  'Multiple drains affected',
  'Tree root intrusion',
  'Septic service needed',
  'Camera inspection',
  'Other',
]

const URGENCY_LEVELS = [
  { value: 'emergency', label: '🚨 Emergency - Need help NOW', highlight: true },
  { value: 'urgent', label: 'Urgent - Within 24 hours' },
  { value: 'soon', label: 'Soon - Within a few days' },
  { value: 'scheduled', label: 'Scheduled - Planning ahead' },
]

export default function SewerDrainContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    drainIssue: '',
    urgency: '',
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
          serviceType: `Sewer & Drain: ${formData.drainIssue}`,
          message: `Urgency: ${formData.urgency}\nIssue: ${formData.drainIssue}\nAddress: ${formData.address}, ${formData.city}\n\n${formData.message}`,
          source: 'Sewer & Drain Contact Form',
          sourcePage: '/sewer-drain/contact',
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
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-[var(--color-primary)] mb-2">
          <Droplets className="w-5 h-5" />
          <span className="text-sm font-medium">Sewer & Drain Services</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Request Sewer & Drain Service
        </h1>
        <p className="text-lg text-slate-600">
          Describe your drain issue and we'll get back to you quickly.
        </p>
      </header>

      {/* Emergency Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
        <div>
          <h2 className="font-bold text-red-800">Sewage Backup or Emergency?</h2>
          <p className="text-red-700 text-sm mt-1">
            Don't wait - call us immediately for 24/7 emergency service.
          </p>
          <a 
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h2>
              <p className="text-slate-600 mb-4">
                We've received your sewer & drain service request and will contact you shortly.
              </p>
              <p className="text-sm text-slate-500">
                For emergencies, call <a href={`tel:${siteConfig.phoneRaw}`} className="text-[var(--color-primary)] font-semibold">{siteConfig.phone}</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-6">
              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Service Address */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Street address"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Issue Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">What's the issue? *</label>
                <select
                  name="drainIssue"
                  value={formData.drainIssue}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                >
                  <option value="">Select an issue...</option>
                  {DRAIN_ISSUES.map(issue => (
                    <option key={issue} value={issue}>{issue}</option>
                  ))}
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">How urgent is this? *</label>
                <div className="space-y-2">
                  {URGENCY_LEVELS.map(level => (
                    <label 
                      key={level.value}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        formData.urgency === level.value 
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' 
                          : 'border-slate-200 hover:bg-slate-50'
                      } ${level.highlight ? 'border-red-200 bg-red-50' : ''}`}
                    >
                      <input
                        type="radio"
                        name="urgency"
                        value={level.value}
                        checked={formData.urgency === level.value}
                        onChange={handleChange}
                        className="text-[var(--color-primary)]"
                      />
                      <span className={level.highlight ? 'text-red-800 font-medium' : 'text-slate-700'}>
                        {level.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Describe the problem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Where is the clog? When did it start? Any other details..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:bg-slate-400 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-bold text-slate-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-slate-600 hover:text-[var(--color-primary)]">
                <Phone className="w-5 h-5" />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-slate-600 hover:text-[var(--color-primary)]">
                <Mail className="w-5 h-5" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-600">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h2 className="font-bold text-slate-900 mb-4">What to Expect</h2>
            <ol className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
                <span>We'll call to confirm details and schedule</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
                <span>Technician arrives and diagnoses the issue</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
                <span>Upfront pricing before any work begins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">4</span>
                <span>Problem solved, drains flowing!</span>
              </li>
            </ol>
          </div>

          {/* Jack Mascot */}
          <div className="text-center">
            <img 
              src="/images/Jack w Wrench.svg" 
              alt="" 
              className="h-24 mx-auto opacity-75"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
