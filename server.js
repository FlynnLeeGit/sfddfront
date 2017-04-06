const Nuxt = require('nuxt')

const express = require('express')
const app = express()
const nuxtConfig = require('./nuxt.config.js')
// const logger = require('morgan')
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

const bodyParser = require('body-parser')

app.set('port', port)
// Import API Routes

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(logger('dev'))

// Import and Set Nuxt.js options

// Init Nuxt.js
const nuxt = new Nuxt(nuxtConfig)
app.use(nuxt.render)

// Build only in dev mode
if (nuxtConfig.dev) {
  nuxt.build().catch(error => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
}

// Listen the server
app.listen(port, host, function () {
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
})
