const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
console.log(`${isDev ? '开发环境' : '生产环境'}`); // eslint-disable-line
module.exports = {
  /*
  ** Headers of the page
  */
  dev: isDev,
  cache: isProd,
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'zfdd' }
    ],
    link: [{ rel: 'icon', href: '/favicon.png' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  plugins: [
    { src: '~plugins/vue-lazy', ssr: false }
  ],

  /*
  ** Add axios globally
  */
  build: {
    postcss: [
      require('postcss-easy-import')(),
      require('postcss-advanced-variables')(),
      require('postcss-mixins')(),
      require('postcss-cssnext')()
    ],
    vendor: ['axios', 'lru-cache'],
    filenames: {
      vendor: 'vendor.js?[hash:5]',
      app: 'app.js?[hash:5]',
      manifest: 'manifest.js?[hash:5]'
    },
    publicPath: '/compiled/_nuxt/',
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'imgs/[name].[ext]?[hash:5]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[ext]?[hash:5]'
        }
      }
    ]
  }
}
