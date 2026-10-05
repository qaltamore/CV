import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'

export const i18n = createI18n({
  legacy: false, // to make it work with CompositionAPI
  locale: 'fr',
  fallbackLocale: 'fr', // TODO en ?
  messages: { fr }
})
