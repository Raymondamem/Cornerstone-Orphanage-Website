'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const cardsData = [
  {
    icon: '/figmaAssets/icons8-charity-box-100.png',
    title: 'Donate',
    description:
      'Your contributions help us provide essential care, education, and opportunities for children.',
    buttonText: 'Donate now',
    buttonAction: 'donate'
  },
  {
    icon: '/figmaAssets/icons8-volunteering-100.png',
    title: 'Volunteer',
    description:
      'Share your skills, time and heart by volunteering to support our programs and activities.',
    buttonText: 'Volunteer now',
    buttonAction: 'volunteer'
  },
  {
    icon: '/figmaAssets/icons8-megaphone-100.png',
    title: 'Spread the word',
    description:
      'Help us raise awareness by sharing our mission stories with your community.',
    buttonText: 'Share on socials',
    buttonAction: 'share'
  },
]

export function MakeADifferenceSection() {
  const handleCardAction = (action: string) => {
    switch (action) {
      case 'donate':
        // Scroll to contact form for donation
        const contactElement = document.getElementById('contact')
        contactElement?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'volunteer':
        // Scroll to contact form for volunteering
        const volunteerElement = document.getElementById('contact')
        volunteerElement?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'share':
        // Share functionality (could open share dialog or social media)
        if (navigator.share) {
          navigator.share({
            title: 'Cornerstone Orphanage',
            text: 'Help us make a difference in children\'s lives',
            url: window.location.href,
          })
        } else {
          // Fallback for browsers that don't support Web Share API
          navigator.clipboard?.writeText(window.location.href)
          alert('Link copied to clipboard!')
        }
        break
    }
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-archivo)] font-semibold text-[#0b1f33] text-3xl sm:text-4xl lg:text-5xl text-center mb-10 sm:mb-14 lg:mb-16"
        >
          Let us make a difference
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-14">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="w-full max-w-md mx-auto"
            >
              <Card className="h-full min-h-[480px] bg-[#fffbef] rounded-3xl border-2 sm:border-4 border-[#fff1d8] shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-between pt-10 sm:pt-12 px-6 sm:px-8 pb-8 h-full">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <motion.img
                        whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                        alt={card.title}
                        src={card.icon}
                      />
                      <h3 className="font-[family-name:var(--font-archivo)] font-semibold text-[#0b1f33] text-2xl sm:text-3xl text-center whitespace-pre-line">
                        {card.title}
                      </h3>
                    </div>
                    <p className="w-full font-[family-name:var(--font-archivo)] font-medium text-[#0b1f33] text-sm sm:text-base lg:text-lg text-center leading-relaxed mb-6 sm:mb-8">
                      {card.description}
                    </p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.15) + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Button 
                      onClick={() => handleCardAction(card.buttonAction)}
                      className="w-full bg-[#164672] hover:bg-[#123c62] rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <span className="font-[family-name:var(--font-archivo)] font-bold text-white text-sm sm:text-base">
                        {card.buttonText}
                      </span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#164672] hover:bg-[#164672]/90 rounded-full px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 shadow-md hover:shadow-lg transition-all duration-300">
              <span className="text-sm sm:text-base font-[family-name:var(--font-archivo)] font-bold text-white">
                Join our mission today
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
