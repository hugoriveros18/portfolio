export function SectionIntro({
  eyebrow,
  title,
  description,
  id,
  number,
}: {
  eyebrow: string
  title: string
  description?: string
  id: string
  number: string
}) {
  return (
    <div className="section-intro">
      <span className="section-number" aria-hidden="true">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  )
}
