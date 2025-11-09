'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function ArticleOfTheDaySection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-archivo)] font-semibold text-[#0b1f33] text-3xl sm:text-4xl lg:text-5xl text-center"
          >
            Article of the day
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-auto"
            >
              <Card className="w-full lg:w-[500px] xl:w-[550px] h-[280px] sm:h-[380px] lg:h-[480px] bg-white rounded-3xl lg:rounded-[3rem] overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0 w-full h-full">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    alt="ORC Visit"
                    src="/figmaAssets/image-10.png"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col items-start justify-center gap-6 sm:gap-8 flex-1"
            >
              <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
                <h3 className="font-[family-name:var(--font-archivo)] font-bold text-[#123c62] text-xl sm:text-2xl lg:text-2xl">
                  ORC Visit
                </h3>

                <p className="font-[family-name:var(--font-archivo)] font-medium text-[#0b1f33] text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-4">
                  Cornerstone Orphanage was founded in 1999, by Mr. and Mrs.
                  Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a
                  vision to provide love, care, and support to children in
                  need. Cornerstone Orphanage was founded in 1999, by Mr. and
                  Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi,
                  with a vision to provide love, care, and support to children
                  in need. Cornerstone Orphanage was founded in 1999, by Mr. and
                  Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi,
                  with a vision to provide love, care, and support to children
                  in need.
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#164672] hover:bg-[#123c62] rounded-full px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 shadow-md hover:shadow-lg transition-all duration-300">
                  <span className="font-[family-name:var(--font-archivo)] font-bold text-white text-sm sm:text-base">
                    Read more
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
