import { HeroBannerSection } from './components/HeroBannerSection'
import { AboutUsSection } from './components/AboutUsSection'
import { ImpactMetricsSection } from './components/ImpactMetricsSection'
import { MakeADifferenceSection } from './components/MakeADifferenceSection'
import { ArticleOfTheDaySection } from './components/ArticleOfTheDaySection'
import { CallToActionSection } from './components/CallToActionSection'
import { ContactFooterSection } from './components/ContactFooterSection'

export default function Home() {
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

      <section className="w-full bg-white py-12 sm:py-16 lg:py-[72px] px-4">
        <h2 className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-3xl sm:text-4xl lg:text-[56px] text-center tracking-[0] leading-tight lg:leading-[65.0px] mb-10 sm:mb-12 lg:mb-[72px]">
          Find us
        </h2>
        <div className="w-full max-w-[1439px] mx-auto">
          <img
            className="w-full h-auto object-cover rounded-lg"
            alt="Screenshot"
            src="/figmaAssets/screenshot-2025-11-08-081027-1.png"
          />
        </div>
      </section>

      <CallToActionSection />
      <ContactFooterSection />
    </div>
  )
}
