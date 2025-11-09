import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { auth } from '@clerk/nextjs/server'

// Shape stored in MongoDB
// collection: "settings_homepage"
// document id: "singleton"
interface HomepageSettingsDoc {
  _id: string // "singleton"
  titleText?: string
  titleContent?: string // Lexical JSON string
  imageUrl?: string
  updatedAt: Date
}

export async function GET() {
  try {
    const db = await getDatabase()
    const col = db.collection<HomepageSettingsDoc>('settings_homepage')
    const doc = await col.findOne({ _id: 'singleton' })

    const data = doc
      ? {
          titleText: doc.titleText ?? 'Every Child Deserves Love, Family, and a Future Filled with Hope',
          titleContent: doc.titleContent ?? '',
          imageUrl: doc.imageUrl ?? '/figmaAssets/group-2.png',
          updatedAt: doc.updatedAt.toISOString(),
        }
      : {
          titleText: 'Every Child Deserves Love, Family, and a Future Filled with Hope',
          titleContent: '',
          imageUrl: '/figmaAssets/group-2.png',
          updatedAt: new Date().toISOString(),
        }

    return NextResponse.json(data)
  } catch (err) {
    console.error('Error fetching homepage settings:', err)
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { titleText, titleContent, imageUrl } = body as {
      titleText?: string
      titleContent?: string
      imageUrl?: string
    }

    const db = await getDatabase()
    const col = db.collection<HomepageSettingsDoc>('settings_homepage')

    const update: Partial<HomepageSettingsDoc> = { updatedAt: new Date() }
    if (typeof titleText === 'string') update.titleText = titleText
    if (typeof titleContent === 'string') update.titleContent = titleContent
    if (typeof imageUrl === 'string') update.imageUrl = imageUrl

    await col.updateOne(
      { _id: 'singleton' },
      { $set: update, $setOnInsert: { _id: 'singleton' } },
      { upsert: true }
    )

    const saved = await col.findOne({ _id: 'singleton' })

    return NextResponse.json({
      titleText: saved?.titleText ?? '',
      titleContent: saved?.titleContent ?? '',
      imageUrl: saved?.imageUrl ?? '/figmaAssets/group-2.png',
      updatedAt: saved?.updatedAt?.toISOString?.() ?? new Date().toISOString(),
    })
  } catch (err) {
    console.error('Error updating homepage settings:', err)
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 })
  }
}