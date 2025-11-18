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
          </div>

          {/* Civil Works Section - Priority 1 */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/17.jpg"
                  alt="Civil Works"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">CIVIL WORKS</h3>
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
            </div>
          </div>

          {/* Our Projects Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-2">Our Projects</h3>
              <div className="h-1 w-24 bg-black mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                '/project-1.jpeg',
                '/project-2.jpeg',
                '/project-3.jpeg',
                '/project-4.jpeg',
                '/project-5.jpeg',
                '/project-6.jpeg',
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <Image
                    src={image}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mechanical Works and Electrical Works - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Mechanical Works Section - Priority 2 */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src="/8.jpg"
                  alt="Mechanical Works"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">MECHANICAL WORKS</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our mechanical works division specializes in comprehensive mechanical
                  engineering solutions for industrial and construction projects. We provide
                  expert services in piping systems, equipment installation, and structural
                  fabrication.
                </p>
              </div>
            </div>

            {/* Electrical Works Section - Priority 3 */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src="/10.jpg"
                  alt="Electrical Works"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">ELECTRICAL WORKS</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  HG Transmission & Distribution (HG-T&D) is a leading engineering,
                  procurement and construction contractor in the transmission &
                  distribution sector in Saudi Arabia. The company specializes in extra
                  high voltage and high voltage substations & transmission lines and
                  electrical distribution projects on lump sum turnkey bases.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-2">Additional Services</h3>
              <h4 className="text-2xl font-semibold text-black mb-6">
                Hawai GAR for contracting
              </h4>
            </div>

            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                  <Image
                    src="/power-substation.jpg"
                    alt="Erection of Gantry in Substation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white">
                      Erection of Gantry in Substation
                    </h4>
                  </div>
                </div>

                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                  <Image
                    src="/power-plant-erection.png"
                    alt="Power Plants Erection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white">Power Plants Erection</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Material Supplies Section */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">Material Supplies</h3>
                <div className="h-1 w-24 bg-black mx-auto mb-6" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                  <Image
                    src="/block.png"
                    alt="Blocks"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white">Blocks</h4>
                  </div>
                </div>

                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                  <Image
                    src="/pipes.png"
                    alt="Pipes"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white">Pipes</h4>
                  </div>
                </div>

                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                  <Image
                    src="/steel.png"
                    alt="Steel"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white">Steel</h4>
                  </div>
                </div>

                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                  <Image
                    src="/truck.png"
                    alt="Trucks"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white">Trucks</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

