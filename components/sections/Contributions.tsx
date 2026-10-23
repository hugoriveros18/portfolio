import type { ContributionsContent } from '@/content/contributions/types'
import { ContributionDiagram } from '@/components/ui/ContributionDiagram'
import { ContributionComparison } from '@/components/ui/ContributionComparison'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { Icon } from '@/components/ui/Icon'
import { DisclosureNavigation } from '@/components/ui/DisclosureNavigation'
import { ProgressiveGroup } from '@/components/ui/ProgressiveGroup'

type Contribution = ContributionsContent['entries'][number]

function ContributionStory({
  entry,
  text,
}: {
  entry: Contribution
  text: ContributionsContent
}) {
  return (
    <article
      className="contribution-story"
      id={`contribution-${entry.id}`}
      aria-labelledby={`contribution-${entry.id}-heading`}
    >
      <header className="contribution-heading">
        <p className="eyebrow">{entry.company} / {entry.name}</p>
        <h3 id={`contribution-${entry.id}-heading`}>{entry.headline}</h3>
      </header>
      <div className={`contribution-feature${entry.diagram || entry.comparison ? ' has-diagram' : ''}`}>
        <div className="contribution-overview">
          <p className="contribution-summary">{entry.summary}</p>
          <p className="contribution-ownership">{entry.ownership}</p>
          <div className="contribution-impact">
            <p className="eyebrow">{text.impactLabel}</p>
            <p>{entry.impact}</p>
          </div>
        </div>
        {entry.comparison ? (
          <ContributionComparison comparison={entry.comparison} />
        ) : entry.diagram ? (
          <ContributionDiagram diagram={entry.diagram} />
        ) : null}
      </div>
      <div className="contribution-capabilities">
        <p className="eyebrow">{text.capabilitiesLabel}</p>
        <ul className="capability-list">
          {entry.capabilities.map((capability) => (
            <li key={capability.id}>
              <h4>{capability.title}</h4>
              <p>{capability.description}</p>
            </li>
          ))}
        </ul>
      </div>
      {entry.gallery ? (
        <ImageGallery gallery={entry.gallery} imageAction={text.imageAction} imageClose={text.imageClose} />
      ) : null}
      {entry.details.length > 0 ? (
        <div className="contribution-details">
          <p className="eyebrow">{text.detailsLabel}</p>
          {entry.details.map((detail) => (
            <details key={detail.id} id={`contribution-${entry.id}-${detail.id}`}>
              <summary>{detail.title}</summary>
              <div className="contribution-detail-copy">
                {detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {detail.diagram ? <ContributionDiagram diagram={detail.diagram} /> : null}
              </div>
            </details>
          ))}
        </div>
      ) : null}
      {entry.references?.length ? (
        <div className="contribution-references">
          <p className="eyebrow">{text.referencesLabel}</p>
          <ul>
            {entry.references.map((reference) => (
              <li key={reference.href}>
                <a href={reference.href} target="_blank" rel="noopener noreferrer">
                  {reference.label}
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> ({text.externalLinkLabel})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  )
}

function ContributionIndex({ entries, label }: { entries: ContributionsContent['entries']; label: string }) {
  return (
    <nav className="contribution-index" aria-label={label}>
      {entries.map((entry) => (
        <a href={`#contribution-${entry.id}`} key={entry.id}>
          <span className="contribution-index-company">{entry.company}</span>
          <span className="contribution-index-name">{entry.name}</span>
          <Icon name="arrow-up-right" />
        </a>
      ))}
    </nav>
  )
}

export function Contributions({ text }: { text: ContributionsContent }) {
  if (text.entries.length === 0) return null
  const initial = text.entries.slice(0, 3)
  const remaining = text.entries.slice(3)

  return (
    <section className="section professional-contributions" id="contributions" aria-labelledby="contributions-heading">
      <SectionIntro number="04" eyebrow={text.eyebrow} title={text.title} description={text.introduction} id="contributions-heading" />
      <DisclosureNavigation>
        <ContributionIndex entries={initial} label={text.title} />
        <div className="contribution-list">
          {initial.map((entry) => <ContributionStory entry={entry} text={text} key={entry.id} />)}
        </div>
        {remaining.length ? (
          <ProgressiveGroup id="more-contributions" showMoreLabel={text.showMoreLabel} showLessLabel={text.showLessLabel} count={remaining.length}>
            <ContributionIndex entries={remaining} label={text.showMoreLabel} />
            <div className="contribution-list">
              {remaining.map((entry) => <ContributionStory entry={entry} text={text} key={entry.id} />)}
            </div>
          </ProgressiveGroup>
        ) : null}
      </DisclosureNavigation>
    </section>
  )
}
