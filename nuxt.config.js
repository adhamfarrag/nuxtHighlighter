export default {
  head: {
    title: 'Nuxt Highlighter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  serverMiddleware: [{ path: 'api', handler: '~/api/index.js' }],

  toast: {
    position: 'bottom-left',
    duration: 3000,
    theme: 'toasted-primary',
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/composition-api/module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    ['vue-scrollto/nuxt', { duration: 600 }],
  ],

  axios: {},

  publicRuntimeConfig: {
    baseURL: process.env.baseURL || 'http://localhost:3000',
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: false,
  },

  build: {},
}
