'use client'

import { motion } from 'framer-motion'
import { Wifi, UtensilsCrossed, Leaf, RotateCw, Gamepad2, Zap, Lock, Car, Plane } from 'lucide-react'
import { memo } from 'react'

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: UtensilsCrossed, label: 'Restaurant' },
  { icon: Leaf, label: 'Spa & Sauna' },
  { icon: RotateCw, label: 'Mini Golf' },
  { icon: Gamepad2, label: 'Indoor Games' },
  { icon: Zap, label: 'Rain Dance' },
  { icon: Lock, label: '24/7 Security' },
  { icon: Car, label: 'Parking' },
  { icon: Plane, label: 'Airport Transfer' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
}

const Amenities = memo(function Amenities() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-2">
            World-Class Amenities
          </h2>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {amenities.map((amenity, idx) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="mb-3 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm md:text-base font-medium text-foreground text-center">
                  {amenity.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
})

export default Amenities
