'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'

type GalleryImage = {
  _id: string
  title: string
  description: string
  imageUrl: string
  alt: string
  categories: string[]
  size: string
  order: number
  isActive: boolean
}

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'setups', label: 'Setups' },
  { value: 'savory-bites', label: 'Savory Bites' },
  { value: 'desserts', label: 'Desserts' },
]

const SIZES = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
]

export default function GalleryManagementPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)

  // Upload form state
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadDescription, setUploadDescription] = useState('')
  const [uploadAlt, setUploadAlt] = useState('')
  const [uploadCategories, setUploadCategories] = useState<string[]>(['all'])
  const [uploadSize, setUploadSize] = useState('medium')

  // Edit form state
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editAlt, setEditAlt] = useState('')
  const [editCategories, setEditCategories] = useState<string[]>([])
  const [editSize, setEditSize] = useState('')

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/admin/gallery')
      if (response.ok) {
        const data = await response.json()
        setImages(data)
      } else {
        toast.error('Failed to fetch gallery images')
      }
    } catch (error) {
      toast.error('Error loading gallery images')
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async () => {
    if (!uploadFile || !uploadTitle.trim() || !uploadDescription.trim() || !uploadAlt.trim()) {
      toast.error('Please fill in all required fields')
      return
    }

    setUploading(true)
    const formData = new FormData()
    formData.append('file', uploadFile)
    formData.append('title', uploadTitle)
    formData.append('description', uploadDescription)
    formData.append('alt', uploadAlt)
    formData.append('categories', JSON.stringify(uploadCategories))
    formData.append('size', uploadSize)

    try {
      const response = await fetch('/api/admin/gallery/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        toast.success('Image uploaded successfully!')
        setShowUploadModal(false)
        resetUploadForm()
        fetchImages()
      } else {
        toast.error('Failed to upload image')
      }
    } catch (error) {
      toast.error('Error uploading image')
    } finally {
      setUploading(false)
    }
  }

  const handleEdit = async () => {
    if (!editingImage || !editTitle.trim() || !editDescription.trim() || !editAlt.trim()) {
      toast.error('Please fill in all required fields')
      return
    }

    try {
      const response = await fetch(`/api/admin/gallery/${editingImage._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editTitle,
          description: editDescription,
          alt: editAlt,
          categories: editCategories,
          size: editSize
        })
      })

      if (response.ok) {
        toast.success('Image updated successfully!')
        setShowEditModal(false)
        setEditingImage(null)
        fetchImages()
      } else {
        toast.error('Failed to update image')
      }
    } catch (error) {
      toast.error('Error updating image')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image? This action cannot be undone.')) return

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setImages(images.filter(img => img._id !== id))
        toast.success('Image deleted successfully!')
      } else {
        toast.error('Failed to delete image')
      }
    } catch (error) {
      toast.error('Error deleting image')
    }
  }

  const handleToggleActive = async (image: GalleryImage) => {
    try {
      const response = await fetch(`/api/admin/gallery/${image._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !image.isActive })
      })

      if (response.ok) {
        fetchImages()
        toast.success(`Image ${!image.isActive ? 'activated' : 'deactivated'}`)
      } else {
        toast.error('Failed to toggle image status')
      }
    } catch (error) {
      toast.error('Error toggling image status')
    }
  }

  const openEditModal = (image: GalleryImage) => {
    setEditingImage(image)
    setEditTitle(image.title)
    setEditDescription(image.description)
    setEditAlt(image.alt)
    setEditCategories(image.categories)
    setEditSize(image.size)
    setShowEditModal(true)
  }

  const resetUploadForm = () => {
    setUploadFile(null)
    setUploadTitle('')
    setUploadDescription('')
    setUploadAlt('')
    setUploadCategories(['all'])
    setUploadSize('medium')
  }

  const toggleCategory = (category: string, current: string[], setter: (cats: string[]) => void) => {
    if (current.includes(category)) {
      const filtered = current.filter(c => c !== category)
      setter(filtered.length > 0 ? filtered : ['all'])
    } else {
      setter([...current, category])
    }
  }

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1>Gallery Management</h1>
        <p>Upload and manage your gallery images</p>
      </div>

      <div className="admin-card">
        <button
          onClick={() => setShowUploadModal(true)}
          className="btn btn-primary"
        >
          📤 Upload New Image
        </button>
      </div>

      {images.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📸</div>
          <h3>No images yet</h3>
          <p>Upload your first gallery image to get started</p>
        </div>
      ) : (
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image._id} className="gallery-item" style={{ opacity: image.isActive ? 1 : 0.5 }}>
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-info">
                <h4 className="gallery-title">{image.title}</h4>
                <p className="gallery-description">{image.description}</p>
                <div style={{ fontSize: '12px', color: '#718096', marginBottom: '12px' }}>
                  {image.categories.join(', ')} • {image.size}
                </div>
                <div className="gallery-actions">
                  <button
                    onClick={() => handleToggleActive(image)}
                    className="btn btn-secondary"
                    style={{ fontSize: '12px', padding: '6px 12px' }}
                  >
                    {image.isActive ? 'Hide' : 'Show'}
                  </button>
                  <button
                    onClick={() => openEditModal(image)}
                    className="btn btn-primary"
                    style={{ fontSize: '12px', padding: '6px 12px' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(image._id)}
                    className="btn btn-danger"
                    style={{ fontSize: '12px', padding: '6px 12px' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Upload New Image</h3>
              <button onClick={() => setShowUploadModal(false)} className="modal-close">
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Image File *</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
              />
            </div>

            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                value={uploadTitle}
                onChange={(e) => setUploadTitle(e.target.value)}
                placeholder="e.g., Rasmalai Delights"
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={uploadDescription}
                onChange={(e) => setUploadDescription(e.target.value)}
                placeholder="Brief description of the image"
              />
            </div>

            <div className="form-group">
              <label>Alt Text *</label>
              <input
                type="text"
                value={uploadAlt}
                onChange={(e) => setUploadAlt(e.target.value)}
                placeholder="Describe the image for accessibility"
              />
            </div>

            <div className="form-group">
              <label>Categories *</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {CATEGORIES.map(cat => (
                  <label key={cat.value} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input
                      type="checkbox"
                      checked={uploadCategories.includes(cat.value)}
                      onChange={() => toggleCategory(cat.value, uploadCategories, setUploadCategories)}
                    />
                    {cat.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Display Size *</label>
              <select value={uploadSize} onChange={(e) => setUploadSize(e.target.value)}>
                {SIZES.map(size => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-footer">
              <button
                onClick={() => setShowUploadModal(false)}
                className="btn btn-secondary"
                disabled={uploading}
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className="btn btn-primary"
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Upload Image'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editingImage && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Edit Image</h3>
              <button onClick={() => setShowEditModal(false)} className="modal-close">
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Alt Text *</label>
              <input
                type="text"
                value={editAlt}
                onChange={(e) => setEditAlt(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Categories *</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {CATEGORIES.map(cat => (
                  <label key={cat.value} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input
                      type="checkbox"
                      checked={editCategories.includes(cat.value)}
                      onChange={() => toggleCategory(cat.value, editCategories, setEditCategories)}
                    />
                    {cat.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Display Size *</label>
              <select value={editSize} onChange={(e) => setEditSize(e.target.value)}>
                {SIZES.map(size => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-footer">
              <button
                onClick={() => setShowEditModal(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleEdit}
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
