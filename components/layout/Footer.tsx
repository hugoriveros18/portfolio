import type { PortfolioContent } from '@/content/types'
import { Icon } from '@/components/ui/Icon'

export function Footer({ text }: { text: PortfolioContent['footer'] }) {
  return (
    <footer className="site-footer container">
      <div>
        <p>{text.note}</p>
        <p className="footer-location">
          {text.location} <span aria-hidden="true">·</span> ©{' '}
          {new Date().getFullYear()}
        </p>
      </div>
      <a className="text-link" href="#top">
        {text.backToTop}
        <Icon name="arrow-up-right" />
      </a>
    </footer>
  )
}
