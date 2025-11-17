'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About Us
            </h2>
            <div className="h-1 w-24 bg-black mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-light text-gray-800 italic mb-4">
              Greatness is the only exception
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              Hawai GAR for contracting
            </h3>
          </div>

          {/* Main Description with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/civil-1.jpg"
                alt="Hawai GAR Construction Site"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hawai GAR aims to be a top provider of engineering, procurement, and
                construction services in Saudi Arabia and the Middle East and to serve
                our customers with the highest degree of quality. We maintain close
                relations with our clients at all levels and phases of a project to
                ensure that their needs are understood and met on time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We deliver end-to-end engineering solutions, project management,
                maintenance, and skilled professionals for Substations, Transmission
                Lines, Electrical Panels, Equipment Erection, and Civil and Mechanical
                activities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Choose us for unparalleled expertise, comprehensive solutions, skilled
                professionals, proven reliability, and unwavering commitment to
                excellence in Engineering Design, Project Management, and Technical
                Services.
              </p>
            </div>
          </div>

          {/* Key Highlights with Images */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/civil-2.jpg"
                  alt="Excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-black mb-2">Excellence</div>
                <p className="text-gray-700">Unparalleled expertise in every project</p>
              </div>
            </div>
            <div className="text-center bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/civil-3.jpg"
                  alt="Reliability"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-black mb-2">Reliability</div>
                <p className="text-gray-700">Proven track record of success</p>
              </div>
            </div>
            <div className="text-center bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/civil-4.jpg"
                  alt="Innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-black mb-2">Innovation</div>
                <p className="text-gray-700">Cutting-edge solutions and technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

