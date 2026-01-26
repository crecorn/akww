import { NextRequest, NextResponse } from 'next/server'
import { createLeadFromContactForm, ContactFormData } from '@/lib/housecall-pro/client'
import { createClient } from '@/lib/supabase/server'

// Service types for validation
const VALID_SERVICE_TYPES = [
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

// Validation helper
function validateFormData(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  const form = data as Record<string, unknown>

  if (!form.firstName || typeof form.firstName !== 'string' || form.firstName.length < 2) {
    errors.push('First name is required (min 2 characters)')
  }

  if (!form.lastName || typeof form.lastName !== 'string' || form.lastName.length < 2) {
    errors.push('Last name is required (min 2 characters)')
  }

  if (!form.email || typeof form.email !== 'string' || !form.email.includes('@')) {
    errors.push('Valid email is required')
  }

  if (!form.phone || typeof form.phone !== 'string' || form.phone.replace(/\D/g, '').length < 10) {
    errors.push('Valid phone number is required (10 digits)')
  }

  if (!form.serviceType || !VALID_SERVICE_TYPES.includes(form.serviceType as string)) {
    errors.push('Please select a valid service type')
  }

  if (!form.message || typeof form.message !== 'string' || form.message.length < 10) {
    errors.push('Message is required (min 10 characters)')
  }

  return { valid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data
    const validation = validateFormData(body)
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      )
    }

    const formData: ContactFormData = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.replace(/\D/g, ''), // Strip non-digits
      address: body.address ? {
        street: body.address.street?.trim(),
        city: body.address.city?.trim(),
        state: body.address.state?.trim(),
        zip: body.address.zip?.trim(),
      } : undefined,
      serviceType: body.serviceType,
      message: body.message.trim(),
      preferredContact: body.preferredContact || 'phone',
      source: body.source || 'Website Contact Form',
    }

    // Get UTM params if present
    const utmSource = body.utmSource || null
    const utmMedium = body.utmMedium || null
    const utmCampaign = body.utmCampaign || null

    // 1. Create lead in Housecall Pro
    const hcpResult = await createLeadFromContactForm(formData)

    // 2. Store in Supabase as backup (even if HCP fails)
    let supabaseResult = null
    try {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('form_submissions')
        .insert({
          form_type: 'contact',
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service_interest: formData.serviceType,
          preferred_contact: formData.preferredContact,
          source_page: body.sourcePage || '/contact',
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          ghl_contact_id: hcpResult.data?.id || null, // Using existing column for HCP lead ID
        })
        .select()
        .single()

      if (error) {
        // Supabase insert failed - continue with HCP as primary
      } else {
        supabaseResult = data
      }
    } catch {
      // Database error - continue even if DB fails, HCP is primary
    }

    // Return success if HCP succeeded
    if (hcpResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Thank you! We\'ll be in touch shortly.',
        leadId: hcpResult.data?.id,
      })
    }

    // If HCP failed but we have Supabase backup
    if (supabaseResult) {
      return NextResponse.json({
        success: true,
        message: 'Thank you! We\'ll be in touch shortly.',
        note: 'backup',
      })
    }

    // Both failed
    return NextResponse.json(
      { 
        success: false, 
        error: 'Unable to submit form. Please call us directly.' 
      },
      { status: 500 }
    )

  } catch {
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again or call us directly.' 
      },
      { status: 500 }
    )
  }
}

// Return allowed methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
