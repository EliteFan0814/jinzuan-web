// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt"],
  elementPlus: {
    /** Options */
  },
  css: [
    "normalize.css",
    "element-plus/theme-chalk/display.css",
    // "/css/quill.core.css",
    // "/css/quill.snow.css",
    // "/css/quill.bubble.css",
  ],
  nitro: {
    devProxy: {
      "/web-api": {
        target: "http://localhost:8080/admin", // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  $development: {
    runtimeConfig: {
      public: {
        apiBaseUrl: "",
      },
    },
  },
  $production: {
    runtimeConfig: {
      public: {
        apiBaseUrl: "",
      },
    },
  },
});
