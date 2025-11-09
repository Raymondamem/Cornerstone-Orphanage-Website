'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/app/components/Navbar'
import Link from 'next/link'

interface Blog {
  _id: string
  title: string
  description: string
  content: string
  featuredImage?: string
  category?: string
  author: string
  createdAt: string
  updatedAt: string
}

function convertLexicalJsonToHtml(lexicalJson: string): string {
  try {
    const state = JSON.parse(lexicalJson)
    const root = state?.root
    if (!root || !Array.isArray(root.children)) return ''

    const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    const walk = (node: any): string => {
      switch (node.type) {
        case 'text':
          return escapeHtml(node.text || '')
        case 'paragraph':
          return `<p>${(node.children || []).map(walk).join('')}</p>`
        case 'heading': {
          const tag = `h${node.tag || 2}`
          return `<${tag}>${(node.children || []).map(walk).join('')}</${tag}>`
        }
        case 'list': {
          const tag = node.listType === 'number' ? 'ol' : 'ul'
          return `<${tag}>${(node.children || []).map(walk).join('')}</${tag}>`
        }
        case 'listitem':
          return `<li>${(node.children || []).map(walk).join('')}</li>`
        case 'quote':
          return `<blockquote>${(node.children || []).map(walk).join('')}</blockquote>`
        case 'linebreak':
          return '<br />'
        default:
          return (node.children || []).map(walk).join('')
      }
    }

    return (root.children as any[]).map(walk).join('')
  } catch (_e) {
    return ''
  }
}

export default function BlogPostPage() {
  const params = useParams()
  const id = params.id as string
  const { isSignedIn } = useUser()
  
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    fetchBlog()
  }, [id])

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/blogs/${id}`)
      if (response.ok) {
        const data = await response.json()
        setBlog(data)
        setHtmlContent(convertLexicalJsonToHtml(data.content))
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fffdf7]">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="text-lg">Loading blog post...</div>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#fffdf7]">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fffdf7]">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Edit button for signed-in admin */}
        {isSignedIn && (
          <div className="mb-4 flex justify-end">
            <Link href={`/admin/blogs/${blog._id}/edit`}>
              <Button variant="outline" size="sm">
                Edit Post
              </Button>
            </Link>
          </div>
        )}

        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        {/* Category and Date */}
        <div className="flex gap-4 mb-4 text-sm text-gray-600">
          {blog.category && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {blog.category}
            </span>
          )}
          <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0b1f33] mb-6 [font-family:'Archivo',Helvetica]">
          {blog.title}
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {blog.description}
        </p>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Back button */}
        <div className="border-t pt-8">
          <Link href="/blog">
            <Button className="bg-[#164672] hover:bg-[#164672]/90">
              Back to All Posts
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
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

            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <a href="/" className="text-[#0b1f33] hover:text-[#164672] font-medium">Home</a>
              <a href="/about" className="text-[#0b1f33] hover:text-[#164672] font-medium">About</a>
              <a href="/contact" className="text-[#0b1f33] hover:text-[#164672] font-medium">Contact us</a>
              <a href="/gallery" className="text-[#0b1f33] hover:text-[#164672] font-medium">Gallery</a>
            </nav>

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
