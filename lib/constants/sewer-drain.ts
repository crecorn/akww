// Sewer & Drain services data
// Icons are stored as string names and mapped to Lucide components in client components

export const sewerDrainServicesData = [
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning for clogged sinks, tubs, and floor drains.',
    iconName: 'Droplets',
  },
  {
    slug: 'sewer-line-repair',
    title: 'Sewer Line Repair',
    description: 'Expert sewer line repair and replacement using trenchless technology.',
    iconName: 'Construction',
  },
  {
    slug: 'sewer-camera-inspection',
    title: 'Camera Inspection',
    description: 'Video camera inspection to locate blockages, cracks, and damage.',
    iconName: 'Video',
  },
  {
    slug: 'hydro-jetting',
    title: 'Hydro Jetting',
    description: 'High-pressure water jetting to clear stubborn clogs and buildup.',
    iconName: 'Waves',
  },
  {
    slug: 'root-removal',
    title: 'Root Removal',
    description: 'Remove tree roots infiltrating your sewer lines.',
    iconName: 'TreeDeciduous',
  },
  {
    slug: 'emergency',
    title: '24/7 Emergency',
    description: 'Immediate response for sewer backups, overflows, and drain emergencies.',
    iconName: 'Siren',
  },
] as const

export const sewerDrainSectionLinksData = [
  {
    name: 'Resources & Tips',
    href: '/sewer-drain/resources',
    iconName: 'BookOpen',
  },
  {
    name: 'Contact Us',
    href: '/sewer-drain/contact',
    iconName: 'Phone',
  },
] as const

export type SewerDrainService = typeof sewerDrainServicesData[number]
