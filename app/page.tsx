import { getIronSession } from 'iron-session'
import Login from './login'
import { cookies } from 'next/headers'

async function getIronSessionData() {
  const session = await getIronSession(cookies(), {
    password: '6PYYdYGKzYp8D9uQCUBTpMEMjRjs0M07',
    cookieName: 'iron-session-cookie',
  })
}

export default async function Home() {
  const session = await getIronSessionData()
  console.log('page session:')
  console.log(session)

  return <Login session={session} />
}
