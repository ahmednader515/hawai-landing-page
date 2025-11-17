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
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/4.jpg"
                alt="Hawai GAR Construction Site"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-black">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hawai GAR's mission is to maintain a leading position in engineering,
                procurement, and construction projects specializing in the power,
                construction, transmission distribution, Refineries, and Power Plant
                sectors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hawai GAR aspires to lead in engineering, procurement, and
                construction services in the Middle East, prioritizing top-quality
                service. We foster strong client relationships, ensuring timely
                understanding and fulfillment of their needs at every project phase.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-black text-white p-8 rounded-lg border-l-4 border-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                We want to inspire others by delivering a customer experience second
                to none, as globally competitive, ethically meeting set industry
                standards. Providing our clients with innovative solutions that will
                improve and secure the trade environment and deliver cutting edge
                information management technologies to optimize the services we offer.
              </p>
            </div>
          </div>

          {/* Key Highlights with Images */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/5.jpg"
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
                  src="/6.jpg"
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
                  src="/7.jpg"
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

