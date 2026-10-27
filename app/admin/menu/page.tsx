'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

type MenuItem = {
  _id: string
  name: string
  category: string
  order: number
  isActive: boolean
}

const CATEGORIES = [
  { value: 'smallBites', label: 'Small Bites' },
  { value: 'largeBites', label: 'Large Bites' },
  { value: 'meals', label: 'Meals' },
  { value: 'curries', label: 'Curries' },
  { value: 'sides', label: 'Sides' },
  { value: 'desserts', label: 'Desserts' },
  { value: 'drinks', label: 'Drinks' },
]

export default function MenuManagementPage() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [newItemName, setNewItemName] = useState('')
  const [newItemCategory, setNewItemCategory] = useState('smallBites')
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [editName, setEditName] = useState('')

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/admin/menu')
      if (response.ok) {
        const data = await response.json()
        setItems(data)
      } else {
        toast.error('Failed to fetch menu items')
      }
    } catch (error) {
      toast.error('Error loading menu items')
    } finally {
      setLoading(false)
    }
  }

  const handleAddItem = async () => {
    if (!newItemName.trim()) {
      toast.error('Please enter an item name')
      return
    }

    const categoryItems = items.filter(item => item.category === newItemCategory)
    const maxOrder = categoryItems.length > 0
      ? Math.max(...categoryItems.map(item => item.order))
      : -1

    try {
      const response = await fetch('/api/admin/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newItemName,
          category: newItemCategory,
          order: maxOrder + 1,
          isActive: true
        })
      })

      if (response.ok) {
        const newItem = await response.json()
        setItems([...items, newItem])
        setNewItemName('')
        toast.success('Item added successfully!')
      } else {
        toast.error('Failed to add item')
      }
    } catch (error) {
      toast.error('Error adding item')
    }
  }

  const handleUpdateItem = async () => {
    if (!editingItem || !editName.trim()) return

    try {
      const response = await fetch(`/api/admin/menu/${editingItem._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName })
      })

      if (response.ok) {
        const updated = await response.json()
        setItems(items.map(item =>
          item._id === updated._id ? updated : item
        ))
        setEditingItem(null)
        setEditName('')
        toast.success('Item updated successfully!')
      } else {
        toast.error('Failed to update item')
      }
    } catch (error) {
      toast.error('Error updating item')
    }
  }

  const handleDeleteItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return

    try {
      const response = await fetch(`/api/admin/menu/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setItems(items.filter(item => item._id !== id))
        toast.success('Item deleted successfully!')
      } else {
        toast.error('Failed to delete item')
      }
    } catch (error) {
      toast.error('Error deleting item')
    }
  }

  const handleToggleActive = async (item: MenuItem) => {
    try {
      const response = await fetch(`/api/admin/menu/${item._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !item.isActive })
      })

      if (response.ok) {
        const updated = await response.json()
        setItems(items.map(i =>
          i._id === updated._id ? updated : i
        ))
        toast.success(`Item ${updated.isActive ? 'activated' : 'deactivated'}`)
      } else {
        toast.error('Failed to toggle item status')
      }
    } catch (error) {
      toast.error('Error toggling item status')
    }
  }

  const getItemsByCategory = (category: string) => {
    return items
      .filter(item => item.category === category)
      .sort((a, b) => a.order - b.order)
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
        <h1>Menu Management</h1>
        <p>Add, edit, and organize your menu items</p>
      </div>

      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Add New Item</h3>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'end' }}>
          <div className="form-group" style={{ flex: 2, marginBottom: 0 }}>
            <label>Item Name</label>
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="e.g., Avocado Chana Chaat"
              onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
            />
          </div>
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <label>Category</label>
            <select
              value={newItemCategory}
              onChange={(e) => setNewItemCategory(e.target.value)}
            >
              {CATEGORIES.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleAddItem} className="btn btn-primary">
            Add Item
          </button>
        </div>
      </div>

      {CATEGORIES.map(category => {
        const categoryItems = getItemsByCategory(category.value)

        return (
          <div key={category.value} className="menu-category">
            <div className="category-header">
              <h3 className="category-title">
                {category.label} ({categoryItems.length})
              </h3>
            </div>

            {categoryItems.length === 0 ? (
              <div className="empty-state">
                <p>No items in this category yet</p>
              </div>
            ) : (
              <div className="menu-items-list">
                {categoryItems.map(item => (
                  <div
                    key={item._id}
                    className="menu-item"
                    style={{ opacity: item.isActive ? 1 : 0.5 }}
                  >
                    {editingItem?._id === item._id ? (
                      <>
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          style={{ flex: 1, padding: '8px', fontSize: '14px' }}
                          autoFocus
                          onKeyPress={(e) => e.key === 'Enter' && handleUpdateItem()}
                        />
                        <div className="menu-item-actions">
                          <button
                            onClick={handleUpdateItem}
                            className="btn btn-success"
                            style={{ padding: '6px 12px', fontSize: '14px' }}
                          >
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setEditingItem(null)
                              setEditName('')
                            }}
                            className="btn btn-secondary"
                            style={{ padding: '6px 12px', fontSize: '14px' }}
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="menu-item-name">{item.name}</span>
                        <div className="menu-item-actions">
                          <button
                            onClick={() => handleToggleActive(item)}
                            className="icon-btn"
                            title={item.isActive ? 'Hide' : 'Show'}
                          >
                            {item.isActive ? '👁️' : '👁️‍🗨️'}
                          </button>
                          <button
                            onClick={() => {
                              setEditingItem(item)
                              setEditName(item.name)
                            }}
                            className="icon-btn"
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item._id)}
                            className="icon-btn"
                            title="Delete"
                          >
                            🗑️
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
