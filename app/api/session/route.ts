import { cookies } from 'next/headers'
import { getIronSession } from 'iron-session'
import { NextRequest } from 'next/server'

type SessionData = {
  data: string
}

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), {
    password: '6PYYdYGKzYp8D9uQCUBTpMEMjRjs0M07',
    cookieName: 'iron-session-cookie',
  })

  console.log(session)

  if (session) {
    return Response.json(session)
  } else {
    return Response.json({
      data: 'No data',
    })
  }
}

export async function POST(req: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), {
    password: '6PYYdYGKzYp8D9uQCUBTpMEMjRjs0M07',
    cookieName: 'iron-session-cookie',
  })

  const { data = 'No data' } = (await req.json()) as {
    data: string
  }

  session.data = data
  await session.save()

  console.log(session)
  return Response.json(session)
}

export async function DELETE() {
  const session = await getIronSession<SessionData>(cookies(), {
    password: '6PYYdYGKzYp8D9uQCUBTpMEMjRjs0M07',
    cookieName: 'iron-session-cookie',
  })

  session.destroy()

  return Response.json({
    data: 'No data',
  })
}
