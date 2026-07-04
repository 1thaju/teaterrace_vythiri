'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { memo } from 'react'

const faqs = [
  {
    question: 'What is the check-in and check-out time?',
    answer: 'Check-in is from 2:00 PM and check-out is by 11:00 AM.',
  },
  {
    question: 'Is breakfast included?',
    answer: 'Yes, complimentary breakfast is included with every stay.',
  },
  {
    question: 'Do you have free Wi-Fi?',
    answer: 'Yes, high-speed Wi-Fi is available throughout the property.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, free on-site parking is available for all guests.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Please check the resort policy for the current pet policy.',
  },
  {
    question: 'Do you arrange sightseeing or local tours?',
    answer: 'Yes, we can help arrange tea estate walks, trekking, and nearby attractions.',
  },
  {
    question: 'How far is the resort from key locations?',
    answer: 'Calicut Airport, Wayanad town, Edakkal Caves, and Banasura Dam are all easily reachable from the resort.',
  },
  {
    question: 'Is the resort suitable for families or couples?',
    answer: 'Yes, it is ideal for couples, families, and nature lovers.',
  },
  {
    question: 'How can I make a reservation?',
    answer: 'Book directly through our website or contact us via WhatsApp or phone.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Please refer to the resort’s actual cancellation policy for the latest details.',
  },
]

const FAQ = memo(function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Frequently Asked Questions
          </p>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-foreground/70">
            Find quick answers for stay details, amenities, booking and local attractions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Accordion className="bg-card border border-muted shadow-none rounded-3xl" disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-primary" />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                >
                  <Typography className="text-left text-base font-semibold text-foreground">
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-foreground/80 leading-relaxed">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

export default FAQ
