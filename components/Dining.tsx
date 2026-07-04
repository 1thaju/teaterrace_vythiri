'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { memo } from 'react'

const diningImages = [
  '/cuisine-1.png',
  '/cuisine-2.png',
  '/cuisine-3.png',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const Dining = memo(function Dining() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            True Kerala Cuisine
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Freshly prepared, homemade taste — guests call it the best food in Wayanad
          </p>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {diningImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={img}
                alt="Kerala cuisine"
                fill
                loading="lazy"
                quality={65}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Our in-house chefs celebrate authentic Kerala flavors with a contemporary twist. Using ingredients sourced from local farmers and our organic garden, every dish tells a story of the land and its heritage.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-secondary text-foreground font-medium rounded-full hover:shadow-lg transition-all duration-300"
          >
            View Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
})

export default Dining
