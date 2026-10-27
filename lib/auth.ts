import { auth } from '@/auth.config'
import { redirect } from 'next/navigation'

export async function requireAuth() {
  const session = await auth()
  if (!session) {
    redirect('/auth/login')
  }
  return session
}

export async function getSession() {
  return await auth()
}
