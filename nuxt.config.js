const ENV = process.env.NODE_ENV
const isDev = ENV === 'development'
console.log(`[ENV] ${ENV}`); // eslint-disable-line
const { saladConf } = require('./config')
module.exports = {
  /*
   ** Headers of the page
   */
  dev: isDev,
  cache: !isDev,
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
