import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CodeCraft Studio: Empowering Your Web Vision with Kipdev - Freelance Web Developer',
  description: 'KipDev, your go-to web developer freelancer for top-notch website solutions. Boost your online presence with SEO-friendly designs and expertly crafted code. Lets elevate your brand together!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-[100vh] flex flex-col'>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
