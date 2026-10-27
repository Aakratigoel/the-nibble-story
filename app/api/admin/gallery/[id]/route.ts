import { NextResponse } from 'next/server'
import { auth } from '@/auth.config'
import { sanityClient } from '@/lib/sanity/client'

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const body = await request.json()

    const updated = await sanityClient
      .patch(params.id)
      .set(body)
      .commit()

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating gallery image:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    // Get the image document to find the asset reference
    const image = await sanityClient.getDocument(params.id)

    // Delete the document
    await sanityClient.delete(params.id)

    // Optionally delete the asset (image file) from Sanity
    if (image && (image as any).image?.asset?._ref) {
      try {
        await sanityClient.delete((image as any).image.asset._ref)
      } catch (assetError) {
        console.error('Error deleting asset:', assetError)
        // Continue even if asset deletion fails
      }
    }

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('Error deleting gallery image:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
