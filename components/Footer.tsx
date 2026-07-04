'use client'

import { motion } from 'framer-motion'
import { Heart, Mail } from 'lucide-react'
import { memo } from 'react'

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="bg-background border-t border-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              Tea Terrace
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Vythiri, Wayanad, Kerala
            </p>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Where the Hills Meet Your Soul
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <p className="font-semibold text-foreground text-sm">Quick Links</p>
            <ul className="space-y-3">
              {['Cottages', 'Experiences', 'Dining', 'Contact', 'Privacy'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <p className="font-semibold text-foreground text-sm mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Heart className="w-5 h-5 text-primary" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-muted origin-left mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm text-foreground/60 text-center md:text-left"
          >
            © {currentYear} Tea Terrace Vythiri. All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="text-sm text-foreground/60 font-medium text-center"
          >
            Check-in: 12:00 PM | Check-out: 11:00 AM
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-foreground/60 text-center md:text-right"
          >
            Designed with elegance & care
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
})

export default Footer
