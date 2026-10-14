// Keep the same identifiers and editorial order in both languages.
export const contributionIds = ['yunex'] as const
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
  details: { id: string; title: string; paragraphs: string[] }[]
  diagram?: ContributionDiagram
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
  entries: (ProfessionalContribution & { id: ContributionId })[]
}
