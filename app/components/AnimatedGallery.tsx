'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const galleryImages = [
  '/figmaAssets/image-3.png',
  '/figmaAssets/image-9.png',
  '/figmaAssets/image-10.png',
  '/figmaAssets/group-2.png',
  '/figmaAssets/image-11-1.png',
  '/figmaAssets/image-3.png', // Duplicate for seamless loop
  '/figmaAssets/image-9.png',
  '/figmaAssets/image-10.png',
]

export function AnimatedGallery() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const topRowImages = galleryImages.slice(0, 4)
  const bottomRowImages = galleryImages.slice(4)

  return (
    <section className="w-full relative overflow-hidden py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-[#fffdf7] to-white">
      <div className="w-full">
        {/* Top row - moving left */}
        <div className="relative h-24 sm:h-32 lg:h-40 mb-4 sm:mb-6 lg:mb-8 overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8 absolute top-0"
            animate={{
              x: [0, -1000]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: 'calc(200% + 100px)' }}
          >
            {[...topRowImages, ...topRowImages, ...topRowImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom row - moving right */}
        <div className="relative h-24 sm:h-32 lg:h-40 overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8 absolute top-0"
            animate={{
              x: [-1000, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: 'calc(200% + 100px)' }}
          >
            {[...bottomRowImages, ...bottomRowImages, ...bottomRowImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for seamless edges */}
      <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-[#fffdf7] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}