'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Menu', href: '/admin/menu', icon: '🍽️' },
    { name: 'Gallery', href: '/admin/gallery', icon: '📸' },
  ]

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/auth/login' })
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Image
          src="/nibble_story_logo.png"
          alt="The Nibble Story"
          width={50}
          height={50}
          className="sidebar-logo"
        />
        <h2>Admin Portal</h2>
      </div>

      <nav className="sidebar-nav">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleSignOut} className="sidebar-logout">
          <span className="sidebar-icon">🚪</span>
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  )
}
