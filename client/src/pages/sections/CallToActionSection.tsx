import React from "react";
import { Button } from "@/components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[751px] bg-white">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
        src="/figmaAssets/image-9.png"
      />

      <div className="absolute inset-0 bg-[#051a2e] opacity-80" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-[72px] max-w-[749px] w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-7xl text-center leading-[83.5px] [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
              Support a child today
            </h2>

            <p className="font-normal text-white text-[28px] text-center leading-[35.3px] [font-family:'Archivo',Helvetica] tracking-[0]">
              Cornerstone Orphanage provides a safe and nurturing home where
              children are empowered to dream, learn, and discover their
              purpose.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="h-auto px-[31.25px] py-[20.83px] rounded-[59.89px] border-2 border-white bg-transparent hover:bg-white/10"
            >
              <span className="text-2xl [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] leading-normal whitespace-nowrap">
                Join our mission
              </span>
            </Button>

            <Button className="h-auto px-[31.25px] py-[20.83px] bg-[#164672] rounded-[59.89px] hover:bg-[#164672]/90">
              <span className="text-2xl [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] leading-normal whitespace-nowrap">
                Support a child today
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
