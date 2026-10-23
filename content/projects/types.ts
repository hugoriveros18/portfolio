import type { PortfolioGallery, PortfolioImage } from '../media'

export const personalProjectIds = ['order-returns-manager'] as const
export type PersonalProjectId = (typeof personalProjectIds)[number]

export interface PersonalProject {
  name: string
  category: string
  summary: string
  focus: string
  status?: string
  featuredTechnologies: string[]
  context: { motivation: string[]; problemOrHypothesis: string; objectives: string[] }
  solution: {
    overview: string
    capabilities: { id: string; title: string; description: string }[]
    technologies: string[]
    engineering: { id: string; title: string; behavior: string }[]
    participation: string
    aiAssistance?: { tools: string[]; use: string; humanReview: string }
  }
  decisions: {
    id: string
    title: string
    constraint: string
    choice: string
    alternatives?: string[]
    tradeoffs: string[]
  }[]
  results: {
    observed: string[]
    challenges?: string[]
    lessons: string[]
    validation?: {
      id: string
      scope: 'local' | 'ci' | 'public'
      description: string
      source?: string
      checkedAt?: string
      limitation?: string
    }[]
  }
  resources?: {
    repository?: string
    demo?: string
    documentation?: { label: string; href: string }[]
    cover?: PortfolioImage
    gallery?: PortfolioGallery
    video?: {
      src: string
      caption: string
      poster?: string
      captions?: { src: string; language: string; label: string }[]
      transcript?: string
    }
  }
}

export interface ProjectsContent {
  eyebrow: string
  title: string
  introduction: string
  focusLabel: string
  viewProjectLabel: string
  backLabel: string
  indexLabel: string
  videoLabel: string
  showMoreLabel: string
  showLessLabel: string
  contextLabel: string
  objectivesLabel: string
  solutionLabel: string
  engineeringLabel: string
  decisionsLabel: string
  alternativesLabel: string
  tradeoffsLabel: string
  participationLabel: string
  resultsLabel: string
  challengesLabel: string
  lessonsLabel: string
  validationLabel: string
  resourcesLabel: string
  repositoryLabel: string
  demoLabel: string
  transcriptLabel: string
  imageAction: string
  imageClose: string
  externalLinkLabel: string
  entries: (PersonalProject & { id: PersonalProjectId })[]
}
