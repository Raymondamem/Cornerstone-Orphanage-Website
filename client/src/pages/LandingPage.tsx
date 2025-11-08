import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ArticleOfTheDaySection } from "./sections/ArticleOfTheDaySection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactFooterSection } from "./sections/ContactFooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ImpactMetricsSection } from "./sections/ImpactMetricsSection";
import { MakeADifferenceSection } from "./sections/MakeADifferenceSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start w-full">
      <HeroBannerSection />
      <AboutUsSection />
      <ImpactMetricsSection />
      <MakeADifferenceSection />

      <section className="w-full relative">
        <img
          className="w-full h-auto object-cover"
          alt="Gallery"
          src="/figmaAssets/gallery.svg"
        />
      </section>

      <ArticleOfTheDaySection />

      <section className="w-full bg-white py-[72px] px-4 relative">
        <h2 className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-[56px] text-center tracking-[0] leading-[65.0px] mb-[72px]">
          Find us
        </h2>
        <div className="w-full max-w-[1439px] mx-auto">
          <img
            className="w-full h-auto object-cover"
            alt="Screenshot"
            src="/figmaAssets/screenshot-2025-11-08-081027-1.png"
          />
        </div>
      </section>

      <CallToActionSection />
      <ContactFooterSection />
    </div>
  );
};
