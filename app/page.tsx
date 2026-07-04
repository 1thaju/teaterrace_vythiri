'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

// Lazy load below-the-fold components
const Cottages = dynamic(() => import('@/components/Cottages'), { loading: () => <div className="h-96 bg-background" /> })
const Experiences = dynamic(() => import('@/components/Experiences'), { loading: () => <div className="h-96 bg-background" /> })
const Amenities = dynamic(() => import('@/components/Amenities'), { loading: () => <div className="h-96 bg-background" /> })
const About = dynamic(() => import('@/components/About'), { loading: () => <div className="h-96 bg-background" /> })
const Dining = dynamic(() => import('@/components/Dining'), { loading: () => <div className="h-96 bg-background" /> })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { loading: () => <div className="h-96 bg-background" /> })
const Certifications = dynamic(() => import('@/components/Certifications'), { loading: () => <div className="h-96 bg-background" /> })
const LocationBooking = dynamic(() => import('@/components/LocationBooking'), { loading: () => <div className="h-96 bg-background" /> })
const Footer = dynamic(() => import('@/components/Footer'), { loading: () => <div className="h-96 bg-background" /> })
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false })

export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="cottages">
        <Cottages />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <Amenities />
      <div id="about">
        <About />
      </div>
      <div id="dining">
        <Dining />
      </div>
      <Testimonials />
      <Certifications />
      <div id="booking">
        <LocationBooking />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
