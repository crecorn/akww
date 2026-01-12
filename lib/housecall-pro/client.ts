/**
 * Housecall Pro API Client
 * Documentation: https://docs.housecallpro.com/docs/housecall-public-api
 */

const HCP_API_URL = 'https://api.housecallpro.com/v1'
const HCP_API_KEY = process.env.HOUSECALL_PRO_API_KEY

// Types
export interface HCPAddress {
  street?: string
  street_line_2?: string
  city?: string
  state?: string
  zip?: string
  country?: string
}

export interface HCPCustomer {
  id?: string
  first_name: string
  last_name: string
  email?: string
  mobile_number?: string
  home_number?: string
  work_number?: string
  company?: string
  addresses?: HCPAddress[]
  notifications_enabled?: boolean
  tags?: string[]
  lead_source?: string
  notes?: string
}

export interface HCPLead {
  id?: string
  customer: {
    first_name: string
    last_name: string
    email?: string
    mobile_number?: string
    home_number?: string
    address?: HCPAddress
  }
  job_description?: string
  source?: string
  tags?: string[]
}

export interface HCPJob {
  id?: string
  customer_id: string
  address?: HCPAddress
  scheduled_start?: string
  scheduled_end?: string
  description?: string
  work_status?: string
  invoice_number?: string
  tags?: string[]
  assigned_employee_ids?: string[]
}

export interface HCPApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// API Request Helper
async function hcpRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<HCPApiResponse<T>> {
  if (!HCP_API_KEY) {
    console.error('HOUSECALL_PRO_API_KEY is not set')
    return { success: false, error: 'API key not configured' }
  }

  try {
    const response = await fetch(`${HCP_API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Token ${HCP_API_KEY}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('HCP API Error:', response.status, data)
      return { 
        success: false, 
        error: data.message || data.error || `API Error: ${response.status}` 
      }
    }

    return { success: true, data }
  } catch (error) {
    console.error('HCP API Request Failed:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Request failed' 
    }
  }
}

// ============================================
// Customer Functions
// ============================================

export async function createCustomer(customer: HCPCustomer): Promise<HCPApiResponse<HCPCustomer>> {
  return hcpRequest<HCPCustomer>('/customers', {
    method: 'POST',
    body: JSON.stringify({ customer }),
  })
}

export async function getCustomers(params?: { 
  page?: number
  page_size?: number
  q?: string  // search query
}): Promise<HCPApiResponse<{ customers: HCPCustomer[] }>> {
  const query = new URLSearchParams()
  if (params?.page) query.set('page', String(params.page))
  if (params?.page_size) query.set('page_size', String(params.page_size))
  if (params?.q) query.set('q', params.q)
  
  const queryString = query.toString()
  return hcpRequest(`/customers${queryString ? `?${queryString}` : ''}`)
}

export async function getCustomerById(id: string): Promise<HCPApiResponse<HCPCustomer>> {
  return hcpRequest<HCPCustomer>(`/customers/${id}`)
}

export async function searchCustomerByEmail(email: string): Promise<HCPApiResponse<{ customers: HCPCustomer[] }>> {
  return getCustomers({ q: email })
}

// ============================================
// Lead Functions
// ============================================

export async function createLead(lead: HCPLead): Promise<HCPApiResponse<HCPLead>> {
  return hcpRequest<HCPLead>('/leads', {
    method: 'POST',
    body: JSON.stringify({ lead }),
  })
}

export async function getLeads(params?: {
  page?: number
  page_size?: number
}): Promise<HCPApiResponse<{ leads: HCPLead[] }>> {
  const query = new URLSearchParams()
  if (params?.page) query.set('page', String(params.page))
  if (params?.page_size) query.set('page_size', String(params.page_size))
  
  const queryString = query.toString()
  return hcpRequest(`/leads${queryString ? `?${queryString}` : ''}`)
}

// ============================================
// Job Functions
// ============================================

export async function createJob(job: HCPJob): Promise<HCPApiResponse<HCPJob>> {
  return hcpRequest<HCPJob>('/jobs', {
    method: 'POST',
    body: JSON.stringify({ job }),
  })
}

export async function getJobs(params?: {
  page?: number
  page_size?: number
  work_status?: 'scheduled' | 'in_progress' | 'complete' | 'canceled'
}): Promise<HCPApiResponse<{ jobs: HCPJob[] }>> {
  const query = new URLSearchParams()
  if (params?.page) query.set('page', String(params.page))
  if (params?.page_size) query.set('page_size', String(params.page_size))
  if (params?.work_status) query.set('work_status', params.work_status)
  
  const queryString = query.toString()
  return hcpRequest(`/jobs${queryString ? `?${queryString}` : ''}`)
}

export async function getJobById(id: string): Promise<HCPApiResponse<HCPJob>> {
  return hcpRequest<HCPJob>(`/jobs/${id}`)
}

// ============================================
// Helper: Create Lead from Contact Form
// ============================================

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address?: {
    street?: string
    city?: string
    state?: string
    zip?: string
  }
  serviceType: string
  message: string
  preferredContact?: 'phone' | 'email'
  source?: string
}

export async function createLeadFromContactForm(
  formData: ContactFormData
): Promise<HCPApiResponse<HCPLead>> {
  const lead: HCPLead = {
    customer: {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      mobile_number: formData.phone,
      address: formData.address ? {
        street: formData.address.street,
        city: formData.address.city,
        state: formData.address.state,
        zip: formData.address.zip,
      } : undefined,
    },
    job_description: `Service Requested: ${formData.serviceType}\n\nMessage:\n${formData.message}\n\nPreferred Contact: ${formData.preferredContact || 'phone'}`,
    source: formData.source || 'Website Contact Form',
    tags: ['website-lead', formData.serviceType.toLowerCase().replace(/\s+/g, '-')],
  }

  return createLead(lead)
}
