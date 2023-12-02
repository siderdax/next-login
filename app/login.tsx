'use client'
import { signIn, signOut } from 'next-auth/react'

type Props = {
  session: any
}

export default function Login(props: Props) {
  if (props.session) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <button onClick={() => signOut()}>LogOut</button>
        {props.session?.user?.email}
      </main>
    )
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <button onClick={() => signIn()}>LogIn</button>
    </main>
  )
}
