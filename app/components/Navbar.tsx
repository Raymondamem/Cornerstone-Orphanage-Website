'use client'

import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

const handleNavClick = (href: string, e: React.MouseEvent) => {
  if (href.startsWith('/#')) {
    e.preventDefault()
    const sectionId = href.substring(2) // Remove '/#'
    
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      window.location.href = href
    } else {
      scrollToSection(sectionId)
    }
  }
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-center px-4 sm:px-6 lg:px-4 pt-6 sm:pt-10 lg:pt-14 pb-0">
      {/* Mobile Header */}
      <div className="flex sm:hidden items-center justify-between w-full px-2">
        <Link href="/" className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            alt="Cornerstone Orphanage Logo"
            src="/figmaAssets/image-11-1.png"
          />
          <div className="text-lg font-bold text-black [font-family:'Inter',Helvetica]">
            Cornerstone Orphanage
          </div>
        </Link>
        
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
            <Link href="/" className="flex items-center gap-1">
              <img
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-[456px] object-cover"
                alt="Cornerstone Orphanage Logo"
                src="/figmaAssets/image-11-1.png"
              />
              <div className="w-fit text-base sm:text-lg lg:text-[22px] [font-family:'Inter',Helvetica] font-bold text-black leading-normal tracking-[0]">
                Cornerstone Orphanage
              </div>
            </Link>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 sm:gap-4 lg:gap-6">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href || (pathname === '/' && item.href.startsWith('/#'))
            return (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`inline-flex items-center justify-center gap-[13.02px] p-2 sm:p-[13.02px] ${
                  isActive
                    ? 'border-b-[2px] sm:border-b-[3.91px] border-solid border-[#0a3d6d]'
                    : ''
                }`}
              >
                <div
                  className={`relative w-fit ${
                    isActive ? 'mt-[-2px] sm:mt-[-3.91px]' : ''
                  } [font-family:'Archivo',Helvetica] ${
                    isActive
                      ? 'font-bold text-[#0a3d6e] text-base sm:text-lg lg:text-2xl'
                      : 'font-medium text-[#0b1f33] text-sm sm:text-base lg:text-lg'
                  } tracking-[0] leading-normal whitespace-nowrap`}
                >
                  {item.label}
                </div>
              </Link>
            )
          })}
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
  )
}