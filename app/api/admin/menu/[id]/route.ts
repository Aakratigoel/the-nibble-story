import { NextResponse } from 'next/server'
import { auth } from '@/auth.config'
import { sanityClient } from '@/lib/sanity/client'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { id } = await params
    const body = await request.json()

    const updated = await sanityClient
      .patch(id)
      .set(body)
      .commit()

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating menu item:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { id } = await params
    await sanityClient.delete(id)
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('Error deleting menu item:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
