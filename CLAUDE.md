# AK Water Works - Claude Code Reference

## Project Overview

AK Water Works is a Next.js 16 website for a family-owned plumbing and waterproofing company serving Northeast Ohio and Western Pennsylvania. The site uses the App Router, Tailwind CSS v4, Supabase for backend, and Cloudinary for media.

**Business:** AK Water Works Plumbing & Drain
**Location:** 4248 N River Rd NE, Warren, OH 44484
**Phone:** (330) 574-1507
**Website:** https://akwaterworks.net

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **React:** 19.2.3
- **Styling:** Tailwind CSS v4 with `@tailwindcss/postcss`
- **Database:** Supabase
- **Media:** Cloudinary via `next-cloudinary`
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure

```
app/
├── (main)/              # Public marketing pages with shared layout
│   ├── about/           # About page
│   ├── agua-kare/       # Employee benefits program
│   ├── commercial/      # Commercial services
│   ├── contact/         # Contact page
│   ├── financing/       # Wisetack financing info
│   ├── plumbing-services/   # Plumbing service pages
│   ├── restoration/     # Water damage restoration services (emergency response)
│   ├── sewer-drain/     # Sewer & drain services
│   ├── waterproofing/   # Waterproofing services (preventive solutions)
│   └── satisfaction-guarantee/
├── admin/               # Admin dashboard (protected)
│   ├── (dashboard)/     # Dashboard pages
│   └── login/           # Admin login
├── api/
│   └── contact/         # Contact form API route
└── service-areas/       # County-specific landing pages
    ├── ashtabula-county/
    ├── mahoning-county/
    ├── portage-county/
    └── trumbull-county/

components/
├── admin/               # Admin UI components
├── commercial/          # Commercial section components
├── county/              # County page components
├── forms/               # Contact form, booking modal
├── marketing/           # Header, footer
├── plumbing/            # Plumbing section nav/CTAs
├── providers/           # React context providers
├── restoration/         # Restoration section components
├── seo/                 # JSON-LD, tracking scripts
├── sewer-drain/         # Sewer/drain section components
├── ui/                  # Shared UI components
└── waterproofing/       # Waterproofing section components

lib/
├── cloudinary/          # Cloudinary config
├── constants/           # Site config, service data
│   ├── site.ts          # Main site configuration
│   ├── counties.ts      # County/city data
│   ├── plumbing.ts      # Plumbing service definitions
│   ├── sewer-drain.ts   # Sewer service definitions
│   ├── waterproofing.ts # Waterproofing definitions
│   ├── restoration.ts   # Restoration definitions
│   └── commercial.ts    # Commercial service definitions
├── housecall-pro/       # HouseCall Pro API integration
├── supabase/            # Supabase client (client.ts, server.ts)
└── utils/
    └── cn.ts            # clsx + tailwind-merge utility
```

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Environment Variables

See `ENV_SETUP.md` for full list. Key variables:

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `GHL_WEBHOOK_URL` - Go High Level webhook for leads
- `NEXT_PUBLIC_GA4_ID` - Google Analytics 4 ID
- `NEXT_PUBLIC_SITE_URL` - Production URL

## Key Patterns

### Service Pages Structure
Each service category (plumbing, sewer-drain, waterproofing, restoration, commercial) follows:
- Main landing page at `/[category]/page.tsx`
- Individual service pages at `/[category]/[slug]/page.tsx`
- Shared layout with section navigation
- Contact sub-route at `/[category]/contact/`
- Resources sub-route at `/[category]/resources/`

### County Landing Pages
Service area pages at `/service-areas/[county]/` include:
- County overview page
- Service-specific sub-pages (plumbing, sewer-drain, waterproofing)
- County-specific contact page

### Component Organization
- Section-specific components in their own folders
- Shared UI in `components/ui/`
- Each section has `cta-buttons.tsx`, `section-nav.tsx`, and `index.ts` barrel file

### Site Configuration
Central config in `lib/constants/site.ts` exports `siteConfig` with:
- Business info (name, phone, email, address)
- Service areas and counties
- Review ratings
- Social links
- Booking URL (HouseCall Pro)

## Redirects

Extensive redirects in `next.config.ts` map old site URLs to new structure. Over 150 redirects handle legacy paths from previous website versions.

## Database

Supabase schema in `supabase/schema.sql`. Types in `types/database.ts`.

## External Integrations

- **HouseCall Pro:** Online booking (`lib/housecall-pro/`)
- **Go High Level:** Lead webhooks
- **Cloudinary:** Image/video hosting
- **Wisetack:** Customer financing
- **Google Analytics/Ads:** Tracking

## Notes

- Uses Next.js App Router exclusively (no pages directory)
- Tailwind v4 with PostCSS plugin (`postcss.config.mjs`)
- Images served from Cloudinary CDN
- Forms submit to `/api/contact` which forwards to GHL webhook
- Admin section uses Supabase Auth

## Service Categories

### Restoration (`/restoration`)
Emergency water damage services - reactive/recovery services:
- Water Damage Restoration
- Water Pump Out & Clean Up

### Waterproofing (`/waterproofing`)
Preventive basement and crawl space protection:
- Basement Waterproofing
- Basement Drainage
- Crawl Space Encapsulation
- Foundation Crack Repair
- Sump Pump Services
- Exterior Waterproofing
