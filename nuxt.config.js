const pkg = require('./package')
const webpack = require('webpack')


module.exports = {
  mode: 'universe',
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
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
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
    // { src: '~/plugins/i18n.js' },
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
    ['nuxt-i18n', {
      seo: false,
      pages: {

      },
      locales: ['en', 'cn', 'jp'],
      Strategy: 'prefix',
      defaultLocaleRouteNameSuffix: 'default',
      noPrefixDefaultLocale: false,
      // defaultLocale: 'cn',
      defaultLocale: {
        locale: 'cn',
        prefix: true
      },
      useRedirectCookie: true,
      // redirectCookieKey: 'redirected',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        },
        {
          code: 'cn',
          iso: 'zn-CN',
          file: 'cn.js'
        },
        {
          code: 'jp',
          iso: 'ja-JP',
          file: 'jp.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      // vueI18n: {
      //   fallbackLocale: 'cn',
      //   messages: {
      //     en: {
      //       welcome: 'Welcome'
      //     },
      //     fr: {
      //       welcome: 'Bienvenue'
      //     },
      //     es: {
      //       welcome: 'Bienvenido'
      //     }
      //   }
      // }
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
   vendor: ['axios', 'vue-i18n']
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
  // router: {
  //   middleware: 'i18n'
  // },
  generate: {
    routes: [
      '/cn/lotto/亚洲赛车-A1-75',
      '/cn/lotto/亚洲赛车-A2-120',
      '/cn/lotto/亚洲赛车-A3-300',
      '/cn/lotto/亚洲飞艇-B1-75',
      '/cn/lotto/亚洲飞艇-B2-120',
      '/cn/lotto/亚洲飞艇-B3-300',
      '/cn/lotto/亚洲快3-C1-75',
      '/cn/lotto/亚洲快3-C2-120',
      '/cn/lotto/亚洲快3-C3-300',
      '/cn/lotto/亚洲快3-C1-75',
      '/cn/lotto/亚洲快3-C2-120',
      '/cn/lotto/亚洲快3-C3-300',
      '/cn/lotto/亚洲时时彩-D1-75',
      '/cn/lotto/亚洲时时彩-D2-120',
      '/cn/lotto/亚洲时时彩-D3-300',
      /* */
      '/en/lotto/亚洲赛车-A1-75',
      '/en/lotto/亚洲赛车-A2-120',
      '/en/lotto/亚洲赛车-A3-300',
      '/en/lotto/亚洲飞艇-B1-75',
      '/en/lotto/亚洲飞艇-B2-120',
      '/en/lotto/亚洲飞艇-B3-300',
      '/en/lotto/亚洲快3-C1-75',
      '/en/lotto/亚洲快3-C2-120',
      '/en/lotto/亚洲快3-C3-300',
      '/en/lotto/亚洲快3-C1-75',
      '/en/lotto/亚洲快3-C2-120',
      '/en/lotto/亚洲快3-C3-300',
      '/en/lotto/亚洲时时彩-D1-75',
      '/en/lotto/亚洲时时彩-D2-120',
      '/en/lotto/亚洲时时彩-D3-300',
      /* */

      '/jp/lotto/亚洲赛车-A1-75',
      '/jp/lotto/亚洲赛车-A2-120',
      '/jp/lotto/亚洲赛车-A3-300',
      '/jp/lotto/亚洲飞艇-B1-75',
      '/jp/lotto/亚洲飞艇-B2-120',
      '/jp/lotto/亚洲飞艇-B3-300',
      '/jp/lotto/亚洲快3-C1-75',
      '/jp/lotto/亚洲快3-C2-120',
      '/jp/lotto/亚洲快3-C3-300',
      '/jp/lotto/亚洲快3-C1-75',
      '/jp/lotto/亚洲快3-C2-120',
      '/jp/lotto/亚洲快3-C3-300',
      '/jp/lotto/亚洲时时彩-D1-75',
      '/jp/lotto/亚洲时时彩-D2-120',
      '/jp/lotto/亚洲时时彩-D3-300',
    ]
  }
}
