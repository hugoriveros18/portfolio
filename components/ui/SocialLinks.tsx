import { profile } from '@/lib/profile'
import { Icon } from './Icon'

export function SocialLinks({ label }: { label: string }) {
  return (
    <nav className="social-links" aria-label={label}>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        <Icon name="github" />
        GitHub
        <Icon name="arrow-up-right" />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        <Icon name="linkedin" />
        LinkedIn
        <Icon name="arrow-up-right" />
      </a>
    </nav>
  )
}
