const Nuxt = require('nuxt')
const express = require('express')

const nuxtConfig = require('./nuxt.config.js')
const logger = require('morgan')
// Init Nuxt.js
const nuxt = new Nuxt(nuxtConfig)

const app = express()

const { PORT, dynamicRoutes } = require('./config')
process.env.PORT = PORT

app.use(logger('dev'))

dynamicRoutes.forEach(dynamicRoute => {
  app.get(dynamicRoute, (req, res) => {
    console.log('dynamicRoute hitted', req.path) // eslint-disable-line
    nuxt
      .renderRoute(req.path)
      .then(({ html, error, redirected }) => {
        if (html) {
          res.end(html, 'utf-8')
        }
        if (error) {
          res.json(error)
        }
        if (redirected) {
          console.error('跳转了') // eslint-disable-line
        }
      })
      .catch(e => {
        console.error('渲染路由出错', e) // eslint-disable-line
      })
  })
})

app.use(express.static('./dist'))

// app.use(nuxt.render)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Frontend Server --Static--] is on ${PORT}!`) // eslint-disable-line no-console
})
