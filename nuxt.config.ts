// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "@nuxtjs/seo"],

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

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  nitro: {
    devProxy: {
      "/web-api": {
        // target: "http://localhost:8080/admin", // 这里是接口地址
        target: "https://www.jzdia.com/web-api", // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
  },

  routeRules: {
    "/web-api/**": {
      proxy: "https://www.jzdia.com/web-api/**",
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
        apiBaseUrl: "https://www.jzdia.com",
      },
    },
  },

  site: {
    url: "https://jzdia.com",
    name: "JinZuan",
    description:
      "JinZuan is a diversified global abrasives manufacturing company that brings products and technologies together.",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed，
    indexable: true,
  },

  compatibilityDate: "2024-08-29",
});
