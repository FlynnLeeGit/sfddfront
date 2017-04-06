const {renderServer} = require('./config')

const isDev = !(process.env.NODE_ENV === 'production')
console.log(isDev ? '开发环境' : '生产环境'); // eslint-disable-line
module.exports = {
  /*
  ** Headers of the page
  */
  dev: isDev,
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {
        rel: 'icon',
        href: `${isDev ? renderServer : '/'}favicon.png`
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    filenames: {
      vendor: 'vendor.js?[hash:5]',
      app: 'app.js?[hash:5]',
      manifest: 'manifest.js?[hash:5]'
    },
    publicPath: isDev ? `${renderServer}_nuxt/` : '/_nuxt/',
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
