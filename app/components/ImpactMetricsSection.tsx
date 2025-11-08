'use client'

import * as React from 'react'
import { Separator } from '@/components/ui/separator'

const metricsData = [
  {
    number: '65+',
    description: 'Children\nhoused',
  },
  {
    number: '70+',
    description: 'Children\nin school',
  },
  {
    number: '100+',
    description: 'Scholarships\ngiven',
  },
]

export function ImpactMetricsSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
        {metricsData.map((metric, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-2">
              <div className="[font-family:'Archivo',Helvetica] font-semibold text-[#0b1f33] text-4xl sm:text-5xl lg:text-7xl text-center tracking-[0] leading-tight lg:leading-[83.5px]">
                {metric.number}
              </div>
              <div className="[font-family:'Archivo',Helvetica] font-medium text-[#0b1f33] text-lg sm:text-xl lg:text-[28px] text-center tracking-[0] leading-tight lg:leading-[32.5px] whitespace-pre-line">
                {metric.description}
              </div>
            </div>
            {index < metricsData.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden sm:block h-[120px] sm:h-[160px] lg:h-[198px] w-0.5 bg-gray-300"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
