import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

// Hardcoded hash for password: Sakshi@082089
// TODO: Move this to environment variable once .env parsing issue is resolved
const ADMIN_PASSWORD_HASH = '$2a$10$K8WjLmnSdYBBI2ZVa9qxVeMmD1jYGTZx/8lYWr1lDpEF5tbWhgMT6'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Check if email matches the admin email
        if (credentials.email === process.env.ADMIN_EMAIL) {
          // Verify password against the stored hash
          const isValid = await bcrypt.compare(
            credentials.password as string,
            ADMIN_PASSWORD_HASH
          )

          if (isValid) {
            return {
              id: '1',
              email: process.env.ADMIN_EMAIL,
              name: 'Admin'
            }
          }
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    }
  }
})
