import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  
  async redirects() {
    return [
      // ============================================
      // CORE PAGES
      // ============================================
      {
        source: '/ak-water-works',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/ak-water-works/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/ak-water-works/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/ak-water-works/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/ak-water-works/about-us/career',
        destination: '/about/careers',
        permanent: true,
      },
      {
        source: '/ak-water-works/about-us/career/',
        destination: '/about/careers',
        permanent: true,
      },
      {
        source: '/ak-water-works/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/ak-water-works/book-a-plumber',
        destination: 'https://book.housecallpro.com/book/AK-Water-Works-Plumbing--Drain/9528847bb0ad4fdba1553473b5d2dfca',
        permanent: true,
      },
      {
        source: '/ak-water-works/reviewus',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/ak-water-works/discounts',
        destination: '/specials',
        permanent: true,
      },
      {
        source: '/discounts',
        destination: '/specials',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },

      // ============================================
      // PHONE NUMBER REDIRECTS
      // ============================================
      {
        source: '/330-574-1507',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/tel:330-574-1507',
        destination: '/contact',
        permanent: true,
      },

      // ============================================
      // PLUMBING SERVICES
      // ============================================
      {
        source: '/services/plumbing-services',
        destination: '/plumbing-services',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/',
        destination: '/plumbing-services',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/all-plumbing-services',
        destination: '/plumbing-services',
        permanent: true,
      },
      {
        source: '/plumbing-services/',
        destination: '/plumbing-services',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/water-heater-service',
        destination: '/plumbing-services/water-heater',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/tankless-water-heater',
        destination: '/plumbing-services/tankless-water-heater',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/gas-plumbing-repair-and-installation',
        destination: '/plumbing-services/gas-plumbing',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/frozen-pipe-repair-service',
        destination: '/plumbing-services/frozen-pipe-repair',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/plumbing-repair',
        destination: '/plumbing-services/plumbing-repair',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/professional-plumbing-fixture-installation',
        destination: '/plumbing-services/fixture-installation',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/backflow-testing-plumber',
        destination: '/plumbing-services/backflow-testing',
        permanent: true,
      },
      {
        source: '/services/plumbing-services/well-pump-installation-service',
        destination: '/plumbing-services/well-pump',
        permanent: true,
      },

      // ============================================
      // SEWER & DRAIN SERVICES
      // ============================================
      {
        source: '/services/sewer-drain-services',
        destination: '/plumbing-services/sewer-drain',
        permanent: true,
      },
      {
        source: '/services/sewer-drain-services/',
        destination: '/plumbing-services/sewer-drain',
        permanent: true,
      },
      {
        source: '/services/sewer-drain-services/all-sewer-and-drain-services',
        destination: '/plumbing-services/sewer-drain',
        permanent: true,
      },
      {
        source: '/sewer-drain-services/',
        destination: '/plumbing-services/sewer-drain',
        permanent: true,
      },
      {
        source: '/services/sewer-drain-services/drain-unclog-service',
        destination: '/plumbing-services/drain-cleaning',
        permanent: true,
      },
      {
        source: '/services/sewer-drain-services/hydro-jetting-drain-cleaning-service',
        destination: '/plumbing-services/hydro-jetting',
        permanent: true,
      },
      {
        source: '/services/sewer-drain-services/sewer-line-repair-and-replacement',
        destination: '/plumbing-services/sewer-line-repair',
        permanent: true,
      },
      {
        source: '/services/sewer-drain-services/clogged-main-sewer-lines',
        destination: '/plumbing-services/main-sewer-line',
        permanent: true,
      },
      {
        source: '/services/sewer-drain-services/storm-drain-installation-services',
        destination: '/plumbing-services/storm-drain',
        permanent: true,
      },

      // ============================================
      // WATERPROOFING SERVICES
      // ============================================
      {
        source: '/services/waterproofing',
        destination: '/waterproofing',
        permanent: true,
      },
      {
        source: '/services/waterproofing/',
        destination: '/waterproofing',
        permanent: true,
      },
      {
        source: '/services/waterproofing/all-foundation-waterproof-services',
        destination: '/waterproofing',
        permanent: true,
      },
      {
        source: '/waterproofing/',
        destination: '/waterproofing',
        permanent: true,
      },
      {
        source: '/services/waterproofing/basement-waterproofing-service',
        destination: '/waterproofing/basement-waterproofing',
        permanent: true,
      },
      {
        source: '/services/waterproofing/basement-waterproofing-service/',
        destination: '/waterproofing/basement-waterproofing',
        permanent: true,
      },
      {
        source: '/services/waterproofing/basement-wall-crack-repair',
        destination: '/waterproofing/foundation-crack-repair',
        permanent: true,
      },
      {
        source: '/services/waterproofing/crawl-space-vapor-barriers',
        destination: '/waterproofing/crawl-space',
        permanent: true,
      },
      {
        source: '/services/waterproofing/sump-pump-services',
        destination: '/waterproofing/sump-pump',
        permanent: true,
      },
      {
        source: '/services/waterproofing/sump-pump-service',
        destination: '/waterproofing/sump-pump',
        permanent: true,
      },

      // ============================================
      // RESTORATION → EMERGENCIES REDIRECTS
      // ============================================
      {
        source: '/restoration',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/restoration/',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/restoration/water-damage-restoration',
        destination: '/emergencies/water-damage',
        permanent: true,
      },
      {
        source: '/restoration/water-extraction',
        destination: '/emergencies/water-extraction',
        permanent: true,
      },
      {
        source: '/restoration/contact',
        destination: '/emergencies/contact',
        permanent: true,
      },
      {
        source: '/restoration/resources',
        destination: '/emergencies/resources',
        permanent: true,
      },
      // Old /restore paths → new /emergencies hub
      {
        source: '/restore',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/restore/',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/restore/water-damage-restoration',
        destination: '/emergencies/water-damage',
        permanent: true,
      },
      {
        source: '/restore/water-extraction',
        destination: '/emergencies/water-extraction',
        permanent: true,
      },
      {
        source: '/restore/contact',
        destination: '/emergencies/contact',
        permanent: true,
      },
      {
        source: '/restore/resources',
        destination: '/emergencies/resources',
        permanent: true,
      },
      // Old waterproofing pages from /restore → new /waterproofing hub
      {
        source: '/restore/basement-waterproofing',
        destination: '/waterproofing/basement-waterproofing',
        permanent: true,
      },
      {
        source: '/restore/basement-drainage',
        destination: '/waterproofing/basement-drainage',
        permanent: true,
      },
      {
        source: '/restore/crawl-space-encapsulation',
        destination: '/waterproofing/crawl-space-encapsulation',
        permanent: true,
      },

      // ============================================
      // WATER DAMAGE SERVICES → EMERGENCIES
      // ============================================
      {
        source: '/services/water-damage',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/services/water-damage/',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/services/water-damage/all-water-damage-restoration-services',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/water-damage',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/water-damage/',
        destination: '/emergencies',
        permanent: true,
      },
      {
        source: '/services/water-damage/water-damage-restoration-services',
        destination: '/emergencies/water-damage',
        permanent: true,
      },
      {
        source: '/services/water-damage/emergency-water-clean-up-services',
        destination: '/emergencies/water-extraction',
        permanent: true,
      },
      {
        source: '/services/water-damage/commercial-water-damage-restoration',
        destination: '/commercial/emergency',
        permanent: true,
      },

      // ============================================
      // COMMERCIAL PLUMBING
      // ============================================
      {
        source: '/services/commercial-plumbing',
        destination: '/commercial-plumbing',
        permanent: true,
      },
      {
        source: '/services/commercial-plumbing/',
        destination: '/commercial-plumbing',
        permanent: true,
      },
      {
        source: '/services/commercial-plumbing/all-commercial-plumbing-services',
        destination: '/commercial-plumbing',
        permanent: true,
      },
      {
        source: '/commercial-plumbing/',
        destination: '/commercial-plumbing',
        permanent: true,
      },
      {
        source: '/services/commercial-plumbing/business-plumbing-services',
        destination: '/commercial-plumbing',
        permanent: true,
      },
      {
        source: '/services/commercial-plumbing/plumbing-for-property-managers',
        destination: '/commercial-plumbing/property-managers',
        permanent: true,
      },
      {
        source: '/services/commercial-plumbing/restaurant-plumbing-services',
        destination: '/commercial-plumbing/restaurants',
        permanent: true,
      },
      {
        source: '/services/commercial-plumbing/commercial-backflow-services',
        destination: '/commercial-plumbing/backflow-testing',
        permanent: true,
      },
      {
        source: '/services/commercial-plumbing/commercial-new-construction',
        destination: '/commercial-plumbing/new-construction',
        permanent: true,
      },

      // ============================================
      // WATER PROBLEM / SPECIALTY SERVICES
      // ============================================
      {
        source: '/services/water-problem',
        destination: '/plumbing-services/specialty',
        permanent: true,
      },
      {
        source: '/services/water-problem/',
        destination: '/plumbing-services/specialty',
        permanent: true,
      },
      {
        source: '/services/water-problem/all-plumbing-specialty-services',
        destination: '/plumbing-services/specialty',
        permanent: true,
      },
      {
        source: '/water-problem/',
        destination: '/plumbing-services/specialty',
        permanent: true,
      },
      {
        source: '/services/water-problem/water-softner',
        destination: '/plumbing-services/water-softener',
        permanent: true,
      },
      {
        source: '/services/water-problem/well-pump-services',
        destination: '/plumbing-services/well-pump',
        permanent: true,
      },
      {
        source: '/services/water-problem/kitchen-and-bath-remodeling',
        destination: '/plumbing-services/bathroom-remodeling',
        permanent: true,
      },

      // ============================================
      // EMERGENCY SERVICES
      // ============================================
      {
        source: '/services/emergency-plumbing-services',
        destination: '/emergency-plumbing',
        permanent: true,
      },
      {
        source: '/services/emergency-plumbing-services/',
        destination: '/emergency-plumbing',
        permanent: true,
      },
      {
        source: '/emergency-plumbing-services',
        destination: '/emergency-plumbing',
        permanent: true,
      },

      // ============================================
      // SERVICES HUB (redirect trailing slash only)
      // ============================================
      {
        source: '/services/',
        destination: '/plumbing-services',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/plumbing-services',
        permanent: true,
      },

      // ============================================
      // SERVICE AREAS - COUNTY PAGES
      // ============================================
      {
        source: '/service-area',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/service-area/',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio',
        destination: '/service-areas/trumbull-county',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio',
        destination: '/service-areas/mahoning-county',
        permanent: true,
      },
      {
        source: '/service-area/ashtabula-county-ohio',
        destination: '/service-areas/ashtabula-county',
        permanent: true,
      },
      {
        source: '/service-area/ashtabula-county-ohio/',
        destination: '/service-areas/ashtabula-county',
        permanent: true,
      },
      {
        source: '/service-area/plumber-mercer-county-pa',
        destination: '/service-areas/mercer-county-pa',
        permanent: true,
      },
      {
        source: '/service-area/plumber-mercer-county-pa/',
        destination: '/service-areas/mercer-county-pa',
        permanent: true,
      },
      {
        source: '/service-area/summit-county',
        destination: '/service-areas/summit-county',
        permanent: true,
      },
      {
        source: '/service-area/summit-county/',
        destination: '/service-areas/summit-county',
        permanent: true,
      },

      // ============================================
      // TRUMBULL COUNTY CITIES
      // ============================================
      {
        source: '/service-area/trumbull-county-ohio/plumber-warren-ohio',
        destination: '/service-areas/warren-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-cortland-ohio',
        destination: '/service-areas/cortland-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-niles-ohio',
        destination: '/service-areas/niles-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-girard-ohio',
        destination: '/service-areas/girard-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-hubbard-ohio',
        destination: '/service-areas/hubbard-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-howland-ohio',
        destination: '/service-areas/howland-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-liberty-ohio',
        destination: '/service-areas/liberty-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-lordstown-ohio',
        destination: '/service-areas/lordstown-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-newton-falls-ohio',
        destination: '/service-areas/newton-falls-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-kinsman-ohio',
        destination: '/service-areas/kinsman-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-vernon-ohio',
        destination: '/service-areas/vernon-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-gustavus-ohio',
        destination: '/service-areas/gustavus-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-bristolville-ohio',
        destination: '/service-areas/bristolville-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-north-bloomfield-ohio',
        destination: '/service-areas/north-bloomfield-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-champion-heights-ohio',
        destination: '/service-areas/champion-heights-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-vienna-center-ohio',
        destination: '/service-areas/vienna-center-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-north-benton-ohio',
        destination: '/service-areas/north-benton-oh',
        permanent: true,
      },
      {
        source: '/service-area/trumbull-county-ohio/plumber-west-farmington-ohio',
        destination: '/service-areas/west-farmington-oh',
        permanent: true,
      },

      // ============================================
      // MAHONING COUNTY CITIES
      // ============================================
      {
        source: '/service-area/mahoning-county-ohio/plumber-youngstown-ohio',
        destination: '/service-areas/youngstown-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-boardman-ohio',
        destination: '/service-areas/boardman-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-canfield-ohio',
        destination: '/service-areas/canfield-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-poland-ohio',
        destination: '/service-areas/poland-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-austintown-ohio',
        destination: '/service-areas/austintown-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-struthers-ohio',
        destination: '/service-areas/struthers-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-campbell-ohio',
        destination: '/service-areas/campbell-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-sebring-ohio',
        destination: '/service-areas/sebring-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-lake-milton-ohio',
        destination: '/service-areas/lake-milton-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-greenford-ohio',
        destination: '/service-areas/greenford-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-craig-beach-ohio',
        destination: '/service-areas/craig-beach-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-north-lima-ohio',
        destination: '/service-areas/north-lima-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-patmos-ohio',
        destination: '/service-areas/patmos-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-petersburg-ohio',
        destination: '/service-areas/petersburg-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-north-jackson-ohio',
        destination: '/service-areas/north-jackson-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-ellsworth-ohio',
        destination: '/service-areas/ellsworth-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-new-middletown-ohio',
        destination: '/service-areas/new-middletown-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-berlin-center-ohio',
        destination: '/service-areas/berlin-center-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-willow-crest-ohio',
        destination: '/service-areas/willow-crest-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-damascus-ohio',
        destination: '/service-areas/damascus-oh',
        permanent: true,
      },
      {
        source: '/service-area/mahoning-county-ohio/plumber-new-springfield-ohio',
        destination: '/service-areas/new-springfield-oh',
        permanent: true,
      },

      // ============================================
      // SUMMIT COUNTY CITIES
      // ============================================
      {
        source: '/service-area/summit-county/plumber-akron-oh',
        destination: '/service-areas/akron-oh',
        permanent: true,
      },
      {
        source: '/service-area/summit-county/plumber-cuyahoga-falls-oh',
        destination: '/service-areas/cuyahoga-falls-oh',
        permanent: true,
      },
      {
        source: '/service-area/summit-county/plumbing-barberton-oh',
        destination: '/service-areas/barberton-oh',
        permanent: true,
      },
      {
        source: '/service-area/summit-county/plumber-stow-oh',
        destination: '/service-areas/stow-oh',
        permanent: true,
      },
      {
        source: '/service-area/summit-county/plumber-twinsburg-oh',
        destination: '/service-areas/twinsburg-oh',
        permanent: true,
      },
      {
        source: '/service-area/summit-county/plumbing-hudson-oh',
        destination: '/service-areas/hudson-oh',
        permanent: true,
      },
      {
        source: '/service-area/summit-county/plumbing-green-oh',
        destination: '/service-areas/green-oh',
        permanent: true,
      },
      {
        source: '/service-area/summit-county/plumber-tallmadge-oh',
        destination: '/service-areas/tallmadge-oh',
        permanent: true,
      },

      // ============================================
      // MERCER COUNTY PA CITIES
      // ============================================
      {
        source: '/service-area/plumber-mercer-county-pa/plumber-hermitage-pa',
        destination: '/service-areas/hermitage-pa',
        permanent: true,
      },
      {
        source: '/service-area/plumber-mercer-county-pa/plumber-sharon-pa',
        destination: '/service-areas/sharon-pa',
        permanent: true,
      },
      {
        source: '/service-area/plumber-mercer-county-pa/plumber-farrell-pa',
        destination: '/service-areas/farrell-pa',
        permanent: true,
      },
      {
        source: '/service-area/plumber-mercer-county-pa/plumber-grove-city-pa',
        destination: '/service-areas/grove-city-pa',
        permanent: true,
      },
      {
        source: '/service-area/plumber-mercer-county-pa/plumber-mercer-pa',
        destination: '/service-areas/mercer-pa',
        permanent: true,
      },
      {
        source: '/service-area/plumber-mercer-county-pa/plumber-west-middlesex,-pa',
        destination: '/service-areas/west-middlesex-pa',
        permanent: true,
      },

      // ============================================
      // ASHTABULA COUNTY SERVICE PAGES
      // ============================================
      {
        source: '/service-area/ashtabula-county-ohio/plumber',
        destination: '/service-areas/ashtabula-county/plumbing',
        permanent: true,
      },
      {
        source: '/service-area/ashtabula-county-ohio/sewer-and-drain',
        destination: '/service-areas/ashtabula-county/sewer-drain',
        permanent: true,
      },
      {
        source: '/service-area/ashtabula-county-ohio/water-damage-restoration',
        destination: '/service-areas/ashtabula-county/water-damage',
        permanent: true,
      },
      {
        source: '/service-area/ashtabula-county-ohio/basement-waterproofing',
        destination: '/service-areas/ashtabula-county/waterproofing',
        permanent: true,
      },
      {
        source: '/service-area/ashtabula-county-ohio/water-heaters',
        destination: '/service-areas/ashtabula-county/water-heaters',
        permanent: true,
      },

      // ============================================
      // BLOG POSTS
      // ============================================
      {
        source: '/the-importance-of-professional-waterproofing-for-boardman-ohio-basements',
        destination: '/blog/professional-waterproofing-boardman-ohio',
        permanent: true,
      },
      {
        source: '/plumbing-code-requirements',
        destination: '/blog/plumbing-code-requirements-boardman',
        permanent: true,
      },
      {
        source: '/support-lynanne',
        destination: '/blog/support-lynanne',
        permanent: true,
      },
      {
        source: '/the-best-basement-waterproofing-solutions-for-boardman-ohio-homes',
        destination: '/blog/best-waterproofing-solutions-boardman',
        permanent: true,
      },
      {
        source: '/plumbing-considerations-for-restaurants-and-retail-spaces-in-boardman-ohio',
        destination: '/blog/commercial-plumbing-boardman',
        permanent: true,
      },
      {
        source: '/how-to-prevent-basement-flooding-in-boardman-ohio-homes',
        destination: '/blog/prevent-basement-flooding-boardman',
        permanent: true,
      },
      {
        source: '/how-ak-water-works-supports-plumbing-for-new-commercial-developments-in-boardman-ohio',
        destination: '/blog/new-construction-plumbing-boardman',
        permanent: true,
      },
      {
        source: '/how-to-protect-your-pipes-from-freezing-this-winter-in-boardman-ohio',
        destination: '/blog/prevent-frozen-pipes-boardman',
        permanent: true,
      },
      {
        source: '/the-importance-of-professional-plumbing-in-new-construction-projects-in-boardman-ohio',
        destination: '/blog/new-construction-plumbing-importance',
        permanent: true,
      },
      {
        source: '/plumbing-tips-for-new-homeowners',
        destination: '/blog/plumbing-tips-new-homeowners',
        permanent: true,
      },
      {
        source: '/signs-you-need-a-plumbing-inspection-in-your-boardman-ohio-home',
        destination: '/blog/plumbing-inspection-signs',
        permanent: true,
      },
      {
        source: '/sump-pump-installation-and-maintenance-in-boardman-ohio-what-you-need-to-know',
        destination: '/blog/sump-pump-guide-boardman',
        permanent: true,
      },
      {
        source: '/how-changing-seasons-in-boardman-ohio-impact-your-plumbing-system',
        destination: '/blog/seasonal-plumbing-tips',
        permanent: true,
      },
      {
        source: '/best-choice-for-plumber-near-me',
        destination: '/blog/best-plumber-near-me',
        permanent: true,
      },
      {
        source: '/new-construction-plumbing-in-boardman,-ohio',
        destination: '/blog/new-construction-plumbing-boardman-guide',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default nextConfig
