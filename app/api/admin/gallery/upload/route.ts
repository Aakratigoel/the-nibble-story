import { NextResponse } from 'next/server'
import { auth } from '@/auth.config'
import { sanityClient } from '@/lib/sanity/client'

export async function POST(request: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const alt = formData.get('alt') as string
    const categories = JSON.parse(formData.get('categories') as string)
    const size = formData.get('size') as string

    if (!file) {
      return new NextResponse('No file provided', { status: 400 })
    }

    // Convert File to Buffer for Sanity upload
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload image to Sanity
    const asset = await sanityClient.assets.upload('image', buffer, {
      filename: file.name,
      contentType: file.type
    })

    // Get the count of existing gallery images to set order
    const existingImages = await sanityClient.fetch(
      `count(*[_type == "galleryImage"])`
    )

    // Create gallery image document
    const image = await sanityClient.create({
      _type: 'galleryImage',
      title,
      description,
      alt,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id
        }
      },
      categories,
      size,
      order: existingImages,
      isActive: true
    })

    return NextResponse.json(image)
  } catch (error) {
    console.error('Error uploading image:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
