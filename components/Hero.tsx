'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { memo } from 'react'

const Hero = memo(function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-foreground/5">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/HeroBg.png"
          alt="Tea Terrace Vythiri aerial view with cottages nestled in tea gardens and misty mountains"
          fill
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%23333333' width='1200' height='675'/%3E%3C/svg%3E"
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25" />
        
        {/* Top Gradient for Navbar Contrast */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        {/* Eyebrow Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-sm md:text-base font-medium text-white/80 tracking-widest uppercase">
            Wellness Sanctuary · Wayanad
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight text-balance">
            Awaken Amidst
            <br />
            The Tea Gardens
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-base md:text-lg text-white/90 mb-12 leading-relaxed"
        >
          A tranquil boutique escape on the misty hillside of Vythiri, surrounded by endless tea estates and the gentle embrace of nature
        </motion.p>

        {/* CTA Button */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault()
            const el = document.querySelector('#booking')
            el?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-8 md:px-10 py-3 md:py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm md:text-base mb-16"
        >
          Begin Your Journey
        </motion.button>

        {/* Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  )
})

export default Hero
