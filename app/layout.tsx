import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/UI/Sidebar';
import {AuthContextProvider} from './_utils/auth-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes to Myself',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}