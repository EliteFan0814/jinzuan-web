// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt"],
  elementPlus: {
    /** Options */
  },
  css: ["normalize.css", "element-plus/theme-chalk/display.css"],
});