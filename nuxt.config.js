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
    title: '中孚空间',
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
        href: '//at.alicdn.com/t/font_zr1vv4p6yiizfr.css'
      }
    ],
    script: [{ src: '/modernizr-custom.js' }]
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css'],
  // loading: '~components/Loading.vue',
  loading: {
    color: '#008489',
    height: '2px'
  },
  plugins: [
    { src: '~plugins/vue-lazy', ssr: false }
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
        test: /\.(png|jpe?g|gif|svg|mp4|webp)$/,
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
    ],
    extend (config) {
      // vue options here https://vue-loader.vuejs.org/zh-cn/options.html
      const vueOptions = config.module.rules[0].query
      vueOptions.transformToRequire = {
        img: 'src',
        image: 'xlink:href',
        // to transform src attrs to require
        source: 'srcset'
      }
    }
  }
}
