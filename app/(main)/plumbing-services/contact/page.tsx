'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Loader2,
  Wrench,
  ArrowRight,
  AlertTriangle
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

const plumbingServices = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Water Heater Repair',
  'Water Heater Replacement',
  'Sewer Line Repair',
  'Sewer Line Inspection',
  'Pipe Repair',
  'Leak Detection',
  'Fixture Installation',
  'Garbage Disposal',
  'Toilet Repair/Replacement',
  'Other',
]

const urgencyLevels = [
  { value: 'emergency', label: 'Emergency - Need help NOW', color: 'red' },
  { value: 'urgent', label: 'Urgent - Within 24 hours', color: 'amber' },
  { value: 'soon', label: 'Soon - This week', color: 'blue' },
  { value: 'flexible', label: 'Flexible - Whenever available', color: 'slate' },
]

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  serviceType: string
  urgency: string
  message: string
}

export default function PlumbingContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: 'OH',
      zip: '',
    },
    serviceType: '',
    urgency: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }

    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        address: { ...prev.address, [addressField]: value }
      }))
    } else if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatPhoneNumber(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required'
    }
    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (phoneDigits.length < 10) newErrors.phone = 'Valid phone number is required'
    if (!formData.address.city.trim()) newErrors['address.city'] = 'City is required'
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          message: `Service Needed: ${formData.serviceType}\nUrgency: ${formData.urgency || 'Not specified'}\n\n${formData.message || 'No additional details.'}`,
          serviceType: formData.serviceType,
          source: 'Plumbing Contact Form',
          sourcePage: '/plumbing-services/contact',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Request Received!
          </h1>
          <p className="text-slate-600 mb-6">
            Thank you for contacting AK Water Works. One of our plumbing specialists 
            will contact you shortly to discuss your needs.
          </p>
          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-slate-600">
              <strong>Need help right now?</strong> Call us directly:
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-xl font-bold text-[var(--color-primary)] hover:underline"
            >
              {siteConfig.phone}
            </a>
          </div>
          <Link
            href="/plumbing-services"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
          >
            Return to Plumbing Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <header>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
            <Wrench className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Request Plumbing Service
            </h1>
            <p className="text-slate-600">We'll get back to you quickly</p>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-4">
        <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-bold text-red-900">Plumbing Emergency?</p>
          <p className="text-red-700 text-sm">Don't wait - call us now for immediate assistance.</p>
        </div>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg whitespace-nowrap"
        >
          Call Now
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-medium">Unable to submit form</p>
                  <p className="text-red-700 text-sm">
                    Please try again or call us at{' '}
                    <a href={`tel:${siteConfig.phoneRaw}`} className="underline">{siteConfig.phone}</a>
                  </p>
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div>
              <h2 className="font-bold text-slate-900 mb-4">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                    placeholder="(330) 555-1234"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="font-bold text-slate-900 mb-4">Service Location</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="col-span-2 sm:col-span-2">
                  <input
                    type="text"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors['address.city'] ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                    placeholder="City *"
                  />
                  {errors['address.city'] && <p className="text-red-500 text-xs mt-1">{errors['address.city']}</p>}
                </div>
                <select
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleChange}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                >
                  <option value="OH">OH</option>
                  <option value="PA">PA</option>
                </select>
                <input
                  type="text"
                  name="address.zip"
                  value={formData.address.zip}
                  onChange={handleChange}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="ZIP"
                  maxLength={5}
                />
              </div>
            </div>

            {/* Service Details */}
            <div>
              <h2 className="font-bold text-slate-900 mb-4">Service Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">
                    What do you need help with? *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.serviceType ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                  >
                    <option value="">Select a service...</option>
                    {plumbingServices.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How urgent is this?
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {urgencyLevels.map((level) => (
                      <label
                        key={level.value}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          formData.urgency === level.value
                            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={level.value}
                          checked={formData.urgency === level.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.urgency === level.value ? 'border-[var(--color-primary)]' : 'border-slate-300'
                        }`}>
                          {formData.urgency === level.value && (
                            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                          )}
                        </div>
                        <span className="text-sm text-slate-700">{level.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Describe the problem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                    placeholder="Tell us what's happening..."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:bg-slate-400 text-white font-bold text-lg rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Request Service'
              )}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <div className="bg-[var(--color-primary)] rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4">Prefer to Call?</h3>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-3 text-xl font-bold mb-4 hover:underline"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.phone}
            </a>
            <div className="space-y-3 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">What Happens Next</h3>
            <div className="space-y-4">
              {[
                { step: '1', text: 'We\'ll call you to discuss your plumbing needs' },
                { step: '2', text: 'We\'ll schedule a convenient appointment time' },
                { step: '3', text: 'Our plumber arrives and diagnoses the issue' },
                { step: '4', text: 'We provide upfront pricing before starting work' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <span className="text-slate-600 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Signals */}
          <div className="bg-slate-50 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-4">Why Choose Us</h3>
            <div className="space-y-3">
              {[
                '24/7 Emergency Service',
                'Upfront, Flat-Rate Pricing',
                'Licensed & Insured',
                'Satisfaction Guaranteed',
                'Clean & Courteous Technicians',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
