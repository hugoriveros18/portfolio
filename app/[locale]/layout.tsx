import type { Metadata, Viewport } from 'next'
import { Onest } from 'next/font/google'
import { notFound } from 'next/navigation'
import { locales, isLocale } from '@/lib/i18n'
import { getContent } from '@/content'
import { profile } from '@/lib/profile'
import { themeScript } from '@/lib/theme'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '../globals.css'

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-onest',
  display: 'swap',
})

export const metadata: Metadata = { metadataBase: new URL(profile.siteUrl) }
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF7F2' },
    { media: '(prefers-color-scheme: dark)', color: '#181715' },
  ],
}

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const text = getContent(locale)
  return (
    <html
      lang={locale}
      id="top"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={onest.variable}>
        <a href="#main-content" className="skip-link">
          {text.navigation.skip}
        </a>
        <Header locale={locale} text={text.navigation} />
        {children}
        <Footer text={text.footer} />
      </body>
    </html>
  )
}
