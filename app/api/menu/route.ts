import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity/client'
import { menuItemsQuery } from '@/lib/sanity/queries'

export const revalidate = 300

export async function GET() {
  try {
    const items = await sanityClient.fetch(menuItemsQuery)
    return NextResponse.json(items)
  } catch (error) {
    console.error('Error fetching public menu items:', error)
    return NextResponse.json(
      { error: 'Failed to load menu' },
      { status: 500 }
    )
  }
}
