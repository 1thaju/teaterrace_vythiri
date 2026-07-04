'use client'

import { motion } from 'framer-motion'
import { Leaf, Droplets, Moon, Utensils } from 'lucide-react'
import { memo } from 'react'

const experiences = [
  {
    icon: Leaf,
    title: 'Tea Plantation Walks',
    description: 'Stroll through verdant tea gardens, learning the art of tea picking from local experts',
  },
  {
    icon: Droplets,
    title: 'Waterfall Treks',
    description: 'Discover hidden waterfalls nestled in the misty hills surrounding Vythiri',
  },
  {
    icon: Moon,
    title: 'Star Gazing Nights',
    description: 'Experience the cosmos from our hilltop observatory under pristine night skies',
  },
  {
    icon: Utensils,
    title: 'Local Kerala Cuisine',
    description: 'Savor authentic Kerala delicacies prepared with fresh, locally-sourced ingredients',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Experiences = memo(function Experiences() {
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
            Signature Experiences
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto" />
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {experiences.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {exp.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
})

export default Experiences
