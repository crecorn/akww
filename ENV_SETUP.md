# Environment Variables Setup

Create a file named `.env.local` in the project root with the following variables:

```env
# ===========================================
# SUPABASE
# ===========================================
# Get these from: https://supabase.com/dashboard/project/_/settings/api
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# ===========================================
# CLOUDINARY
# ===========================================
# Get these from: https://cloudinary.com/console
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=your-api-secret

# ===========================================
# GO HIGH LEVEL
# ===========================================
# Webhook URL from GHL Workflow > Inbound Webhook trigger
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...

# Tracking ID from GHL Settings > External Tracking
NEXT_PUBLIC_GHL_TRACKING_ID=tk_xxxxxxxx

# ===========================================
# GOOGLE
# ===========================================
# GA4 Measurement ID (starts with G-)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Google Ads Conversion ID (starts with AW-)
NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXXX

# Google Ads Conversion Label for form submissions
NEXT_PUBLIC_GADS_CONVERSION_LABEL=xxxxxxxxx

# ===========================================
# SITE
# ===========================================
# Production URL (no trailing slash)
NEXT_PUBLIC_SITE_URL=https://akwaterworks.net

# Revalidation secret for on-demand ISR
REVALIDATION_SECRET=your-random-secret-string
```

## Setup Steps

1. Copy the content above into a new file called `.env.local`
2. Fill in each value from the respective service dashboards
3. Never commit `.env.local` to git (it's already in .gitignore)
