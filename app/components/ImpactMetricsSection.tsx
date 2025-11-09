'use client'

import * as React from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Separator } from '@/components/ui/separator'

const metricsData = [
  {
    number: 65,
    suffix: '+',
    description: 'Children\nhoused',
  },
  {
    number: 70,
    suffix: '+',
    description: 'Children\nin school',
  },
  {
    number: 100,
    suffix: '+',
    description: 'Scholarships\ngiven',
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  React.useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <div ref={ref} className="font-[family-name:var(--font-archivo)] font-semibold text-[#0b1f33] text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-center">
      {displayValue}{suffix}
    </div>
  )
}

export function ImpactMetricsSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-16 px-4 sm:px-6 max-w-6xl mx-auto">
        {metricsData.map((metric, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center gap-2 sm:gap-3 flex-1"
            >
              <Counter value={metric.number} suffix={metric.suffix} />
              <div className="font-[family-name:var(--font-archivo)] font-medium text-[#0b1f33] text-xs sm:text-base lg:text-lg xl:text-xl text-center whitespace-pre-line leading-snug">
                {metric.description}
              </div>
            </motion.div>
            {index < metricsData.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Separator
                  orientation="vertical"
                  className="h-20 sm:h-32 lg:h-40 w-0.5 bg-gray-300"
                />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
