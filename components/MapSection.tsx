'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const MapSection = memo(function MapSection() {
  const attractions = [
    { name: 'Tea Terrace Vythiri', coords: '11.5225° N, 76.0011° E', type: 'Resort' },
    { name: 'Bamboo Rafting', coords: '11.5150° N, 75.9950° E', type: 'Activity', distance: '10 min' },
    { name: 'Wayanad Tea Museum', coords: '11.5195° N, 75.9880° E', type: 'Museum', distance: '15 min' },
    { name: 'Meenmutty Waterfall', coords: '11.4850° N, 76.0100° E', type: 'Natural', distance: '20 min' },
    { name: 'Calicut Airport', coords: '11.1388° N, 75.9550° E', type: 'Airport', distance: '80 km' },
  ]

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
            Nearby Attractions
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore the magnificent destinations around Tea Terrace Vythiri
          </p>
        </motion.div>

        {/* Map and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.9223938837!2d75.9844!3d11.5225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64fa3c3c3c3c3%3A0x3c3c3c3c3c3c3c!2sTea%20Terrace%20Vythiri!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Attractions List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-serif text-2xl font-light text-foreground mb-4">
              Around Tea Terrace
            </h3>
            
            {attractions.map((attraction, i) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-3 items-start">
                  <div className={`p-2 rounded-full mt-1 ${
                    attraction.type === 'Resort' 
                      ? 'bg-primary/20' 
                      : 'bg-secondary/20'
                  }`}>
                    <MapPin className={`w-5 h-5 ${
                      attraction.type === 'Resort' 
                        ? 'text-primary' 
                        : 'text-secondary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">
                      {attraction.name}
                    </h4>
                    <p className="text-xs text-foreground/60 mt-1">
                      {attraction.type}
                    </p>
                    {attraction.distance && (
                      <p className="text-xs text-primary font-medium mt-1">
                        {attraction.distance} away
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default MapSection
