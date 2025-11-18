'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#organization', label: 'Organization' },
    { href: '#safety', label: 'Safety & Quality' },
    { href: '#clients-partners', label: 'Partners' },
    { href: '#accreditations', label: 'Accreditations' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-black/30 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-1 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center relative">
            {/* White background with circular bottom - exactly behind logo, touching top */}
            {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 md:w-36 h-20 md:h-24 bg-white rounded-b-full z-0" /> */}
            <div className="relative z-10">
              <Image
                src="/logo.png"
                alt="Hawai GAR Logo"
                width={200}
                height={71}
                className="h-20 md:h-24 w-auto object-contain"
                priority
                quality={90}
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  isScrolled
                    ? 'text-black hover:text-gray-600'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden mt-4 pb-4 rounded-lg shadow-lg transition-colors ${
              isScrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-sm'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 transition-colors ${
                  isScrolled
                    ? 'text-black hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

