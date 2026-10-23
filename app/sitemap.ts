import type { MetadataRoute } from 'next'
import { profile } from '@/lib/profile'
import { locales } from '@/lib/i18n'
import { personalProjectIds } from '@/content/projects/types'
import { projectPath } from '@/lib/project-path'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${profile.siteUrl}/${locale}`]),
  )
  const pages = locales.map((locale) => ({
    url: `${profile.siteUrl}/${locale}`,
    alternates: { languages },
  }))
  const projects = personalProjectIds.flatMap((id) => locales.map((locale) => ({
    url: `${profile.siteUrl}${projectPath(locale, id)}`,
    alternates: { languages: Object.fromEntries(locales.map((language) => [language, `${profile.siteUrl}${projectPath(language, id)}`])) },
  })))
  return [...pages, ...projects]
}
