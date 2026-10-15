import type { SVGProps } from 'react'

type IconName =
  | 'arrow-up-right'
  | 'arrow-right'
  | 'arrow-down'
  | 'expand'
  | 'close'
  | 'download'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'github'
  | 'linkedin'
  | 'mail'

const paths: Record<IconName, React.ReactNode> = {
  close: <path d="m6 6 12 12M18 6 6 18" />,
  expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
  'arrow-up-right': <path d="M6 18 18 6M6 6h12v12" />,
  'arrow-right': <path d="M4 12h16m-6-6 6 6-6 6" />,
  'arrow-down': <path d="M12 4v16m-6-6 6 6 6-6" />,
  download: (
    <>
      <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  moon: <path d="M20.8 13.2A9 9 0 0 1 10.8 3.1 9 9 0 1 0 20.8 13.2Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  github: (
    <>
      <path d="M9 19c-4.5 1.4-4.5-2.2-6.3-2.7M15 22v-3.8a3.3 3.3 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19 5.1a4.9 4.9 0 0 0-.1-3.6S17.8 1.2 15 2.9a13 13 0 0 0-6 0C6.2 1.2 5.1 1.5 5.1 1.5A4.9 4.9 0 0 0 5 5.1a5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.2 6.5 6.2 6.8a3.3 3.3 0 0 0-.8 2.6V22" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
}

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
