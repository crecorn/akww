export const siteConfig = {
  name: 'AK Water Works',
  legalName: 'AK Water Works Plumbing & Drain',
  description: 'Family-owned plumbing and waterproofing company serving Northeast Ohio and Western Pennsylvania. 24/7 emergency service.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://akwaterworks.net',
  
  // Contact
  phone: '(330) 574-1507',
  phoneRaw: '+13305741507',
  email: 'info@akwaterworks.net',
  
  // Address
  address: {
    street: '4248 N River Rd NE',
    city: 'Warren',
    state: 'OH',
    zip: '44484',
    full: '4248 N River Rd NE, Warren, OH 44484',
  },
  
  // Coordinates (Warren, OH)
  geo: {
    latitude: 41.2376,
    longitude: -80.8184,
  },

  // Service Area
  serviceCounties: [
    'Trumbull County',
    'Mahoning County', 
    'Portage County',
    'Ashtabula County',
    'Geauga County',
    'Summit County',
    'Mercer County (PA)',
  ],

  primaryCities: [
    'Warren',
    'Youngstown',
    'Boardman',
    'Niles',
    'Cortland',
    'Canfield',
    'Hermitage',
  ],

  // Reviews
  reviews: {
    rating: 4.7,
    count: 343,
    source: 'Birdeye',
  },

  // Social
  social: {
    facebook: 'https://facebook.com/akwaterworks',
    instagram: 'https://instagram.com/akwaterworks',
  },

  // Booking
  bookingUrl: 'https://book.housecallpro.com/book/AK-Water-Works-Plumbing--Drain/9528847bb0ad4fdba1553473b5d2dfca',

  // Trust Signals
  trustSignals: [
    'BBB A+ Accredited',
    '24/7 Emergency Service',
    'Family-Owned Since 2020',
    'Licensed, Bonded & Insured',
  ],

  // Business Hours
  hours: {
    emergency: '24/7',
    regular: 'Mon-Fri 8am-6pm',
  },

  // Founder
  founder: {
    name: 'Alexandros Mantalis',
    title: 'Owner',
  },

  // Mascot
  mascot: {
    name: 'Jack',
    description: 'Apricot miniature poodle in an AK cap',
  },
} as const

export type SiteConfig = typeof siteConfig
