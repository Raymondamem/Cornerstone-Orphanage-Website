import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contentSections = [
  {
    title: "Our History",
    description:
      "Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
  },
  {
    title: "Our Mission",
    description:
      "To nurture and empower orphaned and vulnerable children with love, education, and faith in a family-like environment.",
  },
  {
    title: "Our Vision",
    description:
      "To raise responsible, educated, and confident children who will become leaders and positive changemakers in Nigeria and beyond.",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fffbef] py-20">
      <div className="container mx-auto max-w-[1259px] px-4">
        <div className="flex flex-col items-center gap-10">
          <h2 className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-[56px] text-center tracking-[0] leading-[65.0px]">
            About Us
          </h2>

          <div className="flex items-center gap-20 w-full">
            <Card className="w-[546px] h-[546px] bg-white rounded-[56px] overflow-hidden border-0 shadow-none">
              <CardContent className="p-0 w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Image"
                  src="/figmaAssets/image-3.png"
                />
              </CardContent>
            </Card>

            <div className="flex flex-col items-start justify-center gap-8">
              <div className="flex flex-col w-[633px] items-start gap-6">
                {contentSections.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-2 w-full"
                  >
                    <h3 className="[font-family:'Archivo',Helvetica] font-semibold text-[#123c62] text-[28px] tracking-[0] leading-[32.5px]">
                      {section.title}
                    </h3>
                    <p className="[font-family:'Archivo',Helvetica] font-medium text-[#0b1f33] text-[21px] tracking-[0] leading-[24.4px]">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button className="bg-[#164672] hover:bg-[#123c62] rounded-[59.89px] px-[31.25px] py-[20.83px] h-auto">
                  <span className="[font-family:'Archivo',Helvetica] font-bold text-white text-lg tracking-[0] whitespace-nowrap">
                    Support a child today
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
