import Image from 'next/image'
import type { PortfolioContent } from '@/content/types'
import { profile } from '@/lib/profile'
import { Icon } from '@/components/ui/Icon'

export function Hero({ text }: { text: PortfolioContent['hero'] }) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow hero-identity">
          Hugo Riveros <span aria-hidden="true">/</span> {text.role}
        </p>
        <h1 id="hero-heading">
          <span>{text.headline[0]}</span>
          <span className="accent-text">{text.headline[1]}</span>
        </h1>
        <p className="hero-introduction">{text.introduction}</p>
        <p className="hero-description">{text.description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            {text.contact}
            <Icon name="arrow-up-right" />
          </a>
          <a className="text-link" href="#experience">
            {text.experience}
            <Icon name="arrow-down" />
          </a>
        </div>
        <p className="availability">
          <span className="status-dot" aria-hidden="true" />
          {text.availability}
        </p>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame">
          <Image
            className="portrait-image"
            src="/images/hugo-riveros.png"
            alt={text.portraitAlt}
            width={1096}
            height={1435}
            sizes="(max-width: 600px) 80vw, (max-width: 900px) 40vw, 400px"
            loading="eager"
            fetchPriority="high"
          />
          <span className="portrait-corner" aria-hidden="true" />
        </div>
        <figcaption>
          <span>{text.location}</span>
          <span aria-hidden="true">↗</span>
        </figcaption>
      </figure>
      <div className="hero-bottom" aria-hidden="true">
        <span>{text.portraitCaption}</span>
        <span>2022 — 2026</span>
      </div>
    </section>
  )
}
