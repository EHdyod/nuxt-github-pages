export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github-pages/',
    head: {
      title: "Nuxt Mojo Dojo",
      meta: [
        { name: "description", content:"My Own Mojo Dojo Casa House" }
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    currencyKey : process.env.CURRENCY_API_KEY
  }
})