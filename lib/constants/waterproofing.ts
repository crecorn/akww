// Waterproofing section data - shared between server and client components

export const waterproofingServicesData = [
  {
    name: 'Basement Waterproofing',
    href: '/waterproofing/basement-waterproofing',
    iconName: 'Home',
    description: 'Interior & exterior solutions',
  },
  {
    name: 'Basement Drainage',
    href: '/waterproofing/basement-drainage',
    iconName: 'ArrowDownToLine',
    description: 'French drains & perimeter systems',
  },
  {
    name: 'Crawl Space Encapsulation',
    href: '/waterproofing/crawl-space-encapsulation',
    iconName: 'PenTool',
    description: 'Vapor barriers & drainage',
  },
  {
    name: 'Foundation Crack Repair',
    href: '/waterproofing/foundation-crack-repair',
    iconName: 'Shield',
    description: 'Wall & floor crack sealing',
  },
  {
    name: 'Sump Pump Services',
    href: '/waterproofing/sump-pump-services',
    iconName: 'Waves',
    description: 'Installation & repair',
  },
  {
    name: 'French Drains',
    href: '/waterproofing/french-drains',
    iconName: 'Droplets',
    description: 'Interior & exterior systems',
  },
] as const

export const sectionLinksData = [
  {
    name: 'Resources & Guides',
    href: '/waterproofing/resources',
    iconName: 'BookOpen',
  },
  {
    name: 'Get a Quote',
    href: '/waterproofing/contact',
    iconName: 'Phone',
  },
] as const

export type WaterproofingService = typeof waterproofingServicesData[number]
export type SectionLink = typeof sectionLinksData[number]
