import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { BlogPost, BlogFilter } from '@/lib/blog-types'
import { auth } from '@clerk/nextjs/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const filter = (searchParams.get('filter') as BlogFilter) || 'all'
    const includeDrafts = ['1', 'true'].includes((searchParams.get('includeDrafts') || '').toLowerCase())

    const db = await getDatabase()
    const collection = db.collection<BlogPost>('blogs')

    // Only include drafts if explicitly requested AND the user is authenticated
    let canSeeDrafts = false
    if (includeDrafts) {
      const { userId } = await auth()
      canSeeDrafts = Boolean(userId)
    }

    const now = new Date()
    const query: any = {}
    if (!canSeeDrafts) query.published = true

    switch (filter) {
      case 'today': {
        const startOfDay = new Date()
        startOfDay.setHours(0, 0, 0, 0)
        const endOfDay = new Date()
        endOfDay.setHours(23, 59, 59, 999)
        query.createdAt = { $gte: startOfDay, $lte: endOfDay }
        break
      }
      case 'lastMonth': {
        const thirtyDaysAgo = new Date()
        thirtyDaysAgo.setDate(now.getDate() - 30)
        query.createdAt = { $gte: thirtyDaysAgo }
        break
      }
      case 'latest':
        // No extra query; we'll just limit
        break
      case 'all':
      default:
        break
    }

    const blogs = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .limit(filter === 'latest' ? 10 : 100)
      .toArray()

    const serializedBlogs = blogs.map(blog => ({
      ...blog,
      _id: blog._id?.toString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
    }))

    return NextResponse.json(serializedBlogs)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    const { title, description, content, featuredImage, category, published = true } = body
    
    if (!title || !description || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const db = await getDatabase()
    const collection = db.collection<BlogPost>('blogs')
    
    const newBlog: Omit<BlogPost, '_id'> = {
      title,
      description,
      content,
      featuredImage,
      category,
      author: userId, // You can get user's name from Clerk if needed
      authorId: userId,
      published,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    const result = await collection.insertOne(newBlog as any)
    
    return NextResponse.json({
      _id: result.insertedId.toString(),
      ...newBlog,
      createdAt: newBlog.createdAt.toISOString(),
      updatedAt: newBlog.updatedAt.toISOString(),
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    )
  }
}
