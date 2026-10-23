import type { Locale } from './i18n'
import type { PersonalProjectId } from '@/content/projects/types'

export function projectPath(locale: Locale, id: PersonalProjectId) {
  return `/${locale}/projects/${id}`
}
