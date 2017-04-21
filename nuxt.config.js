const ENV = process.env.NODE_ENV
const isDev = ENV === 'development'
console.log(`[ENV] ${ENV}`) // eslint-disable-line
const { saladConf } = require('./config')
module.exports = {
  /*
   ** Headers of the page
   */
  dev: isDev,
  cache: !isDev,
  head: {
    title: 'SFDD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=1280' },
      { name: 'description', content: 'zfdd' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//at.alicdn.com/t/font_rduko7y3jsqt1emi.css'
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
    },
    {
      src: '~plugins/filters'
    }
  ],
  router: {
    base: '/',
    linkActiveClass: 'active',
    scrollBehavior () {
      return { x: 0, y: 0 }
    }
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
    vendor: ['axios', 'lru-cache'],
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // upto10K
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // upto 10k
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
