'use client'

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Mission
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
              To deliver exceptional construction services that exceed our
              clients' expectations while maintaining the highest standards of
              quality, safety, and professionalism.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to building lasting relationships with our clients
              through transparent communication, reliable execution, and
              innovative solutions. Our mission is to contribute to the
              development of our communities by creating structures that stand
              the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-black mb-2">500+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-black mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

