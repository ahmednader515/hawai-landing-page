'use client'

import Image from 'next/image'

export default function ClientsSection() {
  const clients = [
    {
      name: 'Ministry of Housing',
      logo: '/21.png',
      category: 'Government',
    },
    {
      name: 'Saudi Aramco',
      logo: '/22.png',
      category: 'Energy',
    },
    {
      name: 'NEOM',
      logo: '/23.png',
      category: 'Development',
    },
    {
      name: 'Red Sea Global',
      logo: '/24.png',
      category: 'Tourism',
    },
    {
      name: 'King Faisal Specialist Hospital',
      logo: '/25.png',
      category: 'Healthcare',
    },
    {
      name: 'King Saud University',
      logo: '/26.png',
      category: 'Education',
    },
    {
      name: 'Saudi Telecom Company',
      logo: '/27.png',
      category: 'Telecommunications',
    },
    {
      name: 'Saudi Electricity Company',
      logo: '/28.png',
      category: 'Utilities',
    },
  ]

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Our Clients
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            We are honored to serve a diverse portfolio of clients, from
            government entities to leading private sector organizations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-black transition-colors text-center group flex flex-col items-center justify-center min-h-[180px]"
              >
                <div className="relative w-24 h-24 mb-4 group-hover:scale-110 transition-transform">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-sm font-semibold text-black mb-1">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-600">{client.category}</p>
              </div>
            ))}
          </div>

          <div className="bg-black text-white p-8 md:p-12 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our commitment to excellence has earned us the trust of
                prestigious clients across various sectors. We take pride in
                delivering exceptional results that exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-gray-300">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Become Our Client
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

