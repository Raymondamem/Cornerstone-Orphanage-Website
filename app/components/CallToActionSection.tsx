'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../../components/ui/button'
import { useRef } from 'react'

export function CallToActionSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section ref={ref} className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] bg-white overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="/figmaAssets/image-9.png"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#051a2e]/80 to-[#051a2e]/90" />

      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-3 sm:gap-4 w-full"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight font-[family-name:var(--font-archivo)] font-bold text-white text-balance">
              Support a child today
            </h2>

            <p className="font-normal text-white text-base sm:text-lg lg:text-xl text-center leading-relaxed font-[family-name:var(--font-archivo)] max-w-3xl">
              Cornerstone Orphanage provides a safe and nurturing home where
              children are empowered to dream, learn, and discover their
              purpose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 rounded-full border-2 border-white bg-transparent hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-sm sm:text-base lg:text-lg font-[family-name:var(--font-archivo)] font-bold text-white whitespace-nowrap">
                Join our mission
              </span>
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 bg-[#164672] rounded-full hover:bg-[#164672]/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-sm sm:text-base lg:text-lg font-[family-name:var(--font-archivo)] font-bold text-white whitespace-nowrap">
                  Support a child today
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
