'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AccreditationsSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const certificates = [
    { image: '/certificate 1.jpg', name: 'Certificate 1' },
    { image: '/certificate 3.jpg', name: 'Certificate 2' },
    { image: '/certificate 4.jpg', name: 'Certificate 3' },
    { image: '/certificate 5.jpg', name: 'Certificate 4' },
  ]

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }
    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedCertificate])

  return (
    <section id="accreditations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-center mb-6 focus:outline-none"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 inline-flex items-center justify-center gap-4 hover:text-gray-700 transition-colors">
              Accreditations
              <svg
                className={`w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h2>
          </button>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />

          {/* Collapsible Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
              Our accreditations and certifications demonstrate our commitment to
              excellence and compliance with industry standards.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                onClick={() => setSelectedCertificate(certificate.image)}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden border-2 border-gray-200 hover:border-black transform hover:scale-105"
              >
                <div className="relative w-full h-64 bg-gray-100">
                  <Image
                    src={certificate.image}
                    alt={certificate.name}
                    fill
                    className="object-contain p-4"
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-black">
                    {certificate.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Click to expand</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for expanded certificate */}
          {selectedCertificate && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <div
                className="relative max-w-5xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 z-10 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="relative w-full h-full bg-white rounded-lg overflow-hidden">
                  <Image
                    src={selectedCertificate}
                    alt="Expanded certificate"
                    fill
                    className="object-contain p-8"
                    quality={90}
                    priority
                    sizes="90vw"
                  />
                </div>
              </div>
            </div>
          )}

            <div className="mt-12 bg-black text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Committed to Excellence
              </h3>
              <p className="text-gray-300 mb-6">
                Our accreditations are regularly renewed and audited to ensure we
                maintain the highest standards in all our operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

