'use client'

import { Button } from '../../components/ui/button'

export function CallToActionSection() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[751px] bg-white">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
        src="/figmaAssets/image-9.png"
      />

      <div className="absolute inset-0 bg-[#051a2e] opacity-80" />

      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-[72px] max-w-[749px] w-full">
          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl text-center leading-tight lg:leading-[83.5px] [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0]">
              Support a child today
            </h2>

            <p className="font-normal text-white text-base sm:text-xl lg:text-[28px] text-center leading-relaxed lg:leading-[35.3px] [font-family:'Archivo',Helvetica] tracking-[0]">
              Cornerstone Orphanage provides a safe and nurturing home where
              children are empowered to dream, learn, and discover their
              purpose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="h-auto w-full sm:w-auto px-4 sm:px-6 lg:px-[31.25px] py-3 sm:py-4 lg:py-[20.83px] rounded-[59.89px] border-2 border-white bg-transparent hover:bg-white/10"
            >
              <span className="text-base sm:text-lg lg:text-2xl [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] leading-normal whitespace-nowrap">
                Join our mission
              </span>
            </Button>

            <Button className="h-auto w-full sm:w-auto px-4 sm:px-6 lg:px-[31.25px] py-3 sm:py-4 lg:py-[20.83px] bg-[#164672] rounded-[59.89px] hover:bg-[#164672]/90">
              <span className="text-base sm:text-lg lg:text-2xl [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] leading-normal whitespace-nowrap">
                Support a child today
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
