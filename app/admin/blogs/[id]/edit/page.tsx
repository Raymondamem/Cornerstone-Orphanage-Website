'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LexicalEditor from '@/components/LexicalEditor'
import { uploadToCloudinary } from '@/lib/cloudinary'
import Link from 'next/link'

export default function EditBlogPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    featuredImage: '',
    category: '',
    published: true,
  })
  const [isUploadingImage, setIsUploadingImage] = useState(false)

  useEffect(() => {
    fetchBlog()
  }, [id])

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/blogs/${id}`)
      if (response.ok) {
        const blog = await response.json()
        setFormData({
          title: blog.title,
          description: blog.description,
          content: blog.content,
          featuredImage: blog.featuredImage || '',
          category: blog.category || '',
          published: blog.published,
        })
      } else {
        alert('Blog not found')
        router.push('/admin/blogs')
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
      alert('Error loading blog')
    } finally {
      setFetching(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Blog updated successfully!')
        router.push('/admin/blogs')
      } else {
        const error = await response.json()
        alert(`Failed to update blog: ${error.error}`)
      }
    } catch (error) {
      console.error('Error updating blog:', error)
      alert('Error updating blog')
    } finally {
      setLoading(false)
    }
  }

  const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploadingImage(true)
    try {
      const url = await uploadToCloudinary(file)
      setFormData({ ...formData, featuredImage: url })
      alert('Featured image uploaded!')
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image')
    } finally {
      setIsUploadingImage(false)
    }
  }

  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading blog...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
          <Link href="/admin/blogs">
            <Button variant="outline">Back to Blogs</Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blog Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the blog post"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., Visit, Event, News"
                />
              </div>

              <div>
                <Label>Featured Image</Label>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFeaturedImageUpload}
                      className="hidden"
                      disabled={isUploadingImage}
                    />
                    <Button type="button" disabled={isUploadingImage} asChild>
                      <span>
                        {isUploadingImage ? 'Uploading...' : 'Upload Featured Image'}
                      </span>
                    </Button>
                  </label>
                  {formData.featuredImage && (
                    <img
                      src={formData.featuredImage}
                      alt="Featured"
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                </div>
              </div>

              <div>
                <Label>Content *</Label>
                <LexicalEditor
                  initialContent={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  onImageUpload={(url) => console.log('Image uploaded:', url)}
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4"
                />
                <Label htmlFor="published" className="cursor-pointer">
                  Published
                </Label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={loading || !formData.title || !formData.description || !formData.content}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  {loading ? 'Updating...' : 'Update Blog Post'}
                </Button>
                <Link href="/admin/blogs">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
