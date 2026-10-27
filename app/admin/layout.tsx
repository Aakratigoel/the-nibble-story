import { requireAuth } from '@/lib/auth'
import Sidebar from './components/Sidebar'
import { Toaster } from 'react-hot-toast'
import './admin.css'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await requireAuth()

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">
        {children}
      </main>
      <Toaster position="top-right" />
    </div>
  )
}
