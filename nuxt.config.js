export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  publicRuntimeConfig: {
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifySecKey: process.env.SPOTIFY_CLIENT_SECRET,
  },
  privateRuntimeConfig: {
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifySecKey: process.env.SPOTIFY_CLIENT_SECRET,
  },

  // Nuxt  GlobalName (to change default html name )
  globalName: 'bloggyBlog',
  id: globalName => `__${globalName}`,
  nuxt: globalName => `$${globalName}`,
  context: globalName => `__${globalName.toUpperCase()}__`,
  pluginPrefix: globalName => globalName,
  readyCallback: globalName => `on${_.capitalize(globalName)}Ready`,
  loadedCallback: globalName => `_on${_.capitalize(globalName)}Loaded`,


  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'BloggyBlog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:'stylsheet',
        href: 'https://fonts.googleapis.com/css?family=Inter:400,500,600,700,800&display=swap'
      },
      {
        rel:'stylsheet',
        href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap'
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@/plugins/prismic.js' }, //disable prismic edit button
    {src: '@/plugins/popper.js' , mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/prismic',
    '@nuxtjs/fontawesome',
  ],

  prismic: {
    endpoint: 'https://nuxtyblog.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver'
  },
  fontawesome: {
    icons: {
      solid: [
        'faUserSecret', 
        'faAngleDown', 
        'faBars', 
        'faHandshake', 
        'faCaretLeft'
      ],
      brands : [
        'faDiscord', 
        'faFacebookF', 
        'faTwitter', 
        'faLinkedinIn', 
        'faGithub', 
        'faSpotify' 
      ]
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],


  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },
  generate: {
    fallback: '404.html'
  }
}
