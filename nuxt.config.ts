import type { NuxtI18nOptions } from '@nuxtjs/i18n';


export default defineNuxtConfig({
  app: {
    baseURL: '/', // Укажите имя вашего репозитория
    buildAssetsDir: '/_nuxt/', // Убедитесь, что папка для сборки совпадает с GitHub Page
  },
  ssr: true,

  devtools: { enabled: true },
  css: ['@/assets/styles.scss'],

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'], // Пререндер главной страницы
    },
  },

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: '',
  } as NuxtI18nOptions,

  compatibilityDate: '2025-01-01'
});

