import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getContent } from '@/content'
import { personalProjectIds } from '@/content/projects/types'
import { isLocale } from '@/lib/i18n'
import { profile } from '@/lib/profile'
import { projectPath } from '@/lib/project-path'
import { ProjectStudy } from '@/components/sections/ProjectStudy'
import { Icon } from '@/components/ui/Icon'

type Props = { params: Promise<{ locale: string; projectId: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return personalProjectIds.map((projectId) => ({ projectId }))
}

async function projectContent(params: Props['params']) {
  const { locale, projectId } = await params
  if (!isLocale(locale)) notFound()
  const text = getContent(locale).projects
  const entry = text.entries.find((project) => project.id === projectId)
  if (!entry) notFound()
  return { locale, text, entry }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, entry } = await projectContent(params)
  const title = `${entry.name} | Hugo Riveros`
  const description = entry.summary
  const images = entry.resources?.cover ? [{
    url: entry.resources.cover.src,
    width: entry.resources.cover.width,
    height: entry.resources.cover.height,
    alt: entry.resources.cover.alt,
  }] : [{ url: `/${locale}/opengraph-image` }]

  return {
    title,
    description,
    authors: [{ name: profile.fullName }],
    alternates: {
      canonical: projectPath(locale, entry.id),
      languages: {
        en: projectPath('en', entry.id),
        es: projectPath('es', entry.id),
        'x-default': projectPath('en', entry.id),
      },
    },
    openGraph: {
      title, description, images, type: 'article',
      url: projectPath(locale, entry.id),
      siteName: 'Hugo Riveros',
      locale: locale === 'en' ? 'en_US' : 'es_CO',
      alternateLocale: locale === 'en' ? 'es_CO' : 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description, images },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { locale, text, entry } = await projectContent(params)
  const returnHref = `/${locale}#project-${entry.id}`

  return (
    <main id="main-content" className="container project-page" tabIndex={-1}>
      <Link className="project-back-link" href={returnHref}><Icon name="arrow-right" />{text.backLabel}</Link>
      <ProjectStudy entry={entry} text={text} />
      <Link className="project-back-link project-back-bottom" href={returnHref}><Icon name="arrow-right" />{text.backLabel}</Link>
    </main>
  )
}
