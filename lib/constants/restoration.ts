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
    slug: 'water-extraction',
    title: 'Water Pump Out & Clean Up',
    shortDescription: 'Emergency water removal services.',
    description: 'Standing water causes damage every minute it remains. Our water pump out and clean up service uses powerful pumps and vacuums to remove water quickly from your home or business. We respond 24/7 to minimize damage and begin the drying process immediately.',
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
