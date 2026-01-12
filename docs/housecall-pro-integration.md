# Housecall Pro API Integration Guide

## Overview

This document outlines the integration strategy for AK Water Works website with Housecall Pro (HCP) API. HCP will serve as the primary CRM and scheduling system.

**Requirements:** MAX plan subscription (required for API access and webhooks)

**Base URL:** `https://api.housecallpro.com/v1`

**Booking URL:** `https://book.housecallpro.com/book/AK-Water-Works-Plumbing--Drain/9528847bb0ad4fdba1553473b5d2dfca`

---

## Authentication

### API Key Setup

1. Log into Housecall Pro account (requires admin privileges)
2. Navigate to **My Apps** (3x3 grid icon) → **Go to App Store**
3. Find the **API** app card
4. Generate a new API key
5. Store securely in environment variables

### Request Headers

```typescript
const headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
```

### Environment Variables

```env
# .env.local
HOUSECALL_PRO_API_KEY=your_api_key_here
HOUSECALL_PRO_BOOKING_URL=https://book.housecallpro.com/book/AK-Water-Works-Plumbing--Drain/9528847bb0ad4fdba1553473b5d2dfca
```

---

## Available Endpoints

### Customers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/customers` | List all customers |
| GET | `/customers/:id` | Get customer by ID |
| POST | `/customers` | Create new customer |
| PUT | `/customers/:id` | Update customer |

#### Create Customer Request

```typescript
interface CreateCustomerRequest {
  first_name: string
  last_name: string
  email?: string
  phone?: string
  mobile_phone?: string
  address?: {
    street: string
    city: string
    state: string
    zip: string
  }
  notes?: string
  tags?: string[]
}

// Example
const newCustomer = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  phone: '330-555-1234',
  address: {
    street: '123 Main St',
    city: 'Warren',
    state: 'OH',
    zip: '44484'
  }
}
```

---

### Leads (Job Inbox)

Leads appear in the **Job Inbox** under the "API Leads" channel.

**Setup Required:**
1. Navigate to **My Apps** → **Job Inbox**
2. Toggle on **API Leads**
3. The "API Leads" channel will appear in Job Inbox

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/leads` | Create new lead |
| GET | `/leads` | List leads |
| GET | `/leads/:id` | Get lead by ID |

#### Create Lead Request

```typescript
interface CreateLeadRequest {
  customer: {
    first_name: string
    last_name: string
    email?: string
    phone?: string
    address?: {
      street: string
      city: string
      state: string
      zip: string
    }
  }
  source?: string  // e.g., "Website Contact Form"
  notes?: string
  service_type?: string
}
```

**Use Case:** Website contact form submissions create leads in Job Inbox for follow-up.

---

### Jobs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/jobs` | List all jobs |
| GET | `/jobs/:id` | Get job by ID |
| POST | `/jobs` | Create new job |
| PUT | `/jobs/:id` | Update job |

#### Create Job Request

```typescript
interface CreateJobRequest {
  customer_id: string
  address?: {
    street: string
    city: string
    state: string
    zip: string
  }
  scheduled_start?: string  // ISO 8601 format
  scheduled_end?: string
  description?: string
  service_type?: string
  assigned_employees?: string[]
  tags?: string[]
}
```

---

### Estimates

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/estimates` | List all estimates |
| GET | `/estimates/:id` | Get estimate by ID |
| POST | `/estimates` | Create new estimate |
| PUT | `/estimates/:id` | Update estimate |

---

### Employees

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | List all employees |
| GET | `/employees/:id` | Get employee by ID |

---

## Webhooks

Webhooks enable real-time notifications for events in Housecall Pro.

### Setup

1. Navigate to **My Apps** → **App Store**
2. Find and enable **Webhooks** app
3. Enter your webhook endpoint URL
4. Save and copy the **Signing Secret**

### Webhook Endpoint (Next.js API Route)

```typescript
// app/api/webhooks/housecall/route.ts
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const WEBHOOK_SECRET = process.env.HOUSECALL_PRO_WEBHOOK_SECRET!

function verifySignature(payload: string, signature: string): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(payload)
    .digest('hex')
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
}

