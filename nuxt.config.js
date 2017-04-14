const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
console.log(`${isDev ? '开发环境' : '生产环境'}`); // eslint-disable-line
const { saladConf } = require('./config')
module.exports = {
  /*
   ** Headers of the page
   */
  dev: isDev,
  cache: isProd,
  head: {
    title: 'starter',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'zfdd'
      }
    ],
    link: [
      {
        rel: 'icon',
        href: '/favicon.png'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css'],
  plugins: [
    {
      src: '~plugins/vue-lazy',
      ssr: false
    }
  ],
  router: {
    base: '/',
    linkActiveClass: 'active'
  },
  /*
   ** Add axios globally
   */
  build: {
    publicPath: '/static/',
    postcss: [
      require('postcss-easy-import')(),
      require('postcss-salad')(saladConf)
    ],
    vendor: ['axios', 'lru-cache']
    // publicPath: '/compiled/_nuxt/',
  }
}
