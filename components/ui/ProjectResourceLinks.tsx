import type { PersonalProject, ProjectsContent } from '@/content/projects/types'
import { Icon } from '@/components/ui/Icon'

export function ProjectResourceLinks({ resources, text }: {
  resources: PersonalProject['resources']
  text: ProjectsContent
}) {
  if (!resources?.repository && !resources?.demo) return null

  return (
    <div className="project-resource-links">
      {[
        { href: resources.repository, label: text.repositoryLabel },
        { href: resources.demo, label: text.demoLabel },
      ].map(({ href, label }) => href ? (
        <a href={href} key={href} target="_blank" rel="noopener noreferrer">
          {label}<Icon name="arrow-up-right" />
          <span className="sr-only"> ({text.externalLinkLabel})</span>
        </a>
      ) : null)}
    </div>
  )
}
