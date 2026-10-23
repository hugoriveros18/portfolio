'use client'

import { useEffect } from 'react'

// Existing homepage study links now resolve to the same fragment on the case page.
export function ProjectFragmentRedirect({ projects }: {
  projects: { anchor: string; href: string }[]
}) {
  useEffect(() => {
    function redirect() {
      let fragment: string
      try {
        fragment = decodeURIComponent(window.location.hash.slice(1))
      } catch {
        return
      }
      if (!fragment || document.getElementById(fragment)) return
      const project = projects.find(({ anchor }) => fragment.startsWith(`${anchor}-`))
      if (project) window.location.replace(`${project.href}#${encodeURIComponent(fragment)}`)
    }

    redirect()
    window.addEventListener('hashchange', redirect)
    window.addEventListener('popstate', redirect)
    return () => {
      window.removeEventListener('hashchange', redirect)
      window.removeEventListener('popstate', redirect)
    }
  }, [projects])

  return null
}
