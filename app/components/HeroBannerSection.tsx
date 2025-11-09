"use client";

import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", active: true },
  { label: "About us", active: false },
  { label: "Contact us", active: false },
];

export function HeroBannerSection() {
  return (
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
  );
}
