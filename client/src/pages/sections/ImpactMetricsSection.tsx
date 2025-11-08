import React from "react";
import { Separator } from "@/components/ui/separator";

const metricsData = [
  {
    number: "65+",
    description: "Children\nhoused",
  },
  {
    number: "70+",
    description: "Children\nin school",
  },
  {
    number: "100+",
    description: "Scholarships\ngiven",
  },
];

export const ImpactMetricsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-10">
      <div className="flex items-center justify-center gap-8 px-4">
        {metricsData.map((metric, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-2">
              <div className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-7xl text-center tracking-[0] leading-[83.5px]">
                {metric.number}
              </div>
              <div className="[font-family:'Archivo',Helvetica] font-medium text-[#0b1f33] text-[28px] text-center tracking-[0] leading-[32.5px] whitespace-pre-line">
                {metric.description}
              </div>
            </div>
            {index < metricsData.length - 1 && (
              <Separator
                orientation="vertical"
                className="h-[198px] w-0.5 bg-gray-300"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
