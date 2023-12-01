import passport from 'passport'
import { OAuth2Strategy, Profile, VerifyFunction } from 'passport-google-oauth'

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      callbackURL: 'http://cola053.asuscomm.com:3000/passport/login',
      scope: ['profile'],
    } as any,
    function verify(
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyFunction
    ) {
      done(null, { user: profile.username })
    }
  )
)

export default passport
