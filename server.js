const Nuxt = require('nuxt')

const express = require('express')
const app = express()

const logger = require('morgan')

const nuxtConfig = require('./nuxt.config.js')

// const config = require('./config')
const { PORT } = require('./config')

process.env.PORT = PORT

app.use(logger('dev'))

// Init Nuxt.js
const nuxt = new Nuxt(nuxtConfig)

// Build only in dev mode
if (nuxtConfig.dev) {
  nuxt.build().catch(error => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
}

app.use(nuxt.render)

// Listen the server
app.listen(PORT, '0.0.0.0', function () {
  console.log(`[Frontend Server] is on ${PORT}!`) // eslint-disable-line no-console
})
