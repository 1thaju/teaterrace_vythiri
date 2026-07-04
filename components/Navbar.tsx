'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, memo } from 'react'

const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Cottages', href: '#cottages' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Dining', href: '#dining' },
    { label: 'About', href: '#about' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex flex-col items-start"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className={`font-serif text-2xl font-semibold tracking-tight transition-colors ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}>
            Tea Terrace
          </h1>
          <p className={`font-sans text-xs font-medium transition-colors ${
            isScrolled ? 'text-muted-foreground' : 'text-white/80'
          }`}>
            Vythiri
          </p>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors cursor-pointer relative group ${
                isScrolled
                  ? 'text-foreground/70 hover:text-foreground'
                  : 'text-white/80 hover:text-white'
              }`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="relative z-10 inline-block">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* CTA Button removed per request */}

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          whileHover={{ scale: 1.1 }}
        >
          <svg
            className={`w-6 h-6 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${
          isScrolled ? 'bg-white/85 backdrop-blur-md' : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium py-2 transition-colors relative group ${
                isScrolled
                  ? 'text-foreground/70 hover:text-foreground'
                  : 'text-white/80 hover:text-white'
              }`}
              whileHover={{ x: 4 }}
            >
              <span className="relative z-10 inline-block">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          {/* Mobile Book Now removed per request */}
        </div>
      </motion.div>
    </motion.nav>
  )
})

export default Navbar
