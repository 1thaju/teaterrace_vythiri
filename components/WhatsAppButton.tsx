'use client'

import { motion } from 'framer-motion'
import { LucideMessageCircle} from 'lucide-react'
import { useState, useEffect, memo } from 'react'

const WhatsAppButton = memo(function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero (approximately 900px)
      setIsVisible(window.scrollY > 900)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = '+919544542000' // Tea Terrace contact
  const message = 'Hi Tea Terrace Vythiri, I would like to know more about your accommodations and rates.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 shadow-lg hover:shadow-xl hover:bg-green-700 transition-all duration-300"
      >
        <LucideMessageCircle className="w-7 h-7 text-white stroke-2" />
      </motion.a>
      
      {/* Pulse animation background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-green-600 -z-10 opacity-20"
      />
    </motion.div>
  )
})

export default WhatsAppButton
