'use client'

import { useRef, type MouseEvent } from 'react'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
import { profile } from '@/lib/profile'
import type { PortfolioContent } from '@/content/types'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Icon } from '@/components/ui/Icon'

export function Header({
  locale,
  text,
}: {
  locale: Locale
  text: PortfolioContent['navigation']
}) {
  const menu = useRef<HTMLDetailsElement>(null)
  const otherLocale = locale === 'en' ? 'es' : 'en'
  const pathname = usePathname()
  const home = pathname === `/${locale}` ? '' : `/${locale}`
  const otherPath = `/${otherLocale}${pathname.slice(locale.length + 1)}`
  const items = [
    { href: `${home}#about`, label: text.about },
    { href: `${home}#experience`, label: text.experience },
    { href: `${home}#projects`, label: text.projects },
    { href: `${home}#contributions`, label: text.contributions },
    { href: `${home}#contact`, label: text.contact },
  ]

  function closeMenu() {
    if (menu.current) menu.current.open = false
  }

  function preserveSection(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = `${otherPath}${window.location.hash}`
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href={`${home}#top`} aria-label="Hugo Riveros">
          hr<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label={text.label}>
          {items.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="language-link"
            href={otherPath}
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={text.switchLanguage}
            onClick={preserveSection}
          >
            <span aria-hidden="true">
              <span className={locale === 'en' ? 'language-active' : ''}>
                EN
              </span>
              <span className="language-divider">/</span>
              <span className={locale === 'es' ? 'language-active' : ''}>
                ES
              </span>
            </span>
          </a>
          <ThemeToggle
            lightLabel={text.lightTheme}
            darkLabel={text.darkTheme}
          />
          <a className="header-resume" href={profile.resume[locale]} download>
            <span>{text.resume}</span>
            <Icon name="download" />
          </a>
          <details
            className="mobile-navigation"
            ref={menu}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                closeMenu()
                menu.current?.querySelector('summary')?.focus()
              }
            }}
          >
            <summary className="icon-button" aria-label={text.openMenu}>
              <Icon name="menu" />
            </summary>
            <nav className="mobile-nav" aria-label={text.label}>
              {items.map((item) => (
                <a href={item.href} key={item.href} onClick={closeMenu}>
                  {item.label}
                  <Icon name="arrow-right" />
                </a>
              ))}
              <a href={profile.resume[locale]} download onClick={closeMenu}>
                {text.resume}
                <Icon name="download" />
              </a>
              <button type="button" className="menu-close" onClick={closeMenu}>
                {text.closeMenu}
              </button>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
