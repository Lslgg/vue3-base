import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

export const getLocale = () => {
  const cookieLanguage = 'zhCN'
  if (cookieLanguage) {
    document.documentElement.lang = cookieLanguage
    return cookieLanguage
  }
  return 'zhCN'
}

export const i18n = createI18n({
  locale: getLocale(),
  messages,
})
