// Emergency services data (water damage cleanup & mitigation)

export const emergencyServicesData = [
  {
    slug: 'water-damage',
    title: 'Water Damage Recovery',
    shortDescription: 'Complete water damage recovery services.',
    description: 'When water damage strikes, time is critical. Our emergency response team acts quickly to assess, mitigate, and recover your property. We work with insurance companies and handle everything from initial extraction to final repairs.',
    iconName: 'Waves',
    features: [
      'Emergency response 24/7',
      'Water damage assessment',
      'Structural drying',
      'Mold prevention treatment',
      'Content recovery',
      'Insurance claim assistance',
    ],
    benefits: [
      'Fast emergency response',
      'IICRC certified technicians',
      'Direct insurance billing',
      'Complete recovery services',
    ],
  },
  {
    slug: 'water-pump-out',
    title: 'Water Pump Out',
    shortDescription: 'Emergency water removal services.',
    description: 'Standing water causes damage every minute it remains. Our water pump out service uses powerful pumps and vacuums to remove water quickly from your home or business. We respond 24/7 to minimize damage and begin the drying process immediately.',
    iconName: 'Droplets',
    features: [
      'Rapid water removal',
      'Truck-mounted extraction',
      'Portable extraction units',
      'Carpet & pad extraction',
      'Hardwood floor drying',
      'Basement flooding response',
    ],
    benefits: [
      '60-minute response time',
      'Commercial-grade equipment',
      'Basement specialist',
      'Prevent secondary damage',
    ],
  },
  {
    slug: 'decontamination-services',
    title: 'Decontamination Services',
    shortDescription: 'Professional sanitization and decontamination.',
    description: 'After water damage, proper decontamination is essential to protect your health and property. Our decontamination services eliminate bacteria, mold spores, and other contaminants using professional-grade antimicrobial treatments and sanitization protocols.',
    iconName: 'Sparkles',
    features: [
      'Antimicrobial treatment',
      'Mold remediation',
      'Sewage cleanup',
      'Odor elimination',
      'Surface sanitization',
      'Air quality restoration',
    ],
    benefits: [
      'Health hazard elimination',
      'EPA-approved products',
      'Certified technicians',
      'Complete sanitization',
    ],
  },
  {
    slug: 'storm-damage-recovery',
    title: 'Storm Damage Recovery',
    shortDescription: 'Complete storm damage cleanup and recovery.',
    description: 'When severe weather strikes Northeast Ohio, AK Water Works is ready to help. Our storm damage recovery team handles everything from roof leaks and flooding to wind damage cleanup. We work quickly to secure your property and begin the recovery process.',
    iconName: 'CloudRain',
    features: [
      'Emergency tarping',
      'Flood water removal',
      'Wind damage cleanup',
      'Debris removal',
      'Structural drying',
      'Insurance documentation',
    ],
    benefits: [
      '24/7 storm response',
      'Insurance claim assistance',
      'Full property recovery',
      'Local emergency team',
    ],
  },
  {
    slug: 'burst-pipe-flooding',
    title: 'Burst Pipe Flooding',
    shortDescription: 'Emergency burst pipe response and cleanup.',
    description: 'A burst pipe can release hundreds of gallons of water per hour into your home. Our burst pipe flooding response team arrives fast to shut off the water, extract standing water, and begin structural drying before serious damage occurs.',
    iconName: 'Droplets',
    features: [
      'Emergency shutoff assistance',
      'Rapid water extraction',
      'Pipe repair coordination',
      'Structural drying',
      'Content protection',
      'Insurance documentation',
    ],
    benefits: [
      'Fast emergency response',
      'Minimize water damage',
      'Coordinate repairs',
      'Prevent mold growth',
    ],
  },
  {
    slug: 'fast-dry-air-movers',
    title: 'Fast Dry Air Movers',
    shortDescription: 'Professional structural drying equipment.',
    description: 'Proper drying is critical to preventing mold and structural damage after water intrusion. Our fast dry air mover service deploys commercial-grade air movers and dehumidifiers to thoroughly dry your property and restore safe moisture levels.',
    iconName: 'Wind',
    features: [
      'Commercial air movers',
      'Industrial dehumidifiers',
      'Moisture monitoring',
      'Structural drying',
      'Hardwood floor drying',
      'Wall cavity drying',
    ],
    benefits: [
      'Prevent mold growth',
      'Professional equipment',
      'Moisture verification',
      'Fast drying times',
    ],
  },
] as const

export const emergencySectionLinksData = [
  {
    name: 'Resources',
    href: '/emergencies/resources',
    iconName: 'BookOpen',
  },
  {
    name: 'Contact Us',
    href: '/emergencies/contact',
    iconName: 'Phone',
  },
] as const

// Legacy exports for backwards compatibility during migration
export const restorationServicesData = emergencyServicesData
export const restorationSectionLinksData = emergencySectionLinksData

export type EmergencyService = typeof emergencyServicesData[number]
export type RestorationService = EmergencyService
