'use client'

import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { Navbar } from '../components/Navbar'

// Mock blog data
const latestPosts = [
  {
    id: 1,
    title: "ORC Visit",
    description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
    image: "/figmaAssets/image-10.png",
    category: "Visit"
  },
  {
    id: 2,
    title: "ORC Visit",
    description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
    image: "/figmaAssets/image-3.png",
    category: "Visit"
  },
  {
    id: 3,
    title: "ORC Visit", 
    description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
    image: "/figmaAssets/image-9.png",
    category: "Visit"
  }
]

const articleOfTheDay = {
  title: "ORC Visit",
  description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need. Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
  image: "/figmaAssets/image-10.png"
}

const lastMonthPosts = [
  {
    id: 4,
    title: "ORC Visit",
    description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
    image: "/figmaAssets/image-10.png",
    category: "Visit"
  },
  {
    id: 5,
    title: "ORC Visit",
    description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
    image: "/figmaAssets/image-3.png",
    category: "Visit"
  },
  {
    id: 6,
    title: "ORC Visit",
    description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
    image: "/figmaAssets/image-9.png",
    category: "Visit"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fffdf7]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Latest Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f33] mb-8 sm:mb-10 lg:mb-12 font-[family-name:var(--font-archivo)]"
          >
            Latest
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f33] mb-3 font-[family-name:var(--font-archivo)]">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300">
                        Read more
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Article of the Day Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f33] mb-8 sm:mb-10 lg:mb-12 font-[family-name:var(--font-archivo)]"
          >
            Article of the day
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={articleOfTheDay.image}
                  alt={articleOfTheDay.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-3/5 p-6 sm:p-8 lg:p-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#164672] mb-4 sm:mb-6 font-[family-name:var(--font-archivo)]">
                  {articleOfTheDay.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  {articleOfTheDay.description}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300">
                    Read more
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Last Month Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-2 border-[#164672] rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164672] mb-8 sm:mb-10 lg:mb-12 font-[family-name:var(--font-archivo)]">
              Last month
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {lastMonthPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f33] mb-3 font-[family-name:var(--font-archivo)]">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300">
                          Read more
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Support Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="/figmaAssets/group-2.png"
            alt="Support background"
            className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-[family-name:var(--font-archivo)] text-balance">
              Support a child today
            </h2>
            <p className="text-white text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-4xl leading-relaxed font-[family-name:var(--font-archivo)]">
              Cornerstone Orphanage provides a safe and nurturing home where children are empowered to dream, learn, and discover their purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#164672] rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-bold font-[family-name:var(--font-archivo)] transition-all duration-300"
              >
                Join our mission
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Support a child today
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-10 lg:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <img
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                alt="Cornerstone Orphanage Logo"
                src="/figmaAssets/image-11-1.png"
              />
              <div className="text-lg sm:text-xl font-bold text-black font-[family-name:var(--font-inter)]">
                Cornerstone Orphanage
              </div>
            </motion.div>

            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              <motion.a whileHover={{ y: -2 }} href="/" className="text-[#0b1f33] hover:text-[#164672] font-medium text-sm sm:text-base transition-colors">Home</motion.a>
              <motion.a whileHover={{ y: -2 }} href="/#about" className="text-[#0b1f33] hover:text-[#164672] font-medium text-sm sm:text-base transition-colors">About</motion.a>
              <motion.a whileHover={{ y: -2 }} href="/#contact" className="text-[#0b1f33] hover:text-[#164672] font-medium text-sm sm:text-base transition-colors">Contact us</motion.a>
              <motion.a whileHover={{ y: -2 }} href="/blog" className="text-[#0b1f33] hover:text-[#164672] font-medium text-sm sm:text-base transition-colors">Blog</motion.a>
            </nav>

            <div className="flex items-center gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#164672] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#164672] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">ig</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#164672] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-gray-200 text-center"
          >
            <p className="text-gray-600 text-xs sm:text-sm font-[family-name:var(--font-archivo)]">
              © 2025 Cornerstone Orphanage All Rights Reserved
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}