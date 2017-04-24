import axios from 'axios'
import configApi from './config-api'

const isProd = process.env.NODE_ENV === 'production'

export default {
  get (url) {
    const key = url
    if (configApi.cached && configApi.cached.has(key) && isProd) {
      console.log(`使用api缓存${url}`) // eslint-disable-line
      return Promise.resolve(configApi.cached.get(key))
    }
    return axios.get(url).then(res => {
      if (configApi.cached) configApi.cached.set(key, res)
      return res
    })
  },
  post: axios.post
}
