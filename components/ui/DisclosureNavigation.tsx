'use client'

import { useEffect, useRef, type ReactNode } from 'react'

// Server-rendered children stay readable without JavaScript. Only disclosure
// state and fragment revelation cross this client boundary.
export function DisclosureNavigation({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame: number | undefined

    function target() {
      try {
        return document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
      } catch {
        return null
      }
    }

    const initialTarget = target()
    let collapsedGroup = false
    root.current?.querySelectorAll<HTMLDetailsElement>('details[data-progressive]').forEach((group) => {
      group.open = initialTarget !== null && group.contains(initialTarget)
      if (!group.open) collapsedGroup = true
    })

    function reveal() {
      const destination = target()
      if (!destination || !root.current?.contains(destination)) return

      let ancestor: HTMLElement | null = destination
      while (ancestor && ancestor !== root.current) {
        if (ancestor instanceof HTMLDetailsElement) ancestor.open = true
        ancestor = ancestor.parentElement
      }
      if (frame !== undefined) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => destination.scrollIntoView({ behavior: 'instant', block: 'start' }))
    }

    reveal()
    // Closing earlier stories changes the position of later sections too.
    // Restore an incoming section fragment after that layout change.
    if (collapsedGroup && initialTarget && !root.current?.contains(initialTarget)) {
      frame = requestAnimationFrame(() => initialTarget.scrollIntoView({ behavior: 'instant', block: 'start' }))
    }
    window.addEventListener('hashchange', reveal)
    window.addEventListener('popstate', reveal)
    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame)
      window.removeEventListener('hashchange', reveal)
      window.removeEventListener('popstate', reveal)
    }
  }, [])

  return <div ref={root}>{children}</div>
}
