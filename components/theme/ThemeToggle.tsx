'use client'

import { useSyncExternalStore } from 'react'
import { themeStorageKey } from '@/lib/theme'
import { Icon } from '@/components/ui/Icon'

type Theme = 'light' | 'dark'
const themeEvent = 'portfolio-theme-change'

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function getServerTheme(): Theme {
  return 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  window.dispatchEvent(new Event(themeEvent))
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const syncPreference = () => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(themeStorageKey)
    } catch {
      /* The theme also works without storage. */
    }
    applyTheme(
      saved === 'light' || saved === 'dark'
        ? saved
        : media.matches
          ? 'dark'
          : 'light',
    )
  }
  const onStorage = (event: StorageEvent) => {
    if (event.key === themeStorageKey || event.key === null) syncPreference()
  }
  window.addEventListener(themeEvent, onChange)
  window.addEventListener('storage', onStorage)
  media.addEventListener('change', syncPreference)
  return () => {
    window.removeEventListener(themeEvent, onChange)
    window.removeEventListener('storage', onStorage)
    media.removeEventListener('change', syncPreference)
  }
}

export function ThemeToggle({
  lightLabel,
  darkLabel,
}: {
  lightLabel: string
  darkLabel: string
}) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme)
  const label = theme === 'dark' ? lightLabel : darkLabel

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(themeStorageKey, next)
    } catch {
      /* In-memory appearance remains available. */
    }
    applyTheme(next)
  }

  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <span className="theme-sun">
        <Icon name="sun" />
      </span>
      <span className="theme-moon">
        <Icon name="moon" />
      </span>
    </button>
  )
}
