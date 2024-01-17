import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import PortfolioHeader from './ui/main-sections/PortfolioHeader'
import Email from './ui/components/Email'
import './globals.css'
import SocialMedia from './ui/components/SocialMedia'

const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hugo Riveros | Software Developer',
  description: 'Hugo Riveros Fajardo Professional Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${onest.className} bg-firstColor`}>
        <PortfolioHeader />
        {children}
        <SocialMedia />
        <Email />
      </body>
    </html>
  )
}
