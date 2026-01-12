-- ===========================================
-- AK WATER WORKS - DATABASE SCHEMA
-- ===========================================
-- Run this SQL in Supabase SQL Editor to create all tables

-- ===========================================
-- SERVICES TABLE
-- ===========================================
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('plumbing', 'waterproofing', 'water-damage', 'commercial')),
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  h1 TEXT,
  intro_text TEXT,
  content TEXT,
  hero_image TEXT,
  icon TEXT,
  features TEXT[], -- Array of feature bullet points
  sort_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ===========================================
-- LOCATIONS TABLE
-- ===========================================
CREATE TABLE IF NOT EXISTS locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  city TEXT NOT NULL,
  county TEXT NOT NULL,
  state TEXT DEFAULT 'OH',
  zip_codes TEXT[],
  meta_title TEXT,
  meta_description TEXT,
  h1 TEXT,
  intro_text TEXT,
  content TEXT,
  local_content TEXT,
  hero_image TEXT,
  population INTEGER,
  is_primary BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ===========================================
-- SERVICE-LOCATION JUNCTION TABLE
-- ===========================================
CREATE TABLE IF NOT EXISTS service_locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  location_id UUID REFERENCES locations(id) ON DELETE CASCADE,
  custom_content TEXT,
  custom_meta_title TEXT,
  custom_meta_description TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(service_id, location_id)
);

-- ===========================================
-- BLOG POSTS TABLE
-- ===========================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  category TEXT,
  tags TEXT[],
  author TEXT DEFAULT 'AK Water Works',
  read_time INTEGER, -- in minutes
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ===========================================
-- TESTIMONIALS TABLE
-- ===========================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_location TEXT,
  service_type TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  source TEXT,
  source_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  review_date DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===========================================
-- GALLERY ITEMS TABLE (Before/After)
-- ===========================================
CREATE TABLE IF NOT EXISTS gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  before_image TEXT NOT NULL,
  after_image TEXT NOT NULL,
  service_type TEXT,
  location TEXT,
  project_date DATE,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===========================================
-- FAQS TABLE
-- ===========================================
CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  service_id UUID REFERENCES services(id) ON DELETE SET NULL,
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===========================================
-- FORM SUBMISSIONS TABLE
-- ===========================================
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  service_interest TEXT,
  preferred_contact TEXT,
  source_page TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  ghl_contact_id TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===========================================
-- SITE SETTINGS TABLE
-- ===========================================
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ===========================================
-- INSERT DEFAULT SETTINGS
-- ===========================================
INSERT INTO site_settings (key, value) VALUES
  ('company', '{
    "name": "AK Water Works",
    "phone": "(330) 574-1507",
    "email": "info@akwaterworks.net",
    "address": {
      "street": "4248 N River Rd NE",
      "city": "Warren",
      "state": "OH",
      "zip": "44484"
    }
  }'::jsonb),
  ('social', '{
    "facebook": "https://facebook.com/akwaterworks",
    "instagram": "https://instagram.com/akwaterworks"
  }'::jsonb),
  ('tracking', '{
    "ga4_id": "",
    "gads_id": "",
    "ghl_tracking_id": ""
  }'::jsonb),
  ('reviews', '{
    "count": 343,
    "rating": 4.7,
    "source": "Birdeye"
  }'::jsonb)
ON CONFLICT (key) DO NOTHING;

-- ===========================================
-- ROW LEVEL SECURITY (RLS)
-- ===========================================

-- Enable RLS on all tables
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies for published content
CREATE POLICY "Public read published services" ON services
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read published locations" ON locations
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read published service_locations" ON service_locations
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read published blog_posts" ON blog_posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read published testimonials" ON testimonials
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read published gallery_items" ON gallery_items
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read published faqs" ON faqs
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read site_settings" ON site_settings
  FOR SELECT USING (true);

-- Anyone can submit forms
CREATE POLICY "Anyone can submit forms" ON form_submissions
  FOR INSERT WITH CHECK (true);

-- Admin full access (authenticated users)
CREATE POLICY "Admins full access services" ON services
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access locations" ON locations
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access service_locations" ON service_locations
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access blog_posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access testimonials" ON testimonials
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access gallery_items" ON gallery_items
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access faqs" ON faqs
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access form_submissions" ON form_submissions
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access site_settings" ON site_settings
  FOR ALL USING (auth.role() = 'authenticated');

-- ===========================================
-- TRIGGERS FOR UPDATED_AT
-- ===========================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER locations_updated_at
  BEFORE UPDATE ON locations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER site_settings_updated_at
  BEFORE UPDATE ON site_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ===========================================
-- INDEXES FOR PERFORMANCE
-- ===========================================
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_published ON services(is_published);

CREATE INDEX IF NOT EXISTS idx_locations_county ON locations(county);
CREATE INDEX IF NOT EXISTS idx_locations_city ON locations(city);
CREATE INDEX IF NOT EXISTS idx_locations_slug ON locations(slug);
CREATE INDEX IF NOT EXISTS idx_locations_published ON locations(is_published);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);

