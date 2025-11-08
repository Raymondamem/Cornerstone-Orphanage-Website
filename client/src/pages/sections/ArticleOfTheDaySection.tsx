import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ArticleOfTheDaySection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 max-w-[1259px]">
        <div className="flex flex-col items-center gap-10">
          <h2 className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-[56px] text-center tracking-[0] leading-[65.0px]">
            Article of the day
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-20 w-full">
            <Card className="w-full lg:w-[546px] h-[546px] bg-white rounded-[56px] overflow-hidden border-0 shadow-none flex-shrink-0">
              <CardContent className="p-0 w-full h-full flex items-center justify-center">
                <img
                  className="w-[534px] h-[534px] object-cover"
                  alt="Image"
                  src="/figmaAssets/image-10.png"
                />
              </CardContent>
            </Card>

            <div className="flex flex-col items-start justify-center gap-8 flex-1">
              <div className="flex flex-col items-start gap-6 w-full max-w-[633px]">
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="[font-family:'Archivo',Helvetica] font-bold text-[#123c62] text-[28px] tracking-[0] leading-[32.5px]">
                    ORC Visit
                  </h3>

                  <p className="[font-family:'Archivo',Helvetica] font-medium text-[#0b1f33] text-[21px] tracking-[0] leading-[29.0px]">
                    Cornerstone Orphanage was founded in1999, by Mr. and Mrs.
                    Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a
                    vision to provide love, care, and support to children in
                    need.Cornerstone Orphanage was founded in1999, by Mr. and
                    Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi,
                    with a vision to provide love, care, and support to children
                    in need.Cornerstone Orphanage was founded in1999, by Mr. and
                    Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi,
                    with a vision to provide love, care, and support to children
                    in need.Cornerstone Orphanage was founded in1999, by Mr. and
                    Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi,
                    with a vision to provide love, care, and support to children
                    in need.Cornerstone Orphanage was founded in1999, by Mr. and
                    Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi,
                    with a vision to provide love, care, and support to children
                    in need
                  </p>
                </div>
              </div>

              <Button className="h-auto bg-[#164672] hover:bg-[#123c62] rounded-[59.89px] px-[31.25px] py-[20.83px]">
                <span className="[font-family:'Archivo',Helvetica] font-bold text-white text-lg">
                  Read more
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
