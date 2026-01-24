// Commercial services data

export const commercialServicesData = [
  {
    slug: 'new-construction',
    title: 'New Construction',
    shortDescription: 'Complete plumbing solutions for new commercial builds.',
    description: 'From ground-up construction to tenant build-outs, we provide comprehensive plumbing installation services for new commercial projects. Our team works directly with contractors and project managers to ensure code compliance and timely completion.',
    iconName: 'Building2',
    features: [
      'Ground-up plumbing installation',
      'Tenant build-outs',
      'Code compliance expertise',
      'Project coordination',
      'Blueprint review & planning',
      'Multi-story building systems',
    ],
    benefits: [
      'Licensed commercial plumbers',
      'On-time project completion',
      'Competitive commercial pricing',
      'Full permit handling',
    ],
  },
  {
    slug: 'municipal',
    title: 'Municipal',
    shortDescription: 'Government facility plumbing and infrastructure.',
    description: 'We serve local government facilities, schools, parks, and public buildings throughout Northeast Ohio. Our municipal plumbing services ensure reliable water and sewer systems for the communities we serve.',
    iconName: 'Landmark',
    features: [
      'School & university plumbing',
      'Government building maintenance',
      'Park facility services',
      'Water system management',
      'Backflow prevention',
      'ADA compliance upgrades',
    ],
    benefits: [
      'Government contract experience',
      'Background-checked technicians',
      'Flexible scheduling',
      'Emergency response capability',
    ],
  },
  {
    slug: 'industrial',
    title: 'Industrial',
    shortDescription: 'Manufacturing and industrial facility plumbing.',
    description: 'Our industrial plumbing team handles the demanding requirements of manufacturing plants, warehouses, and industrial facilities. We understand the critical nature of keeping your operations running smoothly.',
    iconName: 'Factory',
    features: [
      'Process piping systems',
      'High-volume water systems',
      'Industrial drain cleaning',
      'Grease trap services',
      'Compressed air systems',
      'Preventive maintenance programs',
    ],
    benefits: [
      'Minimal production disruption',
      'OSHA-compliant practices',
      '24/7 service availability',
      'Custom maintenance plans',
    ],
  },
  {
    slug: 'emergency',
    title: '24/7 Emergency',
    shortDescription: 'Round-the-clock emergency commercial services.',
    description: 'Business emergencies don\'t wait for regular hours. Our 24/7 commercial emergency service ensures your business gets immediate attention for burst pipes, major leaks, sewer backups, and other urgent plumbing issues.',
    iconName: 'Siren',
    features: [
      'Immediate dispatch',
      'Burst pipe response',
      'Flooding mitigation',
      'Sewer backup cleanup',
      'Water damage prevention',
      'Temporary repairs',
    ],
    benefits: [
      'Average 60-minute response',
      'No overtime charges for emergencies',
      'Direct communication',
      'Insurance documentation',
    ],
  },
  {
    slug: 'restaurant-plumbing',
    title: 'Restaurant Plumbing',
    shortDescription: 'Specialized plumbing for restaurants and food service.',
    description: 'Restaurants have unique plumbing demands from grease traps to high-volume drains. Our restaurant plumbing specialists understand health code requirements and work around your schedule to minimize business disruption.',
    iconName: 'UtensilsCrossed',
    features: [
      'Grease trap installation & cleaning',
      'Commercial kitchen plumbing',
      'Floor drain maintenance',
      'Dishwasher hookups',
      'Bar sink installations',
      'Health code compliance',
    ],
    benefits: [
      'Food service specialists',
      'Flexible scheduling',
      'Health department compliant',
      'Fast response times',
    ],
  },
  {
    slug: 'plumbing-maintenance',
    title: 'Plumbing Maintenance',
    shortDescription: 'Preventive maintenance programs for commercial properties.',
    description: 'Prevent costly emergency repairs with our commercial plumbing maintenance programs. Regular inspections, drain cleaning, and preventive repairs keep your business running smoothly and avoid unexpected downtime.',
    iconName: 'Wrench',
    features: [
      'Scheduled inspections',
      'Preventive drain cleaning',
      'Water heater maintenance',
      'Fixture inspections',
      'Leak detection',
      'Priority emergency service',
    ],
    benefits: [
      'Reduce emergency calls',
      'Extend equipment life',
      'Budget predictability',
      'Priority scheduling',
    ],
  },
] as const

export const commercialSectionLinksData = [
  {
    name: 'Resources',
    href: '/commercial/resources',
    iconName: 'BookOpen',
  },
  {
    name: 'Contact Us',
    href: '/commercial/contact',
    iconName: 'Phone',
  },
] as const

export type CommercialService = typeof commercialServicesData[number]
