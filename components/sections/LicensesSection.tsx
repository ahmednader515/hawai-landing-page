'use client'

export default function LicensesSection() {
  const registrations = [
    {
      title: 'Commercial Registration (C.R. No.)',
      number: '5850118096',
    },
    {
      title: 'Chamber of Commerce Membership (C.C.M)',
      number: '701001174049',
    },
    {
      title: 'General Organization of Social Insurance (GOSI)',
      number: '513332742',
    },
    {
      title: 'Zakat Registration (Z.R)',
      number: '3100973214',
    },
    {
      title: 'Saudi Electricity Company Vendor Number (SEC) VN',
      number: 'VD017509',
    },
    {
      title: 'Aramco Vendor Number (ARAMCO)',
      number: '10060638',
    },
  ]

  return (
    <section id="licenses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Registration and Licenses
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            We maintain all necessary licenses and certifications to operate
            legally and professionally in the construction industry.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {registrations.map((registration, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-black transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-black pr-4">
                    {index + 1}. {registration.title}
                  </h3>
                  <div className="bg-black text-white px-3 py-1 rounded text-sm font-semibold flex-shrink-0">
                    Active
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">-</span>
                    <span className="text-xl font-bold text-black">
                      {registration.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              All registrations and licenses are current and regularly renewed to
              ensure compliance with regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

