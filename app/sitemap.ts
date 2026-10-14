import type { MetadataRoute } from 'next'
import { profile } from '@/lib/profile'
import { locales } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${profile.siteUrl}/${locale}`]),
  )
  return locales.map((locale) => ({
    url: `${profile.siteUrl}/${locale}`,
    alternates: { languages },
  }))
}
