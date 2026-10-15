// Keep the same identifiers and editorial order in both languages.
export const contributionIds = ['yunex', 'wallet-enhanced-experience', 'vtex-split-orders'] as const
export type ContributionId = (typeof contributionIds)[number]

export interface ContributionDiagram {
  caption: string
  stages: {
    id: string
    emphasized?: boolean
    nodes: { title: string; description?: string }[]
  }[]
  description: string
}

export interface ProfessionalContribution {
  name: string
  company: string
  headline: string
  summary: string
  ownership: string
  impact: string
  capabilities: { id: string; title: string; description: string }[]
  details: {
    id: string
    title: string
    paragraphs: string[]
    diagram?: ContributionDiagram
  }[]
  diagram?: ContributionDiagram
  comparison?: {
    caption: string
    paths: {
      id: string
      title: string
      steps: string[]
      emphasized?: boolean
    }[]
    description: string
  }
  gallery?: {
    title: string
    description?: string
    images: {
      id: string
      src: string
      width: number
      height: number
      modalMaxWidth?: number
      alt: string
      caption: string
    }[]
  }
  references?: { label: string; href: string }[]
}

export interface ContributionsContent {
  eyebrow: string
  title: string
  introduction: string
  impactLabel: string
  capabilitiesLabel: string
  detailsLabel: string
  moreLabel: string
  referencesLabel: string
  imageAction: string
  imageClose: string
  externalLinkLabel: string
  entries: (ProfessionalContribution & { id: ContributionId })[]
}
