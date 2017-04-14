const Nuxt = require('nuxt')

const express = require('express')
const app = express()

const logger = require('morgan')

const nuxtConfig = require('./nuxt.config.js')

// const config = require('./config')
const npmPackageConfig = require('./package.json').config
const host = npmPackageConfig.nuxt.host
const port = npmPackageConfig.nuxt.port

process.env.PORT = port
process.env.HOST = host

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
app.listen(port, host, function () {
  console.log('Server listening on ' + port) // eslint-disable-line no-console
})
