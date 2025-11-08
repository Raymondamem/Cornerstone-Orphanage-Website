'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const cardsData = [
  {
    icon: '/figmaAssets/icons8-charity-box-100.png',
    title: 'Donate',
    description:
      'Your contributions help us provide essential care, education, and opportunities for children.',
    titleWidth: 'w-[121px]',
  },
  {
    icon: '/figmaAssets/icons8-volunteering-100.png',
    title: 'Volunteer',
    description:
      'Share your skills, time and heart by volunteering to support our programs and activities.',
    titleWidth: 'w-40',
  },
  {
    icon: '/figmaAssets/icons8-megaphone-100.png',
    title: 'Spread\nthe word',
    description:
      'Help us raise awareness by sharing our mission stories with your community.',
    titleWidth: 'w-[143px]',
  },
]

export function MakeADifferenceSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-[72px] px-4 sm:px-5">
      <div className="max-w-[1360px] mx-auto">
        <h2 className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-3xl sm:text-4xl lg:text-[56px] text-center tracking-[0] leading-tight lg:leading-[65.0px] mb-10 sm:mb-12 lg:mb-[72px]">
          Let us make a difference
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-10 sm:mb-12 lg:mb-[72px]">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              className="w-full max-w-96 mx-auto h-auto sm:h-[450px] lg:h-[477px] bg-[#fffbef] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] border-2 sm:border-4 border-[#fff1d8] shadow-[0px_1px_32px_#ffedcb50] sm:shadow-[0px_1px_64px_#ffedcb73] overflow-hidden"
            >
              <CardContent className="flex flex-col items-center pt-10 sm:pt-12 lg:pt-16 px-6 sm:px-8 h-full">
                <div
                  className={`flex flex-col ${card.titleWidth} items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-[42px]`}
                >
                  <img
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[100px] lg:h-[100px] object-cover"
                    alt={card.title}
                    src={card.icon}
                  />
                  <h3 className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-2xl sm:text-3xl lg:text-4xl text-center tracking-[0] leading-tight lg:leading-[41.8px] whitespace-pre-line">
                    {card.title}
                  </h3>
                </div>
                <p className="w-full max-w-[263px] [font-family:'Archivo',Helvetica] font-medium text-[#0b1f33] text-base sm:text-lg lg:text-[22px] text-center tracking-[0] leading-relaxed lg:leading-[25.5px]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#164672] hover:bg-[#164672]/90 rounded-[59.89px] px-4 sm:px-6 lg:px-[31.25px] py-3 sm:py-4 lg:py-[20.83px] h-auto">
            <span className="text-sm sm:text-base lg:text-lg [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] leading-normal">
              Join our mission today
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
