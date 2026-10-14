import type { ContributionsContent } from '@/content/contributions/types'
import { ContributionDiagram } from '@/components/ui/ContributionDiagram'
import { SectionIntro } from '@/components/ui/SectionIntro'

const featuredLimit = 3
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
      <div className={`contribution-feature${entry.diagram ? ' has-diagram' : ''}`}>
        <div className="contribution-overview">
          <p className="eyebrow">{entry.name} · {entry.company}</p>
          <h3 id={`contribution-${entry.id}-heading`}>{entry.headline}</h3>
          <p className="contribution-summary">{entry.summary}</p>
          <p className="contribution-ownership">{entry.ownership}</p>
          <div className="contribution-impact">
            <p className="eyebrow">{text.impactLabel}</p>
            <p>{entry.impact}</p>
          </div>
        </div>
        {entry.diagram ? <ContributionDiagram diagram={entry.diagram} /> : null}
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
      {entry.details.length > 0 ? (
        <div className="contribution-details">
          <p className="eyebrow">{text.detailsLabel}</p>
          {entry.details.map((detail) => (
            <details key={detail.id} id={`contribution-${entry.id}-${detail.id}`}>
              <summary>{detail.title}</summary>
              <div className="contribution-detail-copy">
                {detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
                <a href={reference.href}>{reference.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  )
}

export function Contributions({ text }: { text: ContributionsContent }) {
  if (text.entries.length === 0) return null

  const featured = text.entries.slice(0, featuredLimit)
  const additional = text.entries.slice(featuredLimit)

  return (
    <section className="section professional-contributions" id="contributions" aria-labelledby="contributions-heading">
      <SectionIntro
        eyebrow={text.eyebrow}
        title={text.title}
        description={text.introduction}
        id="contributions-heading"
      />
      <div className="contribution-list">
        {featured.map((entry) => <ContributionStory entry={entry} text={text} key={entry.id} />)}
      </div>
      {additional.length > 0 ? (
        <div className="additional-contributions">
          <h3>{text.moreLabel}</h3>
          {additional.map((entry) => (
            <details key={entry.id}>
              <summary>{entry.name} · {entry.company} — {entry.headline}</summary>
              <ContributionStory entry={entry} text={text} />
            </details>
          ))}
        </div>
      ) : null}
    </section>
  )
}
