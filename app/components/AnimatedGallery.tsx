'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const galleryImages = [
  '/figmaAssets/image-3.png',
  '/figmaAssets/image-9.png',
  '/figmaAssets/image-10.png',
  '/figmaAssets/group-2.png',
  '/figmaAssets/image-11-1.png',
]

export function AnimatedGallery() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Create extended arrays for seamless looping
  const topRowImages = [...galleryImages, ...galleryImages, ...galleryImages]
  const bottomRowImages = [...galleryImages.reverse(), ...galleryImages, ...galleryImages]

  return (
    <section className="w-full relative overflow-hidden py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-[#fffdf7] via-[#fffbf5] to-white">
      <div className="w-full space-y-4 sm:space-y-6">
        {/* Top row - moving left */}
        <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 absolute top-0 left-0"
            animate={{
              x: ['0%', '-33.33%']
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {topRowImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="flex-shrink-0 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom row - moving right */}
        <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 absolute top-0 left-0"
            animate={{
              x: ['-33.33%', '0%']
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {bottomRowImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="flex-shrink-0 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for seamless edges */}
      <div className="absolute top-0 left-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-r from-[#fffdf7] via-[#fffdf7]/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}