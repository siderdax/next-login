import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log('[jwt callback]')
      console.log('user:')
      console.log(user)
      console.log('token:')
      console.log(token)
      console.log('account:')
      console.log(account)
      console.log('profile:')
      console.log(profile)
      console.log('---------------')
      return token
    }
  },
  useSecureCookies: false,
}

export default authOptions
