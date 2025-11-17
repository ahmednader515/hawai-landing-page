'use client'

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Our Vision
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-black text-white p-8 md:p-12 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Leading the Future of Construction
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  To be recognized as the premier contracting company in the
                  region, known for innovation, excellence, and unwavering
                  commitment to quality.
                </p>
                <p className="text-lg leading-relaxed">
                  We envision a future where our projects not only meet but
                  exceed expectations, setting new benchmarks for the industry
                  and contributing to sustainable development.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">
                      Innovation
                    </h4>
                    <p className="text-gray-700">
                      Embracing cutting-edge technology and methodologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">
                      Excellence
                    </h4>
                    <p className="text-gray-700">
                      Maintaining the highest standards in every project
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">
                      Sustainability
                    </h4>
                    <p className="text-gray-700">
                      Building for the future with environmental responsibility
                    </p>
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

