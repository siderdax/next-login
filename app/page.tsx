'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const session: any = undefined
  // const { data: session } = useSession()

  // console.log('page session:')
  // console.log(session)

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
