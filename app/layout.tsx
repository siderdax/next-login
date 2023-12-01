import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Login Sample',
  description: 'Login sample with NextAuth, Passport',
}

type Props = {
  children?: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  )
}
