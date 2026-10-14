import type { PortfolioContent } from '@/content/types'
import { SectionIntro } from '@/components/ui/SectionIntro'

export function About({ text }: { text: PortfolioContent['about'] }) {
  return (
    <section
      className="section about"
      id="about"
      aria-labelledby="about-heading"
    >
      <SectionIntro
        eyebrow={text.eyebrow}
        title={text.title}
        id="about-heading"
      />
      <div className="about-grid">
        <div className="about-narrative">
          {text.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="approach-card" aria-labelledby="ai-heading">
          <span className="approach-mark" aria-hidden="true">
            ↗
          </span>
          <h3 id="ai-heading">{text.aiTitle}</h3>
          {text.aiParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </aside>
      </div>
      <div className="skills-block">
        <h3>{text.skillsTitle}</h3>
        <div className="skills-grid">
          {text.skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h4>{group.title}</h4>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="background-grid">
        <div>
          <h3>{text.educationTitle}</h3>
          <ul className="education-list">
            {text.education.map((item) => (
              <li key={item.institution}>
                <div>
                  <h4>{item.institution}</h4>
                  <p>{item.qualification}</p>
                </div>
                <span>{item.period}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="languages-block">
          <h3>{text.languagesTitle}</h3>
          <dl>
            {text.languages.map((language) => (
              <div key={language.name}>
                <dt>{language.name}</dt>
                <dd>{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
