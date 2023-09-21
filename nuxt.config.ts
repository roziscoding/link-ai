// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  nitro: {
    devStorage: {
      links: {
        driver: "fs",
        base: "./data/links",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  auth: {
    provider: { type: "authjs" },
    globalAppMiddleware: false,
  },
  runtimeConfig: {
    linkTreePageTitle: "Linka Aí",
    avatarUrl: "",
    title: "Your Name",
    subtitle: "Your description",
    authGithubSecret: "",
    authGithubId: "",
    authSecret: "",
    adminEmails: "",
    dbUri: "",
    dbName: "linkai",
    dbCollection: "links",
    htmlLang: "pt",
  },
  devtools: {
    enabled: true,
  },
});
