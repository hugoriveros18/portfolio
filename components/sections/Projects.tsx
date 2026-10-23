import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { projectPath } from '@/lib/project-path'
import type { ProjectsContent } from '@/content/projects/types'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { Icon } from '@/components/ui/Icon'
import { DisclosureNavigation } from '@/components/ui/DisclosureNavigation'
import { ProgressiveGroup } from '@/components/ui/ProgressiveGroup'
import { ProjectResourceLinks } from '@/components/ui/ProjectResourceLinks'
import { ProjectFragmentRedirect } from '@/components/ui/ProjectFragmentRedirect'

type Project = ProjectsContent['entries'][number]

function ProjectOverview({ entry, text, locale }: { entry: Project; text: ProjectsContent; locale: Locale }) {
  const anchor = `project-${entry.id}`
  const href = projectPath(locale, entry.id)
  const cover = entry.resources?.cover

  return (
    <article className="personal-project" id={anchor} aria-labelledby={`${anchor}-heading`}>
      <div className={`project-overview${cover ? ' has-cover' : ''}`}>
        <div className="project-introduction">
          <p className="eyebrow">{entry.category}{entry.status ? ` · ${entry.status}` : ''}</p>
          <h3 id={`${anchor}-heading`}>{entry.name}</h3>
          <p>{entry.summary}</p>
          <ul className="tags">
            {entry.featuredTechnologies.map((name) => <li key={name}>{name}</li>)}
          </ul>
          <div className="project-entry-actions">
            <Link className="project-read-link" href={href}>
              {text.viewProjectLabel}<Icon name="arrow-right" />
            </Link>
          </div>
          <ProjectResourceLinks resources={entry.resources} text={text} />
        </div>
        {cover ? (
          <figure className="project-cover">
            <Image src={cover.src} width={cover.width} height={cover.height} alt={cover.alt} sizes="(max-width: 800px) 100vw, 45vw" />
            <figcaption>{cover.caption}</figcaption>
          </figure>
        ) : null}
      </div>
      <div className="project-focus">
        <p className="eyebrow">{text.focusLabel}</p>
        <p>{entry.focus}</p>
      </div>
    </article>
  )
}

export function Projects({ text, locale }: { text: ProjectsContent; locale: Locale }) {
  if (!text.entries.length) return null
  const initial = text.entries.slice(0, 3)
  const remaining = text.entries.slice(3)

  return (
    <section className="section personal-projects" id="projects" aria-labelledby="projects-heading">
      <SectionIntro number="03" eyebrow={text.eyebrow} title={text.title} description={text.introduction} id="projects-heading" />
      <ProjectFragmentRedirect projects={text.entries.map((entry) => ({ anchor: `project-${entry.id}`, href: projectPath(locale, entry.id) }))} />
      <DisclosureNavigation>
        {initial.map((entry) => <ProjectOverview key={entry.id} entry={entry} text={text} locale={locale} />)}
        {remaining.length ? (
          <ProgressiveGroup id="more-projects" showMoreLabel={text.showMoreLabel} showLessLabel={text.showLessLabel} count={remaining.length}>
            {remaining.map((entry) => <ProjectOverview key={entry.id} entry={entry} text={text} locale={locale} />)}
          </ProgressiveGroup>
        ) : null}
      </DisclosureNavigation>
    </section>
  )
}
