import type { Locale } from '@/lib/i18n'
import type { PortfolioContent } from '@/content/types'
import { profile } from '@/lib/profile'
import { Icon } from '@/components/ui/Icon'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { SectionIntro } from '@/components/ui/SectionIntro'

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
      <SectionIntro number="05" eyebrow={text.eyebrow} title={text.title} id="contact-heading" />
      <div className="contact-copy">
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
        <div className="contact-details">
          <p className="detail-label social-label">{text.socialLabel}</p>
          <SocialLinks label={text.socialLabel} />
        </div>
      </div>
    </section>
  )
}
