import type { PortfolioContent } from '@/content/types'
import { Icon } from '@/components/ui/Icon'
import { SectionIntro } from '@/components/ui/SectionIntro'

export function Experience({ text }: { text: PortfolioContent['experience'] }) {
  return (
    <section
      className="section experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <SectionIntro
        eyebrow={text.eyebrow}
        title={text.title}
        description={text.introduction}
        id="experience-heading"
      />
      <div className="experience-list">
        {text.companies.map((company) => (
          <article
            className="experience-company"
            key={company.id}
            aria-labelledby={`${company.id}-heading`}
          >
            <div className="company-info">
              <h3 id={`${company.id}-heading`}>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${company.name} — ${text.website}`}
                >
                  {company.name}
                  <Icon name="arrow-up-right" />
                </a>
              </h3>
              <p>{company.context}</p>
            </div>
            <div className="company-work">
              <div
                className={`company-roles${company.roles.length > 1 ? ' company-progression' : ''}`}
              >
                {company.roles.map((role) => (
                  <div className="experience-role" key={role.start}>
                    <div className="role-heading">
                      <h4>{role.title}</h4>
                      <p className="role-period">
                        <time dateTime={role.start}>
                          {role.period.split(' — ')[0]}
                        </time>
                        <span aria-hidden="true"> — </span>
                        <time dateTime={role.end}>
                          {role.period.split(' — ')[1]}
                        </time>
                      </p>
                    </div>
                    {role.summary ? (
                      <p className="role-summary">{role.summary}</p>
                    ) : null}
                    <ul className="contributions">
                      {role.contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <ul className="tags" aria-label={company.name}>
                {company.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
