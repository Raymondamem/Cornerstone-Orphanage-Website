import { HeroBannerSection } from './components/HeroBannerSection'
import { AboutUsSection } from './components/AboutUsSection'
import { ImpactMetricsSection } from './components/ImpactMetricsSection'
import { MakeADifferenceSection } from './components/MakeADifferenceSection'
import { ArticleOfTheDaySection } from './components/ArticleOfTheDaySection'
import { CallToActionSection } from './components/CallToActionSection'
import { ContactFooterSection } from './components/ContactFooterSection'
import { AnimatedGallery } from './components/AnimatedGallery'
import { ContactForm } from './components/ContactForm'

export default function Home() {
  return (
    <div className="flex flex-col items-start w-full">
      <HeroBannerSection />
      <div id="about">
        <AboutUsSection />
      </div>
      <ImpactMetricsSection />
      <MakeADifferenceSection />

      <AnimatedGallery />

      <ArticleOfTheDaySection />

      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4">
        <h2 className="font-[family-name:var(--font-archivo)] font-semibold text-[#0b1f33] text-3xl sm:text-4xl lg:text-5xl text-center mb-10 sm:mb-12 lg:mb-14">
          Find us
        </h2>
        <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img
            className="w-full h-auto object-cover"
            alt="Location Map"
            src="/figmaAssets/screenshot-2025-11-08-081027-1.png"
          />
        </div>
      </section>

      <CallToActionSection />
      <ContactForm />
      <div id="contact" className="w-full">
        <ContactFooterSection />
      </div>
    </div>
  )
}
