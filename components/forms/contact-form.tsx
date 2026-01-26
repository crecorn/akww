'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

const SERVICE_TYPES = [
  'Plumbing Repair',
  'Drain Cleaning',
  'Water Heater',
  'Sewer Line',
  'Basement Waterproofing',
  'Foundation Repair',
  'Sump Pump',
  'Water Damage',
  'Emergency Service',
  'Commercial Plumbing',
  'Other',
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
  message: string
  preferredContact: 'phone' | 'email'
}

interface FormErrors {
  [key: string]: string
}

export function ContactForm() {
  const searchParams = useSearchParams()
  
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
    serviceType: searchParams.get('service') || '',
    message: '',
    preferredContact: 'phone',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  // Format phone number as user types
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

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }

    // Handle nested address fields
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
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim() || formData.firstName.length < 2) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim() || formData.lastName.length < 2) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required'
    }

    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (phoneDigits.length < 10) {
      newErrors.phone = 'Valid 10-digit phone number is required'
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please describe how we can help (min 10 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          utmSource: searchParams.get('utm_source'),
          utmMedium: searchParams.get('utm_medium'),
          utmCampaign: searchParams.get('utm_campaign'),
          sourcePage: window.location.pathname,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(result.message || 'Thank you! We\'ll be in touch shortly.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: { street: '', city: '', state: 'OH', zip: '' },
          serviceType: '',
          message: '',
          preferredContact: 'phone',
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('Unable to submit form. Please call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success state
  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-6">{submitMessage}</p>
        <p className="text-slate-600">
          Need immediate help? Call us now:
        </p>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center gap-2 mt-2 text-xl font-bold text-[var(--color-primary)] hover:underline"
        >
          <Phone className="w-5 h-5" />
          {siteConfig.phone}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error banner */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">{submitMessage}</p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-red-700 underline text-sm"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      )}

      {/* Name fields */}
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
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-300'
            } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
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
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-300'
            } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors`}
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Contact fields */}
      <div className="grid sm:grid-cols-2 gap-4">
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
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
            } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
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
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'
            } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors`}
            placeholder="(330) 555-1234"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Address fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="address.street" className="block text-sm font-medium text-slate-700 mb-1">
            Street Address (optional)
          </label>
          <input
            type="text"
            id="address.street"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
            placeholder="123 Main St"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="col-span-2 sm:col-span-2">
            <label htmlFor="address.city" className="block text-sm font-medium text-slate-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="address.city"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
              placeholder="Warren"
            />
          </div>

          <div>
            <label htmlFor="address.state" className="block text-sm font-medium text-slate-700 mb-1">
              State
            </label>
            <select
              id="address.state"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
            >
              <option value="OH">OH</option>
              <option value="PA">PA</option>
            </select>
          </div>

          <div>
            <label htmlFor="address.zip" className="block text-sm font-medium text-slate-700 mb-1">
              ZIP
            </label>
            <input
              type="text"
              id="address.zip"
              name="address.zip"
              value={formData.address.zip}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
              placeholder="44484"
              maxLength={5}
            />
          </div>
        </div>
      </div>

      {/* Service type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">
          Service Needed *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.serviceType ? 'border-red-500 bg-red-50' : 'border-slate-300'
          } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors`}
        >
          <option value="">Select a service...</option>
          {SERVICE_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          How Can We Help? *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? 'border-red-500 bg-red-50' : 'border-slate-300'
          } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors resize-none`}
          placeholder="Please describe your issue or what service you need..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Preferred contact */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Preferred Contact Method
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === 'phone'}
              onChange={handleChange}
              className="w-4 h-4 text-[var(--color-primary)]"
            />
            <Phone className="w-4 h-4 text-slate-500" />
            <span>Phone</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === 'email'}
              onChange={handleChange}
              className="w-4 h-4 text-[var(--color-primary)]"
            />
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Email</span>
          </label>
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:bg-slate-400 text-white font-bold text-lg rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-center text-sm text-slate-500">
        Or call us directly at{' '}
        <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold text-[var(--color-primary)] hover:underline">
          {siteConfig.phone}
        </a>
      </p>
    </form>
  )
}
