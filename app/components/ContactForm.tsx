'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      newsletter: e.target.checked
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitMessage('Thank you for joining our mission! We will be in touch soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      newsletter: false
    })
    setIsSubmitting(false)
    
    // Clear success message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  return (
    <section id="contact" className="w-full bg-[#fffdf7] py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f33] mb-4 sm:mb-6 [font-family:'Archivo',Helvetica]">
            Join Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-[#0b1f33] [font-family:'Archivo',Helvetica] font-medium max-w-2xl mx-auto leading-relaxed">
            Ready to make a difference in a child's life? Fill out the form below and become part of our mission to provide love, care, and hope to children in need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12"
        >
          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <p className="text-green-700 text-center font-medium">{submitMessage}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0b1f33] mb-2 [font-family:'Archivo',Helvetica]">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164672] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0b1f33] mb-2 [font-family:'Archivo',Helvetica]">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164672] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#0b1f33] mb-2 [font-family:'Archivo',Helvetica]">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164672] focus:border-transparent transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#0b1f33] mb-2 [font-family:'Archivo',Helvetica]">
                How would you like to help? (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164672] focus:border-transparent transition-all duration-200 resize-vertical"
                placeholder="Tell us about your interests: volunteering, donations, sponsorship, or other ways you'd like to contribute..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleCheckboxChange}
                className="mt-1 w-4 h-4 text-[#164672] border-gray-300 rounded focus:ring-[#164672]"
              />
              <label htmlFor="newsletter" className="text-sm text-[#0b1f33] [font-family:'Archivo',Helvetica]">
                I would like to receive updates and newsletters about Cornerstone Orphanage's activities and impact.
              </label>
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#164672] hover:bg-[#164672]/90 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-full text-lg [font-family:'Archivo',Helvetica] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Submitting...' : 'Join Our Mission'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}