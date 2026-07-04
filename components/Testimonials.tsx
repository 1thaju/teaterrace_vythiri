'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { memo } from 'react'

const testimonials = [
  {
    quote:
      'Three blissful evenings of absolute tranquility. Tea Terrace gave us a peace we didn&apos;t know we needed.',
    author: 'Priya & Rahul',
    location: 'Bangalore',
  },
  {
    quote:
      'The food alone is worth the trip. Incredible location, warm hosts, and rooms with views that take your breath away.',
    author: 'Maya D.',
    location: 'Thrissur',
  },
  {
    quote:
      'Star gazing by the hilltop, tea picking at dawn — Tea Terrace is unlike anything else in Wayanad.',
    author: 'Vikram & Ananya',
    location: 'Mumbai',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const Testimonials = memo(function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
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
            Guest Stories
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto" />
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Quote Icon */}
              <motion.div
                className="mb-6 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Quote className="w-6 h-6 text-secondary" />
              </motion.div>

              {/* Quote */}
              <p className="font-serif text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

export default Testimonials
