'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'

interface ArticleDetailProps {
  article: {
    id: number
    title: string
    content: string
    image: string
    author?: string
    date?: string
    category: string
  }
  onBack: () => void
}

export function ArticleDetailView({ article, onBack }: ArticleDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 mb-6 sm:mb-8 text-[#164672] hover:text-[#123c62] font-medium transition-colors duration-300"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-[family-name:var(--font-archivo)] text-sm sm:text-base">
          Back to Blog
        </span>
      </motion.button>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f33] mb-4 sm:mb-6 font-[family-name:var(--font-archivo)] leading-tight">
          {article.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 text-sm sm:text-base">
          {article.date && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-[family-name:var(--font-archivo)]">
                {article.date}
              </span>
            </div>
          )}
          
          {article.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-[family-name:var(--font-archivo)]">
                {article.author}
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span className="font-[family-name:var(--font-archivo)] bg-[#164672] text-white px-3 py-1 rounded-full text-xs sm:text-sm">
              {article.category}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Article Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full mb-8 sm:mb-12 rounded-2xl overflow-hidden shadow-xl"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
        />
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="prose prose-lg max-w-none mb-8 sm:mb-12"
      >
        <div className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed font-[family-name:var(--font-archivo)] space-y-6">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#fffbef] rounded-2xl p-6 sm:p-8 text-center border-2 border-[#fff1d8]"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f33] mb-3 sm:mb-4 font-[family-name:var(--font-archivo)]">
          Support Our Mission
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-6 font-[family-name:var(--font-archivo)] leading-relaxed">
          Help us continue making a difference in children's lives through your support and donations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#164672] hover:bg-[#123c62] text-white rounded-full px-6 sm:px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <span className="font-[family-name:var(--font-archivo)] font-bold">
                Support a child today
              </span>
            </Button>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="border-2 border-[#164672] text-[#164672] hover:bg-[#164672] hover:text-white rounded-full px-6 sm:px-8 py-3 font-bold font-[family-name:var(--font-archivo)] transition-all duration-300"
          >
            Back to Blog
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}