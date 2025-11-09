"use client";

<<<<<<< HEAD
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", active: true },
  { label: "About us", active: false },
  { label: "Contact us", active: false },
];
=======
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button'
import { Navbar } from './Navbar'
>>>>>>> e35fc6f7991f46901ff13dace344b32f4c7e322c

export function HeroBannerSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
<<<<<<< HEAD
    <section className="relative w-full bg-[#fffdf7]">
      <header className="flex items-center justify-center px-4 sm:px-6 lg:px-4 pt-6 sm:pt-10 lg:pt-14 pb-0">
        {/* Mobile Header */}
        <div className="flex sm:hidden items-center justify-between w-full px-2 ">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full object-cover"
              alt="Cornerstone Orphanage Logo"
              src="/figmaAssets/image-11-1.png"
            />
            <div className="text-lg font-bold text-black [font-family:'Inter',Helvetica]">
              Cornerstone Orphanage
            </div>
          </div>

          {/* Hamburger Menu */}
          <button className="flex flex-col gap-1 p-2">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Desktop Header */}
        <nav className="hidden sm:flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-24 px-4 sm:px-[15.62px] py-3 sm:py-[13.02px] bg-[#fffaef] rounded-[104.16px] w-full max-w-6xl">
          <div className="inline-flex items-center justify-center gap-[13.02px] rounded-[59.89px]">
            <div className="inline-flex items-center gap-1">
              <img
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-[456px] object-cover"
                alt="Cornerstone Orphanage Logo"
                src="/figmaAssets/image-11-1.png"
              />
              <div className="w-fit text-base sm:text-lg lg:text-[22px] [font-family:'Inter',Helvetica] font-bold text-black leading-normal tracking-[0]">
                Cornerstone Orphanage
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 sm:gap-4 lg:gap-6">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className={`inline-flex items-center justify-center gap-[13.02px] p-2 sm:p-[13.02px] ${
                  item.active
                    ? "border-b-[2px] sm:border-b-[3.91px] border-solid border-[#0a3d6d]"
                    : ""
                }`}
              >
                <div
                  className={`relative w-fit ${
                    item.active ? "mt-[-2px] sm:mt-[-3.91px]" : ""
                  } [font-family:'Archivo',Helvetica] ${
                    item.active
                      ? "font-bold text-[#0a3d6e] text-base sm:text-lg lg:text-2xl"
                      : "font-medium text-[#0b1f33] text-sm sm:text-base lg:text-lg"
                  } tracking-[0] leading-normal whitespace-nowrap`}
                >
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-[13.02px] px-4 sm:px-6 lg:px-[31.25px] py-3 sm:py-4 lg:py-[20.83px] rounded-[59.89px] overflow-hidden border-2 border-solid border-[#164672] bg-transparent hover:bg-transparent"
            >
              <span className="relative w-fit mt-[-2.00px] [font-family:'Archivo',Helvetica] font-bold text-[#164672] text-sm sm:text-base lg:text-lg tracking-[0] leading-normal whitespace-nowrap">
                Join our mission
              </span>
            </Button>

            <Button className="h-auto inline-flex items-center justify-center gap-[13.02px] px-4 sm:px-6 lg:px-[31.25px] py-3 sm:py-4 lg:py-[20.83px] bg-[#164672] hover:bg-[#164672]/90 rounded-[59.89px] overflow-hidden">
              <span className="relative w-fit mt-[-2px] sm:mt-[-3.91px] [font-family:'Archivo',Helvetica] font-bold text-white text-sm sm:text-base lg:text-lg tracking-[0] leading-normal whitespace-nowrap">
                Support a child today
              </span>
            </Button>
          </div>
        </nav>
      </header>
=======
    <section className="relative w-full bg-[#fffdf7] min-h-screen">
      <Navbar />
>>>>>>> e35fc6f7991f46901ff13dace344b32f4c7e322c

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
  );
}
