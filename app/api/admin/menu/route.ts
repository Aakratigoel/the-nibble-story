import { NextResponse } from 'next/server'
import { auth } from '@/auth.config'
import { sanityClient } from '@/lib/sanity/client'
import { allMenuItemsQuery } from '@/lib/sanity/queries'

export async function GET() {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const items = await sanityClient.fetch(allMenuItemsQuery)
    return NextResponse.json(items)
  } catch (error) {
    console.error('Error fetching menu items:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const body = await request.json()

    const item = await sanityClient.create({
      _type: 'menuItem',
      ...body
    })

    return NextResponse.json(item)
  } catch (error) {
    console.error('Error creating menu item:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
