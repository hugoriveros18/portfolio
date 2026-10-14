import type { ContributionDiagram as DiagramContent } from '@/content/contributions/types'

export function ContributionDiagram({ diagram }: { diagram: DiagramContent }) {
  return (
    <figure className="contribution-diagram">
      <p className="eyebrow">{diagram.caption}</p>
      <ol className="diagram-stages">
        {diagram.stages.map((stage) => (
          <li
            className={`diagram-stage${stage.emphasized ? ' diagram-stage-emphasized' : ''}`}
            key={stage.id}
          >
            <ul className="diagram-nodes">
              {stage.nodes.map((node) => (
                <li className="diagram-node" key={node.title}>
                  <span>{node.title}</span>
                  {node.description ? <small>{node.description}</small> : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <figcaption>{diagram.description}</figcaption>
    </figure>
  )
}
