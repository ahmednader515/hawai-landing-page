'use client'

import Image from 'next/image'

export default function OrganizationSection() {
  return (
    <section id="organization" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Organization Chart
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center">
            Hawai GAR for contracting
          </h3>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            Our organizational structure is designed to ensure efficient
            operations and clear lines of communication across all departments.
          </p>

          {/* Organization Chart Image */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="relative w-full h-auto">
              <Image
                src="/18.png"
                alt="Organization Chart - Hawai GAR for contracting"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Our team consists of highly qualified professionals with extensive
              experience in their respective fields.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

