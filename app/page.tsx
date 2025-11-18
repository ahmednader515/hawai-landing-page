'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import OrganizationSection from '@/components/sections/OrganizationSection'
import SafetySection from '@/components/sections/SafetySection'
import ClientsPartnersSection from '@/components/sections/ClientsPartnersSection'
import AccreditationsSection from '@/components/sections/AccreditationsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OrganizationSection />
      <SafetySection />
      <ClientsPartnersSection />
      <AccreditationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

