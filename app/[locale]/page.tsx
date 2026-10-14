import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import { getContent } from '@/content'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Contributions } from '@/components/sections/Contributions'
import { Contact } from '@/components/sections/Contact'
import { profile } from '@/lib/profile'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const { metadata } = getContent(locale)
  return {
    ...metadata,
    authors: [{ name: profile.fullName }],
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', es: '/es', 'x-default': '/en' },
    },
    openGraph: {
      ...metadata,
      type: 'website',
      url: `/${locale}`,
      siteName: 'Hugo Riveros',
      locale: locale === 'en' ? 'en_US' : 'es_CO',
      alternateLocale: locale === 'en' ? 'es_CO' : 'en_US',
    },
    twitter: { card: 'summary_large_image', ...metadata },
  }
}

export default async function Portfolio({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const text = getContent(locale)
  return (
    <main id="main-content" className="container" tabIndex={-1}>
      <Hero text={text.hero} />
      <About text={text.about} />
      <Experience text={text.experience} />
      <Contributions text={text.contributions} />
      <Contact locale={locale} text={text.contact} />
    </main>
  )
}
