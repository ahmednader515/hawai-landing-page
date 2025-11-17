'use client'

import Image from 'next/image'

export default function ServicesSection() {
  const expertiseAreas = [
    'High voltage & extra high voltage indoor & outdoor substations.',
    'High voltage & extra high voltage transmission lines',
    'High voltage underground cabling.',
    'Distribution lines of 34.5kV & 13.8kV',
    'Overhead & underground fiber optic cable including retrofitting works under live line condition.',
    'Cable Pulling in Trench.',
    'MV Cable Termination/Splicing (Approved by SEC).',
  ]

  const transmissionLineServices = [
    'Insulator Hoisting',
    'Pilot wire paying out',
    'Conductors pulling',
    'Dead end pressing and sagging',
    'Clipping',
    'Spacer installation',
    'Jumper Installation',
    'Puller and tensioner machine operator',
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Scope of Services
            </h2>
            <div className="h-1 w-24 bg-black mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              Hawai GAR for contracting
            </h3>
          </div>

          {/* Electrical Works Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">ELECTRICAL WORKS</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  HG Transmission & Distribution (HG-T&D) is a leading engineering,
                  procurement and construction contractor in the transmission &
                  distribution sector in Saudi Arabia. The company specializes in extra
                  high voltage and high voltage substations & transmission lines and
                  electrical distribution projects on lump sum turnkey bases.
                </p>
              </div>
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/8.jpg"
                  alt="Electrical Works"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-black mb-4">
                Areas of Expertise:
              </h4>
              <ul className="space-y-3">
                {expertiseAreas.map((area, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 leading-relaxed"
                  >
                    <span className="text-black mr-3 font-bold">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transmission Lines Services */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-black mb-4">
                High voltage & extra high voltage transmission lines services:
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {transmissionLineServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-700 bg-gray-50 p-3 rounded"
                  >
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design & Engineering and Construction */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg border-l-4 border-black overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/9.jpg"
                  alt="Design & Engineering"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Design & Engineering
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Exclusive in-house design and engineering facilities with highly
                  qualified & experienced electrical, civil, protection and transmission
                  line design engineers, equipped with the latest software programs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-l-4 border-black overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/10.jpg"
                  alt="Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Construction</h3>
                <p className="text-gray-700 leading-relaxed">
                  We have a considerable team of qualified & experienced engineers,
                  supervisors, technicians, together with a complete inventory of project
                  offices, camp facilities and construction equipment.
                </p>
              </div>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-2">Our Services</h3>
              <h4 className="text-2xl font-semibold text-black mb-6">
                Hawai GAR for contracting
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h4 className="text-xl font-bold text-black mb-4">
                  Erection of Gantry in Substation
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Over Head Tower Assembly, Erection, Tightening of Tower</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Conductor/OPGW Stringing, Sagging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Substation Electrical & Mechanical Works</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h4 className="text-xl font-bold text-black mb-4">Mechanical Works</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Piping (CS, SS, GRP, GRE, PVDF, P91, P22, HDPE)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Motors & Pumps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Erection - Steel Structure Fabrication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Activities – HVAC and Insulation Works - Fire Fighting Networks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h4 className="text-xl font-bold text-black mb-4">Power Plants Erection</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Gas Turbines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Steam Turbines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Boilers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Diesel Generators</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h4 className="text-xl font-bold text-black mb-4">Plumbing</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">•</span>
                    <span>Plant Piping-Erection-Welding-Reinstatement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Civil Works Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
            <h3 className="text-3xl font-bold text-black mb-6">CIVIL WORKS</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Hawai GAR Civil has been in construction for the past 12 years and has
                  completed projects that encompass the full spectrum of civil engineering
                  services. These include road construction, infrastructure development,
                  parking area construction, road rehabilitation, bulk earthworks and
                  surfacing.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our site management teams are dynamic, skilled and have very good
                  experience in all facets of civil engineering construction. We take pride
                  in delivering successful projects on time, within budget and to the
                  highest quality standards.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/17.jpg"
                  alt="Civil Works"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Major Machineries & Equipment Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-black mb-6">
              MAJOR MACHINERIES & EQUIPMENT
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We also have a large inventory of major construction equipment, including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Concrete mixer machines',
                'Loaders',
                'Excavators',
                'Auger machines',
                'Quadruple stringing equipment',
                'Rock drilling equipment',
                'Heavy lift cranes',
                'Low bed trailers',
                'Fork lifts',
                'Transformer',
                'Oil filtration equipment',
                'SF6 gas handling plant',
              ].map((equipment, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-black transition-colors"
                >
                  <span className="text-black mr-3 font-bold">•</span>
                  <span>{equipment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

