'use client'

import { useState } from 'react'

export default function SafetySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const safetyPrinciples = [
    'Every employee shall familiarize himself with the safety rules.',
    'The primary responsibility of each employee is to reduce the possibility of an accident.',
    'Safety takes precedence over expediency and shortcuts.',
    'The basic safety rules and preventive measures contained in this program are mandatory and will be enforced by supervision & management.',
    'Safety is accepted as an individual responsibility and each person shall think, plan and perform his work with the utmost consideration for safety.',
    'Individual commitment and support of these principles by each employee.',
  ]

  const qualityPolicyPoints = [
    'To achieve and sustain a leading position with consistent quality in the engineering, procurement, supply, installation, testing and commissioning.',
    'To uphold relevant national or international standards.',
    'Determined and apply the criteria and methods (including monitoring, measurements, and related performance indicators) needed to ensure the effective operation and control of these processes; and documented them in related procedures.',
    'To meet the contractual requirements to enhance customer satisfaction.',
    'To establish, document, implement, maintain and continually improve our Quality Management System through communication and understanding of all employees in the organization.',
  ]

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-center mb-6 focus:outline-none"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 inline-flex items-center justify-center gap-4 hover:text-gray-700 transition-colors">
              Safety Policies & Quality Assurance
              <svg
                className={`w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 ${
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
            {/* Safety Policies Section */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg mb-8">
            <h3 className="text-3xl font-bold text-black mb-6">
              HAWAI GAR SAFETY POLICIES
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Safety plays an important role in construction work. It is our
              objective to efficiently achieve our targets without compromising on
              safety aspects of personnel, equipment, plants or the environment. An
              effective safety program will improve the overall performance of the
              project and help eliminate and minimize accidents.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Safety is an integral part of our daily activity and requires strict
              adherence to the following principles:
            </p>
            <ul className="space-y-3">
              {safetyPrinciples.map((principle, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 leading-relaxed"
                >
                  <span className="text-black mr-3 font-bold">-</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality Assurance Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-2 border-black">
            <h3 className="text-3xl font-bold text-black mb-6">QUALITY ASSURANCE</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Quality control (QC) is a procedure or set of procedures intended to
              ensure that performed service adheres to a defined set of quality
              criteria or meets the requirements of the client.
            </p>
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-black mb-4">
                Hawai GAR Quality Policy:
              </h4>
              <ul className="space-y-3">
                {qualityPolicyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 leading-relaxed"
                  >
                    <span className="text-black mr-3 font-bold">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Our safety and quality management systems are regularly audited and
              continuously improved to ensure we meet and exceed industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-100 px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-black">0</div>
                <div className="text-gray-700">Lost Time Injuries</div>
              </div>
              <div className="bg-gray-100 px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-black">100%</div>
                <div className="text-gray-700">Quality Compliance</div>
              </div>
              <div className="bg-gray-100 px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-black">24/7</div>
                <div className="text-gray-700">Safety Monitoring</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

