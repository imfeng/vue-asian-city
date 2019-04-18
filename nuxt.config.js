const pkg = require('./package')
const webpack = require('webpack')


module.exports = {
  server : { host: '0.0.0.0', port: 80 },

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
  loading: { color: '#ccb520', failedColor: '#fff' },

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
    '@nuxtjs/sitemap',
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
    baseURL: 'https://vv16888.net',
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
        icons: ['faBell', 'faBellSlash']
      },
    ]
  },
  // proxy: [
  //   ['/api',
  //     { target: 'http://vv16888.net', pathRewrite: { '^/api-service': '' } }]
  // ],
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
    config.module.rules.push({
      test: /\.mp3$/,
      loader: 'file-loader',
    });
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
  //     /* */
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
  //     /* */

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
  },
  sitemap: {
    path: 'C:/Users/Feng/Desktop/product/imfeng/VUE/vue-asian-city/dist/sitemap.xml', // sitemap名稱，不用改
    hostname: 'https://vv7978.com/', // 網址
    cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 檔的 sitemap
    generate: true, // 允許使用 nuxt generate 生成
    // 排除不要的頁面路由
    exclude: [
      '/secret',
      '/admin/**',
      '/_nuxt/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 0.9,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    // 靜態頁面路徑
    routes: [
      {
        url: '/',
        changefreq: 'daily', // 可能變更的頻率
        priority: 1, // 網頁的重要程度，0.1 - 1
        keywords: '亚洲赛车,北京赛车,极速赛车,PK拾,开奖网,摇彩网,亚洲娱乐网,亚洲,娱乐,彩球',
        lastmodISO: new Date(),
        links: [
          { lang: 'cn', url: '/cn/', },
          { lang: 'en', url: '/en/', },
          { lang: 'ja', url: '/jp/', },
        ],
      },
      {
        url: '/cn/news',
        changefreq: 'daily', // 可能變更的頻率
        priority: 0.7, // 網頁的重要程度，0.1 - 1
        keywords: '最新消息,亚洲娱乐网,亚洲,娱乐,彩球',
        lastmodISO: new Date(),
        links: [
          { lang: 'cn', url: '/cn/news/', },
          { lang: 'en', url: '/en/news/', },
          { lang: 'ja', url: '/jp/news/', },
        ],
      },
      {
        url: '/cn/about',
        changefreq: 'monthly', // 可能變更的頻率
        priority: 0.5, // 網頁的重要程度，0.1 - 1
        keywords: '关于我们,亚洲娱乐网,亚洲,娱乐,彩球',
        lastmodISO: new Date(),
        links: [
          { lang: 'cn', url: '/cn/about/', },
          { lang: 'en', url: '/en/about/', },
          { lang: 'ja', url: '/jp/about/', },
        ],
      },
      { url: '/cn/lotto/亚洲赛车-A1-75', keywords: '亚洲赛车' },
      { url: '/cn/lotto/亚洲赛车-A2-120', keywords: '亚洲赛车' },
      { url: '/cn/lotto/亚洲赛车-A3-300', keywords: '亚洲赛车' },
      { url: '/cn/lotto/亚洲飞艇-B1-75', keywords: '亚洲飞艇' },
      { url: '/cn/lotto/亚洲飞艇-B2-120', keywords: '亚洲飞艇' },
      { url: '/cn/lotto/亚洲飞艇-B3-300', keywords: '亚洲飞艇' },
      { url: '/cn/lotto/亚洲快3-C1-75', keywords: '亚洲快3' },
      { url: '/cn/lotto/亚洲快3-C2-120', keywords: '亚洲快3' },
      { url: '/cn/lotto/亚洲快3-C3-300', keywords: '亚洲快3' },
      { url: '/cn/lotto/亚洲快3-C1-75', keywords: '亚洲快3' },
      { url: '/cn/lotto/亚洲快3-C2-120', keywords: '亚洲快3' },
      { url: '/cn/lotto/亚洲快3-C3-300', keywords: '亚洲快3' },
      { url: '/cn/lotto/亚洲时时彩-D1-75', keywords: '亚洲时时彩' },
      { url: '/cn/lotto/亚洲时时彩-D2-120', keywords: '亚洲时时彩' },
      { url: '/cn/lotto/亚洲时时彩-D3-300', keywords: '亚洲时时彩' },
      { url: '/en/lotto/亚洲赛车-A1-75', keywords: '亚洲赛车' },
      { url: '/en/lotto/亚洲赛车-A2-120', keywords: '亚洲赛车' },
      { url: '/en/lotto/亚洲赛车-A3-300', keywords: '亚洲赛车' },
      { url: '/en/lotto/亚洲飞艇-B1-75', keywords: '亚洲飞艇' },
      { url: '/en/lotto/亚洲飞艇-B2-120', keywords: '亚洲飞艇' },
      { url: '/en/lotto/亚洲飞艇-B3-300', keywords: '亚洲飞艇' },
      { url: '/en/lotto/亚洲快3-C1-75', keywords: '亚洲快3' },
      { url: '/en/lotto/亚洲快3-C2-120', keywords: '亚洲快3' },
      { url: '/en/lotto/亚洲快3-C3-300', keywords: '亚洲快3' },
      { url: '/en/lotto/亚洲快3-C1-75', keywords: '亚洲快3' },
      { url: '/en/lotto/亚洲快3-C2-120', keywords: '亚洲快3' },
      { url: '/en/lotto/亚洲快3-C3-300', keywords: '亚洲快3' },
      { url: '/en/lotto/亚洲时时彩-D1-75', keywords: '亚洲时时彩' },
      { url: '/en/lotto/亚洲时时彩-D2-120', keywords: '亚洲时时彩' },
      { url: '/en/lotto/亚洲时时彩-D3-300', keywords: '亚洲时时彩' },
  //     /* */

      { url: '/jp/lotto/亚洲赛车-A1-75', keywords: '亚洲赛车' },
      { url: '/jp/lotto/亚洲赛车-A2-120', keywords: '亚洲赛车' },
      { url: '/jp/lotto/亚洲赛车-A3-300', keywords: '亚洲赛车' },
      { url: '/jp/lotto/亚洲飞艇-B1-75', keywords: '亚洲飞艇' },
      { url: '/jp/lotto/亚洲飞艇-B2-120', keywords: '亚洲飞艇' },
      { url: '/jp/lotto/亚洲飞艇-B3-300', keywords: '亚洲飞艇' },
      { url: '/jp/lotto/亚洲快3-C1-75', keywords: '亚洲快3' },
      { url: '/jp/lotto/亚洲快3-C2-120', keywords: '亚洲快3' },
      { url: '/jp/lotto/亚洲快3-C3-300', keywords: '亚洲快3' },
      { url: '/jp/lotto/亚洲快3-C1-75', keywords: '亚洲快3' },
      { url: '/jp/lotto/亚洲快3-C2-120', keywords: '亚洲快3' },
      { url: '/jp/lotto/亚洲快3-C3-300', keywords: '亚洲快3' },
      { url: '/jp/lotto/亚洲时时彩-D1-75', keywords: '亚洲时时彩' },
      { url: '/jp/lotto/亚洲时时彩-D2-120', keywords: '亚洲时时彩' },
      { url: '/jp/lotto/亚洲时时彩-D3-300', keywords: '亚洲时时彩' },

    ]
  }
}
