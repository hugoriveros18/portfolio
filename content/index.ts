import { en } from './en'
import { es } from './es'
import type { Locale } from '@/lib/i18n'

const content = { en, es }

export function getContent(locale: Locale) {
  return content[locale]
}
