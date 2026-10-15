import type { ProfessionalContribution } from '@/content/contributions/types'

type Comparison = NonNullable<ProfessionalContribution['comparison']>

export function ContributionComparison({ comparison }: { comparison: Comparison }) {
  return (
    <figure className="contribution-comparison">
      <p className="eyebrow">{comparison.caption}</p>
      <div className="comparison-paths">
        {comparison.paths.map((path) => (
          <div
            className={`comparison-path${path.emphasized ? ' comparison-path-emphasized' : ''}`}
            key={path.id}
          >
            <h4>{path.title}</h4>
            <ol>
              {path.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        ))}
      </div>
      <figcaption>{comparison.description}</figcaption>
    </figure>
  )
}
