'use client'

import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button'
import { Navbar } from './Navbar'

export function HeroBannerSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="relative w-full bg-[#fffdf7] min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 min-h-[calc(100vh-120px)]">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center justify-between gap-8 sm:gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col w-full lg:max-w-2xl items-center lg:items-start gap-6 sm:gap-8"
          >
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 w-full text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full font-[family-name:var(--font-archivo)] font-bold text-[#0b1f33] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance"
              >
                Every Child Deserves Love, Family, and a Future Filled with Hope
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="w-full font-[family-name:var(--font-archivo)] font-medium text-[#0b1f33] text-base sm:text-lg md:text-xl leading-relaxed"
              >
                Cornerstone Orphanage provides a safe and nurturing home where
                children are empowered to dream, learn, and discover their
                purpose.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 rounded-full border-2 border-[#164672] bg-transparent hover:bg-[#164672] text-[#164672] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="font-[family-name:var(--font-archivo)] font-bold text-sm sm:text-base whitespace-nowrap">
                  Join our mission
                </span>
              </motion.button>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 bg-[#164672] hover:bg-[#164672]/90 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  <span className="text-sm sm:text-base font-[family-name:var(--font-archivo)] font-bold text-white whitespace-nowrap">
                    Support a child today
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Hero Image - Only visible on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative w-full block sm:hidden mt-4"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto rounded-2xl shadow-2xl"
                alt="Children at Cornerstone Orphanage"
                src="/figmaAssets/group-2.png"
              />
            </motion.div>
          </motion.div>

          {/* Desktop Hero Image - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full lg:max-w-2xl hidden sm:block"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-auto rounded-2xl shadow-2xl"
              alt="Children at Cornerstone Orphanage"
              src="/figmaAssets/group-2.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
