'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Certifications = memo(function Certifications() {
  const certifications = [
    {
      id: 1,
      name: 'TripAdvisor',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OqEimAop5S0Ur8rVzJHnFNOOLAw6wd.png',
      alt: 'TripAdvisor Certificate of Excellence 2018',
    },
    {
      id: 2,
      name: 'Booking.com',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8pDryhfJvMRBPO9BDvC0v9PLmZvlvC.png',
      alt: 'Booking.com Superb 9.3 rating',
    },
    {
      id: 3,
      name: 'Google My Business',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HLfq07y23zbThm44gF31wXQfcYkDtD.png',
      alt: 'Google My Business 4.7 stars rating',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Trusted by Guests Worldwide
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto text-base md:text-lg">
            Recognized by leading travel platforms for exceptional hospitality and guest satisfaction
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 group cursor-pointer"
            >
              <div className="relative w-full h-32 md:h-40">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  loading="lazy"
                  quality={75}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/60 text-sm md:text-base">
            With thousands of verified reviews across multiple platforms, Tea Terrace Vythiri consistently delivers
            <br className="hidden md:block" />
            world-class hospitality and unforgettable wellness experiences
          </p>
        </motion.div>
      </div>
    </section>
  )
})

export default Certifications