CREATE INDEX IF NOT EXISTS idx_testimonials_service_type ON testimonials(service_type);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured);

CREATE INDEX IF NOT EXISTS idx_faqs_category ON faqs(category);
CREATE INDEX IF NOT EXISTS idx_faqs_service_id ON faqs(service_id);

CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON form_submissions(form_type);

-- ===========================================
-- SEED DATA: SERVICES
-- ===========================================
INSERT INTO services (slug, category, title, h1, intro_text, is_published, sort_order) VALUES
  ('plumbing-repair', 'plumbing', 'Plumbing Repair Services', 'Residential Plumbing Repair', 'Professional plumbing repair services for homes throughout Northeast Ohio.', true, 1),
  ('water-heater', 'plumbing', 'Water Heater Service', 'Water Heater Repair & Replacement', 'Expert water heater installation, repair, and replacement services.', true, 2),
  ('drain-cleaning', 'plumbing', 'Drain Cleaning', 'Professional Drain Cleaning Services', 'Fast, effective drain cleaning to keep your pipes flowing.', true, 3),
  ('sewer-line-repair', 'plumbing', 'Sewer Line Repair', 'Sewer Line Repair & Replacement', 'Complete sewer line services including repair, replacement, and inspection.', true, 4),
  ('basement-waterproofing', 'waterproofing', 'Basement Waterproofing', 'Basement Waterproofing Services', 'Keep your basement dry with our professional waterproofing solutions.', true, 1),
  ('foundation-crack-repair', 'waterproofing', 'Foundation Crack Repair', 'Foundation & Wall Crack Repair', 'Expert foundation crack repair to protect your home.', true, 2),
  ('sump-pump', 'waterproofing', 'Sump Pump Services', 'Sump Pump Installation & Repair', 'Reliable sump pump services to prevent basement flooding.', true, 3),
  ('crawl-space', 'waterproofing', 'Crawl Space Encapsulation', 'Crawl Space Vapor Barriers', 'Protect your crawl space with professional encapsulation.', true, 4)
ON CONFLICT (slug) DO NOTHING;

-- ===========================================
-- SEED DATA: PRIMARY LOCATIONS
-- ===========================================
INSERT INTO locations (slug, city, county, state, is_primary, is_published, sort_order) VALUES
  ('warren-oh', 'Warren', 'Trumbull County', 'OH', true, true, 1),
  ('youngstown-oh', 'Youngstown', 'Mahoning County', 'OH', true, true, 2),
  ('boardman-oh', 'Boardman', 'Mahoning County', 'OH', true, true, 3),
  ('niles-oh', 'Niles', 'Trumbull County', 'OH', false, true, 4),
  ('cortland-oh', 'Cortland', 'Trumbull County', 'OH', false, true, 5),
  ('canfield-oh', 'Canfield', 'Mahoning County', 'OH', false, true, 6),
  ('hermitage-pa', 'Hermitage', 'Mercer County', 'PA', false, true, 7)
ON CONFLICT (slug) DO NOTHING;

-- ===========================================
-- SEED DATA: SAMPLE TESTIMONIALS
-- ===========================================
INSERT INTO testimonials (customer_name, customer_location, service_type, rating, content, source, is_featured) VALUES
  ('John D.', 'Warren, OH', 'plumbing', 5, 'AK Water Works was amazing! They came out same day and fixed our burst pipe quickly. Professional and fairly priced.', 'Google', true),
  ('Sarah M.', 'Boardman, OH', 'waterproofing', 5, 'After years of dealing with a wet basement, AK Water Works finally solved our problem. Highly recommend!', 'Google', true),
  ('Mike R.', 'Youngstown, OH', 'plumbing', 5, 'Great emergency service. They were here within an hour and had our water heater replaced the same day.', 'Facebook', true)
ON CONFLICT DO NOTHING;

-- ===========================================
-- SEED DATA: SAMPLE FAQS
-- ===========================================
INSERT INTO faqs (question, answer, category, sort_order) VALUES
  ('Do you offer 24/7 emergency service?', 'Yes! AK Water Works provides 24/7 emergency plumbing service throughout Northeast Ohio and Western Pennsylvania. Call us anytime at (330) 574-1507.', 'general', 1),
  ('What areas do you serve?', 'We serve Trumbull, Mahoning, Portage, Ashtabula, Geauga, and Summit counties in Ohio, as well as Mercer County in Pennsylvania.', 'general', 2),
  ('How much does basement waterproofing cost?', 'Basement waterproofing costs vary based on the size of your basement and the severity of the water issue. We offer free estimates to provide an accurate quote for your specific situation.', 'waterproofing', 1),
  ('How do I know if I need a new water heater?', 'Signs you may need a new water heater include: age over 10 years, rusty water, strange noises, leaks around the base, or inconsistent hot water. We can inspect your unit and recommend the best solution.', 'plumbing', 1)
ON CONFLICT DO NOTHING;
