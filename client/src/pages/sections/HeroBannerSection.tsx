import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", active: true },
  { label: "About us", active: false },
  { label: "Contact us", active: false },
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fffdf7]">
      <header className="flex items-center justify-center px-4 pt-14 pb-0">
        <nav className="flex items-center justify-between gap-24 px-[15.62px] py-[13.02px] bg-[#fffaef] rounded-[104.16px]">
          <div className="inline-flex items-center justify-center gap-[13.02px] rounded-[59.89px]">
            <div className="inline-flex items-center gap-1">
              <img
                className="relative w-10 h-10 rounded-[456px] object-cover"
                alt="Cornerstone Orphanage Logo"
                src="/figmaAssets/image-11-1.png"
              />
              <div className="w-fit [font-family:'Inter',Helvetica] font-bold text-black text-[22px] leading-[normal] tracking-[0]">
                Cornerstone Orphanage
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className={`inline-flex items-center justify-center gap-[13.02px] p-[13.02px] ${
                  item.active
                    ? "border-b-[3.91px] border-solid border-[#0a3d6d]"
                    : ""
                }`}
              >
                <div
                  className={`relative w-fit ${
                    item.active ? "mt-[-3.91px]" : ""
                  } [font-family:'Archivo',Helvetica] ${
                    item.active
                      ? "font-bold text-[#0a3d6e] text-2xl"
                      : "font-medium text-[#0b1f33] text-lg"
                  } tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-4">
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-[13.02px] px-[31.25px] py-[20.83px] rounded-[59.89px] overflow-hidden border-2 border-solid border-[#164672] bg-transparent hover:bg-transparent"
            >
              <span className="relative w-fit mt-[-2.00px] [font-family:'Archivo',Helvetica] font-bold text-[#164672] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                Join our mission
              </span>
            </Button>

            <Button className="h-auto inline-flex items-center justify-center gap-[13.02px] px-[31.25px] py-[20.83px] bg-[#164672] hover:bg-[#164672]/90 rounded-[59.89px] overflow-hidden">
              <span className="relative w-fit mt-[-3.91px] [font-family:'Archivo',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                Support a child today
              </span>
            </Button>
          </div>
        </nav>
      </header>

      <div className="flex items-center justify-center px-4 py-20">
        <div className="flex w-full max-w-[1298px] items-center justify-between gap-8">
          <div className="flex flex-col w-full max-w-[633px] items-start gap-12">
            <div className="flex flex-col items-start gap-6 w-full">
              <h1 className="relative w-full mt-[-1.00px] [font-family:'Archivo',Helvetica] font-bold text-[#0b1f33] text-[64px] tracking-[0] leading-[74.2px]">
                Every Child Deserves Love, Family, and a Future Filled with Hope
              </h1>

              <p className="w-full [font-family:'Archivo',Helvetica] font-medium text-[#0b1f33] text-2xl leading-[30.2px] tracking-[0]">
                Cornerstone Orphanage provides a safe and nurturing home where
                children are empowered to dream, learn, and discover their
                purpose.
              </p>
            </div>

            <div className="inline-flex items-center gap-4">
              <Button
                variant="outline"
                className="h-auto inline-flex items-center justify-center gap-[13.02px] px-[31.25px] py-[20.83px] rounded-[59.89px] overflow-hidden border-2 border-solid border-[#164672] bg-transparent hover:bg-transparent"
              >
                <span className="relative w-fit mt-[-2.00px] [font-family:'Archivo',Helvetica] font-bold text-[#164672] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                  Join our mission
                </span>
              </Button>

              <Button className="h-auto inline-flex items-center justify-center gap-[13.02px] px-[31.25px] py-[20.83px] bg-[#164672] hover:bg-[#164672]/90 rounded-[59.89px] overflow-hidden">
                <span className="mt-[-3.91px] text-lg leading-[normal] relative w-fit [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                  Support a child today
                </span>
              </Button>
            </div>
          </div>

          <img
            className="relative w-full max-w-[664.18px] h-auto"
            alt="Children at Cornerstone Orphanage"
            src="/figmaAssets/group-2.png"
          />
        </div>
      </div>
    </section>
  );
};
