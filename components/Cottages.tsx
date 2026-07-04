'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { memo } from 'react'

const cottages = [
  {
    id: 1,
    name: 'Deluxe Cottage',
    price: '₹4,500',
    rating: 5,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JIOTPkqiizrQZ8zSx9NVykrO3zpoxZ.png',
  },
  {
    id: 2,
    name: 'Signature Tea Room',
    price: '₹5,500',
    rating: 5,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0tY2G8P3PaiDJCJ20vN4fqr941dVaZ.png',
  },
  {
    id: 3,
    name: 'Signature Spa Room',
    price: '₹7,000',
    rating: 5,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaaQExYQCwnjbhVBJjyx6iRi0Zj3Cu.png',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Cottages = memo(function Cottages() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Our Cottages
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto" />
        </motion.div>

        {/* Cottage Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cottages.map((cottage) => (
            <motion.div
              key={cottage.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-muted">
                <Image
                  src={cottage.image}
                  alt={cottage.name}
                  fill
                  loading="lazy"
                  quality={70}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {cottage.name}
                </h3>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < cottage.rating
                          ? 'fill-primary text-primary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>

                {/* Price */}
                <p className="text-lg font-semibold text-primary mb-6">
                  from {cottage.price}
                  <span className="text-sm font-normal text-foreground/60">/night</span>
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors duration-300 text-sm"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

export default Cottages
