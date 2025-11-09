'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from './Navbar'

export function HeroBannerSection() {
  return (
    <section className="relative w-full bg-[#fffdf7]">
      <Navbar />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-4 py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row w-full max-w-[1298px] items-center justify-between gap-6 sm:gap-8 lg:gap-8">
          <div className="flex flex-col w-full lg:max-w-[633px] items-start sm:items-start items-center gap-8 sm:gap-10 lg:gap-12">
            <div className="flex flex-col items-start sm:items-start items-center gap-4 sm:gap-6 w-full text-center sm:text-left">
              <h1 className="relative w-full mt-[-1.00px] [font-family:'Archivo',Helvetica] font-bold text-[#0b1f33] text-3xl sm:text-4xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[74.2px]">
                Every Child Deserves Love, Family, and a Future Filled with Hope
              </h1>

              <p className="w-full [font-family:'Archivo',Helvetica] font-medium text-[#0b1f33] text-base sm:text-lg lg:text-2xl leading-relaxed lg:leading-[30.2px] tracking-[0]">
                Cornerstone Orphanage provides a safe and nurturing home where
                children are empowered to dream, learn, and discover their
                purpose.
              </p>
            </div>

            <div className="inline-flex flex-row sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="outline"
                className="h-auto flex-1 sm:w-auto inline-flex items-center justify-center gap-[13.02px] px-3 sm:px-6 lg:px-[31.25px] py-3 sm:py-4 lg:py-[20.83px] rounded-[59.89px] overflow-hidden border-2 border-solid border-[#164672] bg-transparent hover:bg-transparent"
              >
                <span className="relative w-fit mt-[-2.00px] [font-family:'Archivo',Helvetica] font-bold text-[#164672] text-sm sm:text-base lg:text-lg tracking-[0] leading-normal whitespace-nowrap">
                  Join our mission
                </span>
              </Button>

              <Button className="h-auto flex-1 sm:w-auto inline-flex items-center justify-center gap-[13.02px] px-3 sm:px-6 lg:px-[31.25px] py-3 sm:py-4 lg:py-[20.83px] bg-[#164672] hover:bg-[#164672]/90 rounded-[59.89px] overflow-hidden">
                <span className="mt-[-2px] sm:mt-[-3.91px] text-sm sm:text-base lg:text-lg leading-normal relative w-fit [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                  Support a child today
                </span>
              </Button>
            </div>
          </div>

          <img
            className="relative w-full lg:max-w-[664.18px] h-auto hidden sm:block"
            alt="Children at Cornerstone Orphanage"
            src="/figmaAssets/group-2.png"
          />
        </div>
      </div>
    </section>
  )
}
