'use client'

import Image from 'next/image'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Commercial Complex',
      type: 'Commercial',
      location: 'Riyadh',
      year: '2023',
      description: 'Modern commercial complex with retail and office spaces',
      image: '/11.jpg',
    },
    {
      title: 'Residential Tower',
      type: 'Residential',
      location: 'Jeddah',
      year: '2023',
      description: 'Luxury residential tower with premium amenities',
      image: '/12.jpg',
    },
    {
      title: 'Industrial Facility',
      type: 'Industrial',
      location: 'Dammam',
      year: '2022',
      description: 'State-of-the-art industrial manufacturing facility',
      image: '/13.jpg',
    },
    {
      title: 'Hospital Extension',
      type: 'Healthcare',
      location: 'Riyadh',
      year: '2024',
      description: 'Modern hospital extension with advanced medical facilities',
      image: '/14.jpg',
    },
    {
      title: 'Educational Campus',
      type: 'Education',
      location: 'Jeddah',
      year: '2023',
      description: 'Comprehensive educational campus with modern facilities',
      image: '/15.jpg',
    },
    {
      title: 'Mixed-Use Development',
      type: 'Mixed-Use',
      location: 'Riyadh',
      year: '2024',
      description: 'Integrated mixed-use development project',
      image: '/16.jpg',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            List of Projects
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various sectors
            and regions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm font-semibold">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-black">
                      {project.title}
                    </h3>
                    <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

