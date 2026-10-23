import type { ContributionsContent } from './contributions/types'
import type { ProjectsContent } from './projects/types'

export interface PortfolioContent {
  metadata: { title: string; description: string }
  navigation: {
    label: string
    experience: string
    contributions: string
    projects: string
    about: string
    contact: string
    resume: string
    skip: string
    openMenu: string
    closeMenu: string
    switchLanguage: string
    lightTheme: string
    darkTheme: string
  }
  hero: {
    location: string
    availability: string
    role: string
    headline: [string, string]
    introduction: string
    description: string
    contact: string
    about: string
    portraitAlt: string
    portraitCaption: string
  }
  experience: {
    eyebrow: string
    title: string
    introduction: string
    website: string
    companies: {
      id: string
      name: string
      url: string
      context: string
      roles: {
        title: string
        period: string
        start: string
        end: string
        summary?: string
        contributions: string[]
      }[]
      technologies: string[]
    }[]
  }
  contributions: ContributionsContent
  projects: ProjectsContent
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    aiTitle: string
    aiParagraphs: string[]
    skillsTitle: string
    skillGroups: { title: string; items: string[] }[]
    educationTitle: string
    education: { institution: string; qualification: string; period: string }[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    action: string
    resume: string
    socialLabel: string
  }
  footer: { location: string; note: string; backToTop: string }
  notFound: { title: string; description: string; action: string }
}
