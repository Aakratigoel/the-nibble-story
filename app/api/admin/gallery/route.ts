import { NextResponse } from 'next/server'
import { auth } from '@/auth.config'
import { sanityClient } from '@/lib/sanity/client'
import { allGalleryImagesQuery } from '@/lib/sanity/queries'

export async function GET() {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const images = await sanityClient.fetch(allGalleryImagesQuery)
    return NextResponse.json(images)
  } catch (error) {
    console.error('Error fetching gallery images:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
