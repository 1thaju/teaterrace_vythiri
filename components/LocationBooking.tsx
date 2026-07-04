'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Calendar } from 'lucide-react'
import { memo, useState } from 'react'

const nearbyAttractions = [
  { name: 'Bamboo Rafting', distance: '10 min' },
  { name: 'Wayanad Tea Museum', distance: '15 min' },
  { name: 'Meenmutty Waterfall', distance: '20 min' },
  { name: 'Calicut Airport', distance: '80 km' },
]

const LocationBooking = memo(function LocationBooking() {
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guests, setGuests] = useState('1 Guest')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const whatsappNumber = '+919544542000'
    const message = `Hi Tea Terrace Vythiri, I would like to check availability for:
    
Check-in Date: ${checkInDate || 'Not selected'}
Check-out Date: ${checkOutDate || 'Not selected'}
Number of Guests: ${guests}

Please let me know about availability and rates.`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="booking" className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Location & Booking
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.div
              className="bg-card rounded-2xl p-8 mb-8"
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Our Address
                  </h3>
                  <p className="text-foreground/70">
                    Valiyapaara, Vythiri
                    <br />
                    Achooranam, Wayanad
                    <br />
                    Kerala 673575, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Nearby Attractions */}
            <motion.div
              className="bg-card rounded-2xl p-8"
              whileHover={{ y: -4 }}
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Nearby Attractions
              </h3>
              <div className="space-y-3">
                {nearbyAttractions.map((attraction, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center pb-3 border-b border-muted last:border-b-0"
                  >
                    <p className="text-foreground/80 font-medium">
                      {attraction.name}
                    </p>
                    <span className="text-sm text-primary font-semibold">
                      {attraction.distance}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Check Availability
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Check-in Date */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </motion.div>

              {/* Check-out Date */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </motion.div>

              {/* Guests */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Number of Guests
                </label>
                <select 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 mt-8"
              >
                Check Availability
              </motion.button>
            </form>

            {/* Check-in/out times */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-muted text-center text-sm text-foreground/60"
            >
              <p>
                <Clock className="w-4 h-4 inline mr-1" />
                Check-in: 12:00 PM | Check-out: 11:00 AM
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default LocationBooking
