import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import {  Roboto } from 'next/font/google'
import ToastProvider from '@/providers/toast-provider'
import Footer from '@/components/Footer'

const roboto=Roboto({
  weight:'500',
  subsets:['latin-ext']
})

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Financial dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
