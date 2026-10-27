export const menuItemsQuery = `*[_type == "menuItem" && isActive == true] | order(category asc, order asc) {
  _id,
  name,
  category,
  order
}`

export const allMenuItemsQuery = `*[_type == "menuItem"] | order(category asc, order asc) {
  _id,
  name,
  category,
  order,
  isActive
}`

export const galleryImagesQuery = `*[_type == "galleryImage" && isActive == true] | order(order asc) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  alt,
  categories,
  size,
  order
}`

export const allGalleryImagesQuery = `*[_type == "galleryImage"] | order(order asc) {
  _id,
  title,
  description,
  image,
  "imageUrl": image.asset->url,
  alt,
  categories,
  size,
  order,
  isActive
}`
