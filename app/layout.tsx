import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import PortfolioHeader from './ui/main-sections/PortfolioHeader'
import Email from './ui/components/Email'
import './globals.css'
import SocialMedia from './ui/components/SocialMedia'

const monserrat = Montserrat({ subsets: ['latin'] })

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
      <body className={`${monserrat.className} bg-firstColor`}>
        <PortfolioHeader />
        {children}
        <SocialMedia />
        <Email />
      </body>
    </html>
  )
}
