'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleError = () => {
        console.error('Video failed to load')
        setShowFallback(true)
      }

      const handleLoadedData = () => {
        setShowFallback(false)
        video.play().catch((err) => {
          console.log('Autoplay prevented:', err)
        })
      }

      video.addEventListener('error', handleError)
      video.addEventListener('loadeddata', handleLoadedData)

      // Force load the video
      video.load()

      return () => {
        video.removeEventListener('error', handleError)
        video.removeEventListener('loadeddata', handleLoadedData)
      }
    }
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ minWidth: '100%', minHeight: '100%', width: '100%', height: '100%' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient overlay - only show if video didn't load */}
        {showFallback && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hawai GAR for Contracting
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-delay">
            Your Trusted Partner in Construction
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-delay-2">
            Building the Future with Excellence and Integrity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <a
              href="#about"
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors w-auto"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

