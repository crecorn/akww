// Plumbing section data - shared between server and client components

export const plumbingServicesData = [
  {
    slug: 'water-heaters',
    name: 'Water Heaters',
    href: '/plumbing-services/water-heaters',
    iconName: 'Flame',
    description: 'Installation & repair',
  },
  {
    slug: 'pipe-repair',
    name: 'Pipe Repair & Repiping',
    href: '/plumbing-services/pipe-repair',
    iconName: 'Wrench',
    description: 'Leak repair & full repiping',
  },
  {
    slug: 'fixtures',
    name: 'Fixture Installation',
    href: '/plumbing-services/fixtures',
    iconName: 'Droplets',
    description: 'Faucets, toilets & more',
  },
  {
    slug: 'gas-lines',
    name: 'Gas Lines',
    href: '/plumbing-services/gas-lines',
    iconName: 'Zap',
    description: 'Safe gas line services',
  },
  {
    slug: 'water-treatment',
    name: 'Water Treatment',
    href: '/plumbing-services/water-treatment',
    iconName: 'Filter',
    description: 'Filtration & softeners',
  },
  {
    slug: 'emergency',
    name: '24/7 Emergency',
    href: '/plumbing-services/emergency',
    iconName: 'Siren',
    description: 'Immediate response',
  },
] as const

export const plumbingSectionLinksData = [
  {
    name: 'Resources & Tips',
    href: '/plumbing-services/resources',
    iconName: 'BookOpen',
  },
  {
    name: 'Contact Us',
    href: '/plumbing-services/contact',
    iconName: 'Phone',
  },
] as const

export type PlumbingService = typeof plumbingServicesData[number]
export type PlumbingSectionLink = typeof plumbingSectionLinksData[number]
