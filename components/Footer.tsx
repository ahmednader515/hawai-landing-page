import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hawai GAR</h3>
            <p className="text-gray-400">
              Greatness is the only exception. Your trusted partner in engineering,
              procurement, and construction services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#clients-partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mobile: +966 554733003</li>
              <li>Tel: 00966172820130</li>
              <li>Fax: 00966172820130</li>
              <li>
                Email:{' '}
                <a
                  href="mailto:saleh@hawaigar.com"
                  className="hover:text-white transition-colors"
                >
                  saleh@hawaigar.com
                </a>
                {' / '}
                <a
                  href="mailto:daif@hawaigar.com"
                  className="hover:text-white transition-colors"
                >
                  daif@hawaigar.com
                </a>
              </li>
              <li className="pt-2">
                <div>Saudi Arabia</div>
                <div>Abha, King Faisal Road</div>
                <div>Almehfar St.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hawai GAR for Contracting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

