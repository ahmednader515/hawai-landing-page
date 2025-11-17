'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AccreditationsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Accreditations
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />
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
    </section>
  )
}

