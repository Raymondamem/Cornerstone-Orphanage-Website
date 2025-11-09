'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'

interface Blog {
  _id: string
  title: string
  description: string
  featuredImage?: string
  category?: string
  createdAt: string
}

export default function BlogPage() {
  const [latestPosts, setLatestPosts] = useState<Blog[]>([])
  const [lastMonthPosts, setLastMonthPosts] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const [latestRes, lastMonthRes] = await Promise.all([
        fetch('/api/blogs?filter=latest'),
        fetch('/api/blogs?filter=lastMonth'),
      ])

      if (latestRes.ok) setLatestPosts(await latestRes.json())
      if (lastMonthRes.ok) setLastMonthPosts(await lastMonthRes.json())
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const articleOfTheDay = latestPosts[0]

  return (
    <div className="min-h-screen bg-[#fffdf7]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Latest Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f33] mb-8 sm:mb-12 [font-family:'Archivo',Helvetica]">
            Latest
          </h2>
          {loading ? (
            <div className="text-gray-600">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {latestPosts.map((post) => (
                <Card key={post._id} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={post.featuredImage || '/figmaAssets/image-10.png'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f33] mb-3 [font-family:'Archivo',Helvetica]">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-4">
                      {post.description}
                    </p>
                    <Link href={`/blog/${post._id}`}>
                      <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-6 py-2">
                        Read more
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Article of the Day Section */}
        {articleOfTheDay && (
          <section className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f33] mb-8 sm:mb-12 [font-family:'Archivo',Helvetica]">
              Article of the day
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3">
                  <img
                    src={articleOfTheDay.featuredImage || '/figmaAssets/image-10.png'}
                    alt={articleOfTheDay.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#164672] mb-4 sm:mb-6 [font-family:'Archivo',Helvetica]">
                    {articleOfTheDay.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                    {articleOfTheDay.description}
                  </p>
                  <Link href={`/blog/${articleOfTheDay._id}`}>
                    <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-8 py-3">
                      Read more
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Last Month Section */}
        <section className="mb-12 sm:mb-16">
          <div className="border-2 border-[#164672] rounded-lg p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164672] mb-8 sm:mb-12 [font-family:'Archivo',Helvetica]">
              Last month
            </h2>
            {loading ? (
              <div className="text-gray-600">Loading...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {lastMonthPosts.map((post) => (
                  <Card key={post._id} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={post.featuredImage || '/figmaAssets/image-3.png'}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f33] mb-3 [font-family:'Archivo',Helvetica]">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-4">
                        {post.description}
                      </p>
                      <Link href={`/blog/${post._id}`}>
                        <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-6 py-2">
                          Read more
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Support Section */}
        <section className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="/figmaAssets/group-2.png"
            alt="Support background"
            className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 [font-family:'Archivo',Helvetica]">
              Support a child today
            </h2>
            <p className="text-white text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl leading-relaxed [font-family:'Archivo',Helvetica]">
              Cornerstone Orphanage provides a safe and nurturing home where children are empowered to dream, learn, and discover their purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#164672] rounded-full px-8 py-3 text-lg"
              >
                Join our mission
              </Button>
              <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-8 py-3 text-lg">
                Support a child today
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full object-cover"
                alt="Cornerstone Orphanage Logo"
                src="/figmaAssets/image-11-1.png"
              />
              <div className="text-xl font-bold text-black [font-family:'Inter',Helvetica]">
                Cornerstone Orphanage
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <a href="/" className="text-[#0b1f33] hover:text-[#164672] font-medium">Home</a>
              <a href="/about" className="text-[#0b1f33] hover:text-[#164672] font-medium">About</a>
              <a href="/contact" className="text-[#0b1f33] hover:text-[#164672] font-medium">Contact us</a>
              <a href="/gallery" className="text-[#0b1f33] hover:text-[#164672] font-medium">Gallery</a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <span className="text-gray-600 text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <span className="text-gray-600 text-sm">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <span className="text-gray-600 text-sm">in</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Cornerstone Orphanage All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
