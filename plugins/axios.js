import axios from 'axios'
import configApi from './config-api'

// const isProd = process.env.NODE_ENV === 'production'

const opts = {}

// 服务器端请求使用axios时加入请求域名
if (process.SERVER_BUILD) {
  opts.baseURL = process.env.REQ_HOST
}

const axiosInstance = axios.create(opts)

export default {
  get (url, options) {
    const key = JSON.stringify({ ...options, url })
    if (configApi.cached && configApi.cached.has(key)) {
      console.log(`使用api缓存${url},${JSON.stringify(options)}`) // eslint-disable-line
      return Promise.resolve(configApi.cached.get(key))
    }
    return axiosInstance.get(url, options).then(res => {
      if (configApi.cached) configApi.cached.set(key, res)
      return res
    })
  },
  post: axios.post
}
