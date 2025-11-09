'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/#about' },
  { label: 'Contact us', href: '/#contact' },
  { label: 'Blog', href: '/blog' },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleNavClick = (href: string, e: React.MouseEvent, callback?: () => void) => {
  if (href.startsWith('/#')) {
    e.preventDefault()
    const sectionId = href.substring(2)
    
    if (window.location.pathname !== '/') {
      window.location.href = href
    } else {
      scrollToSection(sectionId)
    }
    callback?.()
  } else {
    callback?.()
  }
}

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="flex items-center justify-center px-4 sm:px-6 lg:px-4 pt-4 sm:pt-6 lg:pt-10 pb-0 relative z-50">
      {/* Mobile Header */}
      <div className="flex sm:hidden items-center justify-between w-full px-2">
        <Link href="/" className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            alt="Cornerstone Orphanage Logo"
            src="/figmaAssets/image-11-1.png"
          />
          <div className="text-base font-bold text-black font-[family-name:var(--font-inter)]">
            Cornerstone Orphanage
          </div>
        </Link>
        
        {/* Hamburger Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm sm:hidden z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-[#fffaef] shadow-2xl sm:hidden z-50 p-6"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href || (pathname === '/' && item.href.startsWith('/#'))
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e, () => setIsMobileMenuOpen(false))}
                      className={`text-lg font-semibold font-[family-name:var(--font-archivo)] py-2 px-4 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-white text-[#0a3d6e]'
                          : 'text-[#0b1f33] hover:bg-white/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                <div className="flex flex-col gap-3 mt-6">
                  <button
                    onClick={scrollToContact}
                    className="w-full py-3 px-6 rounded-full border-2 border-[#164672] text-[#164672] font-bold font-[family-name:var(--font-archivo)] hover:bg-[#164672] hover:text-white transition-colors"
                  >
                    Join our mission
                  </button>

                  <Button className="w-full py-3 px-6 bg-[#164672] hover:bg-[#164672]/90 rounded-full font-bold font-[family-name:var(--font-archivo)]">
                    Support a child today
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Header */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden sm:flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-16 px-4 sm:px-4 lg:px-6 py-3 sm:py-3 lg:py-4 bg-[#fffaef] rounded-full w-full max-w-6xl shadow-sm"
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full object-cover"
            alt="Cornerstone Orphanage Logo"
            src="/figmaAssets/image-11-1.png"
          />
          <div className="text-sm sm:text-base lg:text-lg font-bold text-black leading-normal font-[family-name:var(--font-inter)] whitespace-nowrap">
            Cornerstone Orphanage
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href || (pathname === '/' && item.href.startsWith('/#'))
            return (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/50 ${
                  isActive ? 'bg-white' : ''
                }`}
              >
                <span
                  className={`font-[family-name:var(--font-archivo)] ${
                    isActive
                      ? 'font-bold text-[#0a3d6e] text-sm sm:text-base lg:text-base'
                      : 'font-medium text-[#0b1f33] text-sm sm:text-sm lg:text-base'
                  } whitespace-nowrap`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-full border-2 border-[#164672] bg-transparent hover:bg-[#164672] text-[#164672] hover:text-white transition-all duration-200"
          >
            <span className="text-xs sm:text-sm lg:text-sm font-bold font-[family-name:var(--font-archivo)] whitespace-nowrap">
              Join our mission
            </span>
          </motion.button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 bg-[#164672] hover:bg-[#164672]/90 rounded-full transition-all duration-200">
              <span className="text-xs sm:text-sm lg:text-sm font-bold text-white font-[family-name:var(--font-archivo)] whitespace-nowrap">
                Support a child
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  )
}