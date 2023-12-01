import { getIronSession } from 'iron-session/edge'
import { createEdgeRouter } from 'next-connect'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

const router = createEdgeRouter<NextRequest, NextFetchEvent>()

router.use(async (req) => {
  const res = NextResponse.next()
  const session = await getIronSession(req, res, {
    cookieName: 'next-login_session',
    password: '/PAjZALXiVuvyb5yGO7keIyVoTepXTWeVttkNICU9tg=',
    cookieOptions: {
      httpOnly: false,
      secure: false,
    },
  })

  return res
})

router.all(() => {
  // default if none of the above matches
  return NextResponse.next()
})

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const session = (await getIronSession(req, res, {
    cookieName: 'next-login_session',
    password: '/PAjZALXiVuvyb5yGO7keIyVoTepXTWeVttkNICU9tg=',
    cookieOptions: {
      httpOnly: false,
      secure: false,
    },
  })) as any

  if (!session.user) {
    session.user = 'mid kyi'
    await session.save()
  }

  return res
}
