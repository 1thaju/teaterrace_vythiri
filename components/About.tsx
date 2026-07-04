'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { memo } from 'react'

const About = memo(function About() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dkxCZA1YtoRxHQyhWNOKlAJm0MPpcZ.png"
              alt="Tea Terrace Resort"
              fill
              loading="lazy"
              quality={70}
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              A Rare Gem on Earth
            </h2>

            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Nestled in the Kurichiyar hills, Tea Terrace Vythiri is more than a resort—it&apos;s a sanctuary for those seeking authentic Kerala hospitality and natural tranquility.
            </p>

            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Our Spanish-inspired architecture seamlessly blends with the verdant tea estates surrounding us. Every room is thoughtfully designed to frame the breathtaking valley views, transforming each moment into a memory.
            </p>

            <p className="text-foreground/70 text-lg leading-relaxed">
              From dawn tea-picking experiences to sunset meditation on our hilltop terraces, we celebrate the rhythm of nature and the warmth of genuine hospitality that defines the Kerala spirit.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-primary text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default About
