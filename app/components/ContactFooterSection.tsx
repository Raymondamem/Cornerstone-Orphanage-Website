'use client'

import { motion } from 'framer-motion'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Contact us', href: '/#contact' },
  { label: 'Blog', href: '/blog' },
]

export function ContactFooterSection() {
  return (
    <footer className="relative w-full bg-white py-8 sm:py-10 lg:py-12 border-t border-gray-100 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <img
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                alt="Cornerstone Orphanage Logo"
                src="/figmaAssets/image-11-1.png"
              />
              <div className="font-[family-name:var(--font-inter)] font-bold text-black text-base sm:text-lg leading-normal whitespace-nowrap">
                Cornerstone Orphanage
              </div>
            </motion.a>

            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="font-[family-name:var(--font-archivo)] font-normal text-black text-sm sm:text-base leading-normal whitespace-nowrap hover:text-[#164672] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center w-full font-[family-name:var(--font-archivo)] font-light text-black text-xs sm:text-sm text-center"
        >
          <span>© 2025 </span>
          <span className="font-[family-name:var(--font-inter)] font-bold mx-1">
            Cornerstone Orphanage
          </span>
          <span> All Rights Reserved</span>
        </motion.div>
      </div>
    </footer>
  )
}
