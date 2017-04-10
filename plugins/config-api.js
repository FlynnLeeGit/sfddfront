const LRU = require('lru-cache')

let api

if (process.__API__) {
  api = process.__API__
} else {
  api = (process.__API__ = {
    apiServer: 'http://localhost:8080/_fapi',
    cached: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    cachedItem: {}
  })
}

export default api