export async function POST(request: NextRequest) {
  const payload = await request.text()
  const signature = request.headers.get('x-housecallpro-signature') || ''

  if (!verifySignature(payload, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const event = JSON.parse(payload)

  switch (event.type) {
    case 'job.created':
      // Handle new job
      break
    case 'job.completed':
      // Handle completed job
      break
    case 'estimate.created':
      // Handle new estimate
      break
    case 'customer.created':
      // Handle new customer
      break
  }

  return NextResponse.json({ received: true })
}
```

### Available Webhook Events

| Event | Description |
|-------|-------------|
| `customer.created` | New customer added |
| `customer.updated` | Customer info updated |
| `lead.created` | New lead received |
| `estimate.created` | New estimate created |
| `estimate.updated` | Estimate modified |
| `estimate.sent` | Estimate sent to customer |
| `job.created` | New job scheduled |
| `job.updated` | Job modified |
| `job.completed` | Job marked complete |
| `job.canceled` | Job canceled |

---

## Online Booking Widget

### Option 1: Direct Link

```typescript
// Link to HCP booking page
const bookingUrl = siteConfig.bookingUrl
// Opens: https://book.housecallpro.com/book/AK-Water-Works-Plumbing--Drain/...
```

### Option 2: Embedded iFrame

```tsx
// components/booking/booking-widget.tsx
export function BookingWidget() {
  return (
    <div className="w-full aspect-[4/3] md:aspect-[16/9]">
      <iframe
        src="https://book.housecallpro.com/book/AK-Water-Works-Plumbing--Drain/9528847bb0ad4fdba1553473b5d2dfca"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule Service - AK Water Works"
        className="rounded-lg"
      />
    </div>
  )
}
```

### Option 3: Popup/Modal

```tsx
// components/booking/booking-modal.tsx
'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/constants/site'

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Schedule Online
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10"
            >
              Close
            </button>
            <iframe
              src={siteConfig.bookingUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Service"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
```

---

## Implementation Plan

### Phase 1: Basic Integration (Contact Form → Leads)

1. Create API utility functions for HCP
2. Build contact form component
3. On form submit:
   - Create customer in HCP (if not exists)
   - Create lead in Job Inbox
   - Store submission in Supabase (backup)
   - Send confirmation to user

### Phase 2: Booking Integration

1. Add "Schedule Online" buttons linking to HCP booking
2. Consider embedded booking widget on contact page
3. Add booking modal option for quick scheduling

### Phase 3: Webhooks (Optional)

1. Set up webhook endpoint
2. Sync job status to website (show "in progress" etc.)
3. Update customer records from HCP changes
4. Trigger email notifications

### Phase 4: Advanced Features (Future)

1. Display available time slots from HCP
2. Show job history for returning customers
3. Integration with reviews (request after job completion)

---

## API Utility Functions

```typescript
// lib/housecall-pro/client.ts

const HCP_API_URL = 'https://api.housecallpro.com/v1'
const HCP_API_KEY = process.env.HOUSECALL_PRO_API_KEY!

interface HCPResponse<T> {
  data: T
  error?: string
}

async function hcpRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<HCPResponse<T>> {
  try {
    const response = await fetch(`${HCP_API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${HCP_API_KEY}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`HCP API Error: ${response.status}`)
    }

    const data = await response.json()
    return { data }
  } catch (error) {
    console.error('HCP API Error:', error)
    return { data: null as T, error: String(error) }
  }
}

// Customer functions
export async function createCustomer(customer: CreateCustomerRequest) {
  return hcpRequest('/customers', {
    method: 'POST',
    body: JSON.stringify(customer),
  })
}

export async function getCustomerByEmail(email: string) {
  return hcpRequest(`/customers?email=${encodeURIComponent(email)}`)
}

// Lead functions
export async function createLead(lead: CreateLeadRequest) {
  return hcpRequest('/leads', {
    method: 'POST',
    body: JSON.stringify(lead),
  })
}

// Job functions
export async function getJobs(params?: { status?: string; limit?: number }) {
  const query = new URLSearchParams(params as Record<string, string>)
  return hcpRequest(`/jobs?${query}`)
}
```

---

## Environment Variables Summary

```env
# Housecall Pro
HOUSECALL_PRO_API_KEY=your_api_key
HOUSECALL_PRO_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_HOUSECALL_PRO_BOOKING_URL=https://book.housecallpro.com/book/AK-Water-Works-Plumbing--Drain/9528847bb0ad4fdba1553473b5d2dfca
```

---

## References

- [Housecall Pro API Overview](https://help.housecallpro.com/en/articles/8505035-api-overview)
- [API Leads in Job Inbox](https://help.housecallpro.com/en/articles/12062219-api-leads-in-job-inbox)
- [How to Enable Webhooks](https://help.housecallpro.com/en/articles/5683520-how-to-enable-webhooks)
- [Getting Started with Online Booking](https://help.housecallpro.com/en/articles/11473210-getting-started-with-online-booking)
- [API Documentation](https://docs.housecallpro.com/docs/housecall-public-api/b87d37ae48a0d-authentication)

---

## Notes

- API access requires **MAX plan** subscription
- All API requests must be made server-side (protect API key)
- Rate limits: Check HCP documentation (not publicly documented)
- Test in development before production deployment
- Keep webhook secret secure and rotate periodically
