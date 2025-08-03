// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/image'],

  css: ['~/assets/scss/main.scss'],

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700, 800, 900],
    },
  },
});
