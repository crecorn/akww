// County data for service area pages
// Each county has its own phone number for tracking and local content

export interface CountyData {
  slug: string
  name: string
  state: string
  phone: string
  phoneRaw: string
  cities: string[]
  townships: string[]
  description: string
  population?: string
  highlights: string[]
}

export const countiesData: Record<string, CountyData> = {
  'trumbull-county': {
    slug: 'trumbull-county',
    name: 'Trumbull County',
    state: 'OH',
    phone: '(330) 574-1507',
    phoneRaw: '+13305741507',
    cities: [
      'Warren',
      'Niles',
      'Cortland',
      'Girard',
      'Newton Falls',
      'Hubbard',
      'Lordstown',
      'McDonald',
      'Leavittsburg',
      'Champion',
    ],
    townships: [
      'Howland Township',
      'Liberty Township',
      'Bazetta Township',
      'Brookfield Township',
      'Champion Township',
      'Hartford Township',
      'Lordstown Township',
      'Weathersfield Township',
      'Vienna Township',
      'Warren Township',
    ],
    description: 'Trumbull County is our home base. Located in the heart of Northeast Ohio, we\'ve been serving Warren, Niles, Cortland, and surrounding communities since 2020. Our team knows the unique plumbing challenges of this area - from older homes in Warren\'s historic districts to new construction in Howland Township.',
    population: '197,974',
    highlights: [
      'Home base - fastest response times',
      'Serving the area since 2020',
      'Deep knowledge of local building codes',
      'Relationships with local inspectors',
    ],
  },
  'mahoning-county': {
    slug: 'mahoning-county',
    name: 'Mahoning County',
    state: 'OH',
    phone: '(330) 574-1508',
    phoneRaw: '+13305741508',
    cities: [
      'Youngstown',
      'Boardman',
      'Canfield',
      'Poland',
      'Struthers',
      'Campbell',
      'Austintown',
      'Sebring',
      'Lowellville',
      'Craig Beach',
    ],
    townships: [
      'Boardman Township',
      'Austintown Township',
      'Canfield Township',
      'Poland Township',
      'Jackson Township',
      'Milton Township',
      'Goshen Township',
      'Green Township',
      'Smith Township',
      'Springfield Township',
    ],
    description: 'We proudly serve Mahoning County including Youngstown, Boardman, Canfield, and surrounding areas. Whether you\'re in downtown Youngstown or the suburbs of Poland, our team provides fast, reliable plumbing and waterproofing services.',
    population: '228,683',
    highlights: [
      'Full coverage across the county',
      'Same-day service available',
      'Experienced with older Youngstown homes',
      'Commercial services for local businesses',
    ],
  },
  'portage-county': {
    slug: 'portage-county',
    name: 'Portage County',
    state: 'OH',
    phone: '(330) 574-1509',
    phoneRaw: '+13305741509',
    cities: [
      'Kent',
      'Ravenna',
      'Aurora',
      'Streetsboro',
      'Tallmadge',
      'Mogadore',
      'Garrettsville',
      'Windham',
      'Mantua',
      'Hiram',
    ],
    townships: [
      'Rootstown Township',
      'Ravenna Township',
      'Brimfield Township',
      'Franklin Township',
      'Shalersville Township',
      'Mantua Township',
      'Nelson Township',
      'Windham Township',
      'Edinburg Township',
      'Freedom Township',
    ],
    description: 'Serving Portage County from Kent to Ravenna and everywhere in between. Home to Kent State University and a mix of suburban and rural communities, we understand the diverse plumbing needs throughout the county.',
    population: '161,791',
    highlights: [
      'Serving Kent State area',
      'Rural and suburban expertise',
      'Well and septic services',
      'Fast response from nearby base',
    ],
  },
  'ashtabula-county': {
    slug: 'ashtabula-county',
    name: 'Ashtabula County',
    state: 'OH',
    phone: '(330) 574-1510',
    phoneRaw: '+13305741510',
    cities: [
      'Ashtabula',
      'Geneva',
      'Conneaut',
      'Jefferson',
      'Andover',
      'Rock Creek',
      'Orwell',
      'Roaming Shores',
      'Geneva-on-the-Lake',
      'North Kingsville',
    ],
    townships: [
      'Ashtabula Township',
      'Geneva Township',
      'Saybrook Township',
      'Plymouth Township',
      'Jefferson Township',
      'Austinburg Township',
      'Harpersfield Township',
      'Kingsville Township',
      'Monroe Township',
      'Trumbull Township',
    ],
    description: 'From the shores of Lake Erie to the covered bridges of the Ashtabula countryside, we provide complete plumbing and waterproofing services throughout Ohio\'s largest county by land area.',
    population: '97,241',
    highlights: [
      'Lake Erie waterfront expertise',
      'Covered bridge country service',
      'Seasonal home winterization',
      'Well and septic specialists',
    ],
  },
}

// Helper to get county by slug
export function getCountyBySlug(slug: string): CountyData | undefined {
  return countiesData[slug]
}

// Get all county slugs for static generation
export function getAllCountySlugs(): string[] {
  return Object.keys(countiesData)
}

// Get counties by state
export function getCountiesByState(state: 'OH' | 'PA'): CountyData[] {
  return Object.values(countiesData).filter(county => county.state === state)
}
