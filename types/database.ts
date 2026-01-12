export interface Service {
  id: string
  slug: string
  category: 'plumbing' | 'waterproofing' | 'water-damage' | 'commercial'
  title: string
  meta_title: string | null
  meta_description: string | null
  h1: string | null
  intro_text: string | null
  content: string | null
  hero_image: string | null
  icon: string | null
  features: string[] | null
  sort_order: number
  is_featured: boolean
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface Location {
  id: string
  slug: string
  city: string
  county: string
  state: string
  zip_codes: string[] | null
  meta_title: string | null
  meta_description: string | null
  h1: string | null
  intro_text: string | null
  content: string | null
  local_content: string | null
  hero_image: string | null
  population: number | null
  is_primary: boolean
  sort_order: number
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface ServiceLocation {
  id: string
  service_id: string
  location_id: string
  custom_content: string | null
  custom_meta_title: string | null
  custom_meta_description: string | null
  is_published: boolean
  created_at: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  meta_title: string | null
  meta_description: string | null
  excerpt: string | null
  content: string
  featured_image: string | null
  category: string | null
  tags: string[] | null
  author: string
  read_time: number | null
  is_featured: boolean
  is_published: boolean
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  customer_name: string
  customer_location: string | null
  service_type: string | null
  rating: number | null
  content: string
  source: string | null
  source_url: string | null
  is_featured: boolean
  is_published: boolean
  review_date: string | null
  created_at: string
}

export interface GalleryItem {
  id: string
  title: string
  description: string | null
  before_image: string
  after_image: string
  service_type: string | null
  location: string | null
  project_date: string | null
  is_featured: boolean
  is_published: boolean
  sort_order: number
  created_at: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string | null
  service_id: string | null
  sort_order: number
  is_published: boolean
  created_at: string
}

export interface FormSubmission {
  id: string
  form_type: string
  first_name: string | null
  last_name: string | null
  email: string | null
  phone: string | null
  message: string | null
  service_interest: string | null
  preferred_contact: string | null
  source_page: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_content: string | null
  ghl_contact_id: string | null
  ip_address: string | null
  user_agent: string | null
  created_at: string
}

export interface SiteSetting {
  key: string
  value: Record<string, unknown>
  updated_at: string
}

// Database schema type for Supabase client
export interface Database {
  public: {
    Tables: {
      services: {
        Row: Service
        Insert: Omit<Service, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Service, 'id' | 'created_at' | 'updated_at'>>
      }
      locations: {
        Row: Location
        Insert: Omit<Location, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Location, 'id' | 'created_at' | 'updated_at'>>
      }
      service_locations: {
        Row: ServiceLocation
        Insert: Omit<ServiceLocation, 'id' | 'created_at'>
        Update: Partial<Omit<ServiceLocation, 'id' | 'created_at'>>
      }
      blog_posts: {
        Row: BlogPost
        Insert: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>>
      }
      testimonials: {
        Row: Testimonial
        Insert: Omit<Testimonial, 'id' | 'created_at'>
        Update: Partial<Omit<Testimonial, 'id' | 'created_at'>>
      }
      gallery_items: {
        Row: GalleryItem
        Insert: Omit<GalleryItem, 'id' | 'created_at'>
        Update: Partial<Omit<GalleryItem, 'id' | 'created_at'>>
      }
      faqs: {
        Row: FAQ
        Insert: Omit<FAQ, 'id' | 'created_at'>
        Update: Partial<Omit<FAQ, 'id' | 'created_at'>>
      }
      form_submissions: {
        Row: FormSubmission
        Insert: Omit<FormSubmission, 'id' | 'created_at'>
        Update: Partial<Omit<FormSubmission, 'id' | 'created_at'>>
      }
      site_settings: {
        Row: SiteSetting
        Insert: Omit<SiteSetting, 'updated_at'>
        Update: Partial<Omit<SiteSetting, 'updated_at'>>
      }
    }
  }
}
