// Restoration services data (water damage services only)

export const restorationServicesData = [
  {
    slug: 'water-damage-restoration',
    title: 'Water Damage Restoration',
    shortDescription: 'Complete water damage recovery services.',
    description: 'When water damage strikes, time is critical. Our water damage restoration team responds quickly to assess, mitigate, and restore your property. We work with insurance companies and handle everything from initial extraction to final repairs.',
    iconName: 'Droplets',
    features: [
      'Emergency response 24/7',
      'Water damage assessment',
      'Structural drying',
      'Mold prevention treatment',
      'Content restoration',
      'Insurance claim assistance',
    ],
    benefits: [
      'Fast emergency response',
      'IICRC certified technicians',
      'Direct insurance billing',
      'Complete restoration services',
    ],
  },
  {
    slug: 'water-extraction',
    title: 'Water Pump Out & Clean Up',
    shortDescription: 'Emergency water removal services.',
    description: 'Standing water causes damage every minute it remains. Our water pump out and clean up service uses powerful pumps and vacuums to remove water quickly from your home or business. We respond 24/7 to minimize damage and begin the drying process immediately.',
    iconName: 'Waves',
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
] as const

export const restorationSectionLinksData = [
  {
    name: 'Resources',
    href: '/restoration/resources',
    iconName: 'BookOpen',
  },
  {
    name: 'Contact Us',
    href: '/restoration/contact',
    iconName: 'Phone',
  },
] as const

export type RestorationService = typeof restorationServicesData[number]
