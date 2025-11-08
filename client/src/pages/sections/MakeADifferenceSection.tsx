import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const cardsData = [
  {
    icon: "/figmaAssets/icons8-charity-box-100.png",
    title: "Donate",
    description:
      "Your contributions help us provide essential care, education, and opportunities for children.",
    titleWidth: "w-[121px]",
  },
  {
    icon: "/figmaAssets/icons8-volunteering-100.png",
    title: "Volunteer",
    description:
      "Share your skills, time and heart by volunteering to support our programs and activities.",
    titleWidth: "w-40",
  },
  {
    icon: "/figmaAssets/icons8-megaphone-100.png",
    title: "Spread\nthe word",
    description:
      "Help us raise awareness by sharing our mission stories with your community.",
    titleWidth: "w-[143px]",
  },
];

export const MakeADifferenceSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[72px] px-5">
      <div className="max-w-[1360px] mx-auto">
        <h2 className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-[56px] text-center tracking-[0] leading-[65.0px] mb-[72px]">
          Let us make a difference
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-16 mb-[72px]">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              className="w-96 h-[477px] bg-[#fffbef] rounded-[48px] border-4 border-[#fff1d8] shadow-[0px_1px_64px_#ffedcb73] overflow-hidden"
            >
              <CardContent className="flex flex-col items-center pt-16 px-8 h-full">
                <div
                  className={`flex flex-col ${card.titleWidth} items-center gap-4 mb-[42px]`}
                >
                  <img
                    className="w-[100px] h-[100px] object-cover"
                    alt={card.title}
                    src={card.icon}
                  />
                  <h3 className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-4xl text-center tracking-[0] leading-[41.8px] whitespace-pre-line">
                    {card.title}
                  </h3>
                </div>
                <p className="w-[263px] [font-family:'Archivo',Helvetica] font-medium text-[#0b1f33] text-[22px] text-center tracking-[0] leading-[25.5px]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#164672] hover:bg-[#164672]/90 rounded-[59.89px] px-[31.25px] py-[20.83px] h-auto">
            <span className="text-lg [font-family:'Archivo',Helvetica] font-bold text-white tracking-[0] leading-[normal]">
              Join our mission today
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
