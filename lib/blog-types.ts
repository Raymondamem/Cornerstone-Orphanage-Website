import { ObjectId } from 'mongodb'

export interface BlogPost {
  _id?: ObjectId
  title: string
  description: string
  content: string // Lexical JSON as string
  featuredImage?: string // Cloudinary URL
  category?: string
  author: string
  authorId: string // Clerk user ID
  createdAt: Date
  updatedAt: Date
  published: boolean
}

export interface BlogPostInput {
  title: string
  description: string
  content: string
  featuredImage?: string
  category?: string
  published?: boolean
}

export type BlogFilter = 'latest' | 'today' | 'lastMonth' | 'all'
