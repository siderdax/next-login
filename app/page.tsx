'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button onClick={() => signOut()}>LogOut</button>
        {session?.user?.email}
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => signIn()}>LogIn</button>
    </main>
  )
}
