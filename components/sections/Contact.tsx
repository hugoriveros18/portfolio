import type { Locale } from '@/lib/i18n'
import type { PortfolioContent } from '@/content/types'
import { profile } from '@/lib/profile'
import { Icon } from '@/components/ui/Icon'
import { SocialLinks } from '@/components/ui/SocialLinks'

export function Contact({
  locale,
  text,
}: {
  locale: Locale
  text: PortfolioContent['contact']
}) {
  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-copy">
        <p className="eyebrow">{text.eyebrow}</p>
        <h2 id="contact-heading">{text.title}</h2>
        <p className="contact-description">{text.description}</p>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            {text.action}
            <Icon name="arrow-up-right" />
          </a>
          <a className="text-link" href={profile.resume[locale]} download>
            {text.resume}
            <Icon name="download" />
          </a>
        </div>
      </div>
      <div className="contact-details">
        <p className="detail-label">{text.emailLabel}</p>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email}
          <Icon name="arrow-up-right" />
        </a>
        <p className="detail-label social-label">{text.socialLabel}</p>
        <SocialLinks label={text.socialLabel} />
      </div>
    </section>
  )
}
