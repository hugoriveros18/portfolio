import type { ReactNode } from 'react'

export function ProgressiveGroup({
  id, showMoreLabel, showLessLabel, count, children,
}: {
  id: string
  showMoreLabel: string
  showLessLabel: string
  count: number
  children: ReactNode
}) {
  return (
    <details id={id} className="progressive-disclosure" data-progressive open>
      <summary>
        <span className="disclosure-when-closed">{showMoreLabel} (+{count})</span>
        <span className="disclosure-when-open">{showLessLabel}</span>
      </summary>
      {children}
    </details>
  )
}
