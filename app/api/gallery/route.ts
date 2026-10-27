import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity/client'
import { galleryImagesQuery } from '@/lib/sanity/queries'

export const revalidate = 300

export async function GET() {
  try {
    const images = await sanityClient.fetch(galleryImagesQuery)
    return NextResponse.json(images)
  } catch (error) {
    console.error('Error fetching public gallery images:', error)
    return NextResponse.json(
      { error: 'Failed to load gallery' },
      { status: 500 }
    )
  }
}
