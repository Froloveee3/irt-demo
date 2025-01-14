import type { NuxtI18nOptions } from '@nuxtjs/i18n';


export default defineNuxtConfig({
  app: {
    baseURL: '',
    cdnURL: ''
  },
  ssr: true,
  devtools: { enabled: true },
  css: ['@/assets/styles.scss'],
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
    ],
    defaultLocale: 'ru',
    lazy: true,
    strategy: 'prefix_except_default',
    langDir: '',
  } as NuxtI18nOptions,
  compatibilityDate: '2025-01-01',
});
