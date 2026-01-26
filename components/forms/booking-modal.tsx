'use client'

import { useState, useEffect } from 'react'
import { X, Phone, Clock, CheckCircle2, AlertCircle, Loader2, Calendar, ArrowRight } from 'lucide-react'
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

const TIME_PREFERENCES = [
  'Morning (8am - 12pm)',
  'Afternoon (12pm - 4pm)',
  'Evening (4pm - 6pm)',
  'ASAP - Emergency',
  'Flexible',
]

interface BookingFormData {
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
  preferredDate: string
  preferredTime: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedService?: string
}

// Jack Head Avatar Component - circular crop showing just his head
function JackAvatar({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md ${className}`}>
      <img 
        src="/images/Jack Waving.svg" 
        alt="Jack"
        className="w-[200%] h-[200%] object-cover"
        style={{ 
          objectPosition: '50% 10%',
          transform: 'scale(.75) translateY(15%)'
        }}
      />
    </div>
  )
}

export function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [activeTab, setActiveTab] = useState<'quick' | 'schedule'>('schedule')
  const [formData, setFormData] = useState<BookingFormData>({
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
    serviceType: preselectedService || '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  // Update service type if preselected changes
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceType: preselectedService }))
    }
  }, [preselectedService])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Format phone number
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
      newErrors.phone = 'Valid phone number is required'
    }
    if (!formData.address.street.trim()) {
      newErrors['address.street'] = 'Street address is required for service'
    }
    if (!formData.address.city.trim()) {
      newErrors['address.city'] = 'City is required'
    }
    if (!formData.address.zip.trim() || formData.address.zip.length < 5) {
      newErrors['address.zip'] = 'Valid ZIP code is required'
    }
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service'
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date'
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a time preference'
    }

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
          message: `Preferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}\n\n${formData.message || 'No additional notes.'}`,
          source: 'Website Booking Form',
          sourcePage: window.location.pathname,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('Your appointment request has been submitted! We\'ll contact you shortly to confirm.')
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('Unable to submit. Please call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetAndClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: { street: '', city: '', state: 'OH', zip: '' },
      serviceType: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    })
    setErrors({})
    setSubmitStatus('idle')
    setActiveTab('schedule')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && resetAndClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-[var(--color-primary)] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <JackAvatar />
            <div>
              <h2 className="text-xl font-bold">Schedule Service</h2>
              <p className="text-blue-100 text-sm">Book your appointment online</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200">
          <button
            onClick={() => setActiveTab('quick')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors relative ${
              activeTab === 'quick' 
                ? 'text-[var(--color-primary)]' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Quick Request
            </span>
            {activeTab === 'quick' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors relative ${
              activeTab === 'schedule' 
                ? 'text-[var(--color-primary)]' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Self-Schedule
            </span>
            {activeTab === 'schedule' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          {activeTab === 'schedule' ? (
            /* Self-Schedule - Opens HCP Booking */
            <div className="p-6 text-center">
              <div className="max-w-md mx-auto">
                {/* Jack Standing illustration */}
                <img 
                  src="/images/Jack Standing.svg" 
                  alt="Jack" 
                  className="h-32 mx-auto mb-6"
                />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Book Your Appointment
                </h3>
                <p className="text-slate-600 mb-6">
                  Choose your service and pick a time that works for you. 
                  Our online scheduler shows real-time availability.
                </p>

                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-lg rounded-lg transition-colors mb-4"
                >
                  <Calendar className="w-5 h-5" />
                  Open Scheduler
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-sm text-slate-500 mb-6">
                  Opens in a new tab with our full booking calendar
                </p>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600 mb-3">
                    Prefer we call you instead?
                  </p>
                  <button
                    onClick={() => setActiveTab('quick')}
                    className="text-[var(--color-primary)] font-medium hover:underline"
                  >
                    Switch to Quick Request →
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Quick Request Form */
            <div className="p-6">
              {/* Success State */}
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h3>
                  <p className="text-slate-600 mb-6">{submitMessage}</p>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-500">
                      Need immediate assistance?
                    </p>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Call {siteConfig.phone}
                    </a>
                  </div>
                  <button
                    onClick={resetAndClose}
                    className="mt-6 text-slate-500 hover:text-slate-700 underline"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Tab Description */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-800">
                    <strong>Quick Request:</strong> Submit your info and we'll call you to schedule.
                    <button 
                      type="button"
                      onClick={() => setActiveTab('schedule')}
                      className="ml-2 text-[var(--color-primary)] font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Or self-schedule now <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Error Banner */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-800 font-medium">{submitMessage}</p>
                        <a href={`tel:${siteConfig.phoneRaw}`} className="text-red-700 underline text-sm">
                          Call {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-firstName" className="block text-sm font-medium text-slate-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="booking-firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                        } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="booking-lastName" className="block text-sm font-medium text-slate-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="booking-lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                        } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                        placeholder="Smith"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="booking-phone"
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
                      <label htmlFor="booking-email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="booking-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                        } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service Address */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-xs font-bold text-[var(--color-primary)]">1</span>
                      Service Address
                    </h3>
                    <div>
                      <input
                        type="text"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors['address.street'] ? 'border-red-500 bg-red-50' : 'border-slate-300'
                        } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                        placeholder="Street Address *"
                      />
                      {errors['address.street'] && <p className="text-red-500 text-xs mt-1">{errors['address.street']}</p>}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="col-span-2">
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
                      <div>
                        <input
                          type="text"
                          name="address.zip"
                          value={formData.address.zip}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors['address.zip'] ? 'border-red-500 bg-red-50' : 'border-slate-300'
                          } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                          placeholder="ZIP *"
                          maxLength={5}
                        />
                        {errors['address.zip'] && <p className="text-red-500 text-xs mt-1">{errors['address.zip']}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-xs font-bold text-[var(--color-primary)]">2</span>
                      Service Needed
                    </h3>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.serviceType ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                    >
                      <option value="">Select a service... *</option>
                      {SERVICE_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
                  </div>

                  {/* Scheduling */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-xs font-bold text-[var(--color-primary)]">3</span>
                      Preferred Schedule
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="booking-date" className="block text-sm font-medium text-slate-700 mb-1">
                          <Clock className="w-4 h-4 inline mr-1" />
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="booking-date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={getMinDate()}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.preferredDate ? 'border-red-500 bg-red-50' : 'border-slate-300'
                          } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                        />
                        {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
                      </div>
                      <div>
                        <label htmlFor="booking-time" className="block text-sm font-medium text-slate-700 mb-1">
                          Time Preference *
                        </label>
                        <select
                          id="booking-time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.preferredTime ? 'border-red-500 bg-red-50' : 'border-slate-300'
                          } focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent`}
                        >
                          <option value="">Select time...</option>
                          {TIME_PREFERENCES.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="booking-message" className="block text-sm font-medium text-slate-700 mb-1">
                      Additional Details (optional)
                    </label>
                    <textarea
                      id="booking-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                      placeholder="Describe your issue or any special instructions..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
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
                        <>
                          <Phone className="w-5 h-5" />
                          Request Callback
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-3">
                      We'll contact you to confirm your appointment.
                      <br />
                      Or call <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold text-[var(--color-primary)]">{siteConfig.phone}</a> for immediate scheduling.
                    </p>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Hook to manage modal state
export function useBookingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState<string | undefined>()

  const openModal = (service?: string) => {
    setPreselectedService(service)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setPreselectedService(undefined)
  }

  return { isOpen, openModal, closeModal, preselectedService }
}
