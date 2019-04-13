const pkg = require('./package')
const webpack = require('webpack')


module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/style.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/font-awesome' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['nuxt-fontawesome', {
      component: 'fa',
      // imports: [
      //   {
      //     set: '@fortawesome/free-solid-svg-icons',
      //     icons: ['fa-info-circle', 'bell-slash', 'bells']
      //   }
      // ]
    }],
    // '@nuxtjs/font-awesome',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // baseURL: 'http://knem.chickenkiller.com/race168/vv16888',
    proxyHeaders: false,
    credentials: false,
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: '/api-service',
    // proxyHeaders: false,
    // credentials: false
  },
  fontawesome: {
    // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
    component: 'fa', 
    imports: [
      // 引入 fas 所有的icon
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ]
  },
  proxy: [
    ['/api',
      { target: 'http://knem.chickenkiller.com', pathRewrite: { '^/api-service': '' } }]
],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   vendor: ['axios']
   ,

    extend(config, ctx) {
    },
    vendor: ['bootstrap'],
    plugins: [
      // 這麼寫可以在 .vue 中拿到 $
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
      })
    ]
  },
  generate: {
    routes: [
      '/lotto/A1',
      '/lotto/A2',
      '/lotto/A3'
    ]
  }
}
