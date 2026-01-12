// Restore services data (water damage & waterproofing)

export const restoreServicesData = [
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
  {
    slug: 'basement-waterproofing',
    title: 'Basement Waterproofing',
    shortDescription: 'Keep your basement permanently dry.',
    description: 'Stop basement water problems at their source. Our basement waterproofing solutions address both interior and exterior water intrusion, protecting your foundation and living space from moisture damage, mold, and structural issues.',
    iconName: 'Shield',
    features: [
      'Interior waterproofing systems',
      'Exterior waterproofing',
      'Foundation crack repair',
      'Sump pump installation',
      'Vapor barriers',
      'Window well drains',
    ],
    benefits: [
      'Lifetime transferable warranty',
      'Free basement inspection',
      'Financing available',
      'Local waterproofing experts',
    ],
  },
  {
    slug: 'basement-drainage',
    title: 'Basement Drainage',
    shortDescription: 'French drains and drainage systems.',
    description: 'Proper drainage is the key to a dry basement. We design and install interior French drain systems, floor drains, and channel systems that collect and redirect water before it can damage your basement.',
    iconName: 'ArrowDownToLine',
    features: [
      'Interior French drains',
      'Perimeter drain systems',
      'Floor drain installation',
      'Drain tile repair',
      'Sump basin installation',
      'Discharge line routing',
    ],
    benefits: [
      'Custom-designed systems',
      'Minimal disruption',
      'Long-lasting solutions',
      'Guaranteed results',
    ],
  },
  {
    slug: 'crawl-space-encapsulation',
    title: 'Crawl Space Encapsulation',
    shortDescription: 'Complete crawl space moisture control.',
    description: 'A damp crawl space affects your entire home with moisture, odors, and poor air quality. Our crawl space encapsulation service creates a complete moisture barrier, transforming your crawl space into a clean, dry, and healthy space.',
    iconName: 'Home',
    features: [
      'Heavy-duty vapor barriers',
      'Seam sealing & wall coverage',
      'Vent sealing',
      'Dehumidifier installation',
      'Sump pump systems',
      'Insulation options',
    ],
    benefits: [
      'Improved air quality',
      'Energy savings',
      'Pest prevention',
      'Structural protection',
    ],
  },
] as const

export const restoreSectionLinksData = [
  {
    name: 'Resources',
    href: '/restore/resources',
    iconName: 'BookOpen',
  },
  {
    name: 'Contact Us',
    href: '/restore/contact',
    iconName: 'Phone',
  },
] as const

export type RestoreService = typeof restoreServicesData[number]
