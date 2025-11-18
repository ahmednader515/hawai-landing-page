'use client'

import Image from 'next/image'

export default function ClientsPartnersSection() {
  const partners = [
    { name: 'NCC', fullName: 'NATIONAL CONTRACTING COMPANY', logo: '/national contraction company (ncc).jpg' },
    { name: 'KEC', fullName: 'KEC INTERNATIONAL LIMITED', logo: '/KEC.png' },
    { name: 'alfanar', fullName: 'alfanar', logo: '/alfanar.png' },
    { name: 'ETE GROUP', fullName: 'EASTERN TRADING & CONTRACTING COMPANY', logo: '/ete.png' },
    { name: 'SABIC', fullName: 'SABIC', logo: '/sabic.png' },
    { name: 'SEPCO', fullName: 'Shandong Electric Power Construction', logo: '/sepco.png' },
    { name: 'Saudi Aramco', fullName: 'Saudi Aramco', logo: '/saudi aramco.png' },
    { name: 'Saudi Electricity Company', fullName: 'Saudi Electricity Company', logo: '/saudi electricity company.png' },
    { name: 'NWC', fullName: 'National Water Company', logo: '/nwc.png' },
    { name: 'STC', fullName: 'Saudi Telecom Company', logo: '/stc.png' },
    { name: 'GACA', fullName: 'General Authority of Civil Aviation', logo: '/gaca.png' },
    { name: 'Royal Commission for Jubail & Yanbu', fullName: 'Royal Commission for Jubail & Yanbu', logo: '/royal commition for jubail and yunbu.png' },
    { name: 'ALKIFAH CONTRACTING', fullName: 'ALKIFAH CONTRACTING', logo: '/alkifah contracting.png' },
    { name: 'CHINA HARBOUR', fullName: 'CHINA HARBOUR', logo: '/hec.png' },
    { name: 'EL SEIF', fullName: 'EL SEIF', logo: '/el seif.png' },
    { name: 'NESMA', fullName: 'NESMA', logo: '/nesma.jpeg' },
  ]

  return (
    <section id="clients-partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Our Partners
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            We are proud to work with leading organizations and maintain strong
            partnerships that drive mutual success.
          </p>

          {/* Partners Section */}
          <div className="overflow-hidden -mx-4 md:mx-0">
            <div className="flex gap-3 sm:gap-4 md:gap-8 items-center animate-scroll">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 flex-shrink-0"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 160px"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 flex-shrink-0"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 160px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              We value long-term relationships and are committed to delivering
              excellence to all our partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

