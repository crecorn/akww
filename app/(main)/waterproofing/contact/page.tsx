'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Droplets,
  ArrowRight
} from 'lucide-react'
import { siteConfig } from '@/lib/constants/site'

const waterproofingServices = [
  'Basement Waterproofing',
  'Foundation Crack Repair',
  'Sump Pump Installation',
  'Sump Pump Repair',
  'Crawl Space Encapsulation',
  'French Drain System',
  'Exterior Waterproofing',
  'Water Damage Assessment',
  'Not Sure - Need Inspection',
]

const problemTypes = [
  'Standing water in basement',
  'Water seeping through walls',
  'Water coming up through floor',
  'Foundation cracks',
  'Musty/moldy smell',
  'Sump pump issues',
  'Crawl space moisture',
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
  problemType: string
  basementFinished: string
  message: string
}

export default function WaterproofingContactPage() {
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
    problemType: '',
    basementFinished: '',
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
    if (!formData.address.street.trim()) newErrors['address.street'] = 'Street address is required'
    if (!formData.address.city.trim()) newErrors['address.city'] = 'City is required'
    if (!formData.address.zip.trim() || formData.address.zip.length < 5) {
      newErrors['address.zip'] = 'Valid ZIP code is required'
    }
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
          message: `Service Needed: ${formData.serviceType}\nProblem Type: ${formData.problemType || 'Not specified'}\nBasement Finished: ${formData.basementFinished || 'Not specified'}\n\n${formData.message || 'No additional details.'}`,
          serviceType: formData.serviceType,
          source: 'Waterproofing Contact Form',
          sourcePage: '/waterproofing/contact',
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
            Thank you for contacting AK Water Works. One of our waterproofing specialists 
            will contact you shortly to schedule your free inspection.
          </p>
          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-slate-600">
              <strong>Need immediate help?</strong> Call us directly:
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-xl font-bold text-[var(--color-primary)] hover:underline"
            >
              {siteConfig.phone}
            </a>
          </div>
          <Link
            href="/waterproofing"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
          >
            Return to Waterproofing
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
            <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Get a Free Waterproofing Estimate
            </h1>
            <p className="text-slate-600">No obligation, no pressure</p>
          </div>
        </div>
      </header>

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

            {/* Property Address */}
            <div>
              <h2 className="font-bold text-slate-900 mb-4">Property Address</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="address.street" className="block text-sm font-medium text-slate-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address.street"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors['address.street'] ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                  />
                  {errors['address.street'] && <p className="text-red-500 text-xs mt-1">{errors['address.street']}</p>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="col-span-2">
                    <label htmlFor="address.city" className="block text-sm font-medium text-slate-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="address.city"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors['address.city'] ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                    />
                    {errors['address.city'] && <p className="text-red-500 text-xs mt-1">{errors['address.city']}</p>}
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
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                    >
                      <option value="OH">OH</option>
                      <option value="PA">PA</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="address.zip" className="block text-sm font-medium text-slate-700 mb-1">
                      ZIP *
                    </label>
                    <input
                      type="text"
                      id="address.zip"
                      name="address.zip"
                      value={formData.address.zip}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors['address.zip'] ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                      maxLength={5}
                    />
                    {errors['address.zip'] && <p className="text-red-500 text-xs mt-1">{errors['address.zip']}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div>
              <h2 className="font-bold text-slate-900 mb-4">Service Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">
                    What service are you interested in? *
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
                    {waterproofingServices.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
                </div>
                <div>
                  <label htmlFor="problemType" className="block text-sm font-medium text-slate-700 mb-1">
                    What problem are you experiencing?
                  </label>
                  <select
                    id="problemType"
                    name="problemType"
                    value={formData.problemType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  >
                    <option value="">Select an option...</option>
                    {problemTypes.map(problem => (
                      <option key={problem} value={problem}>{problem}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="basementFinished" className="block text-sm font-medium text-slate-700 mb-1">
                    Is your basement finished?
                  </label>
                  <select
                    id="basementFinished"
                    name="basementFinished"
                    value={formData.basementFinished}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  >
                    <option value="">Select an option...</option>
                    <option value="Yes - Fully Finished">Yes - Fully Finished</option>
                    <option value="Partially Finished">Partially Finished</option>
                    <option value="No - Unfinished">No - Unfinished</option>
                    <option value="Crawl Space Only">Crawl Space Only</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                    placeholder="Describe your water problem, when it occurs, how long you've had it, etc."
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
                'Request Free Estimate'
              )}
            </button>

            <p className="text-center text-xs text-slate-500">
              By submitting this form, you agree to be contacted about your waterproofing project.
            </p>
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
            <h3 className="font-bold text-slate-900 mb-4">What to Expect</h3>
            <div className="space-y-4">
              {[
                { step: '1', text: 'We\'ll call to schedule your free inspection' },
                { step: '2', text: 'Our expert will assess your basement or crawl space' },
                { step: '3', text: 'You\'ll receive a detailed, no-obligation estimate' },
                { step: '4', text: 'If you choose us, we\'ll schedule your project' },
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
                'Lifetime Transferable Warranty',
                'Free Inspections & Estimates',
                'Financing Available',
                'BBB A+ Accredited',
                'Locally Owned & Operated',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Jack Mascot */}
          <div className="text-center">
            <img 
              src="/images/Jack w Wrench.svg" 
              alt="" 
              className="h-32 w-auto mx-auto opacity-80"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
