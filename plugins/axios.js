import axios from 'axios'
import configApi from './config-api'
import { Message } from 'element-ui'

// const isProd = process.env.NODE_ENV === 'production'

// 拦截错误响应
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          Message({
            type: 'error',
            message: error.response.data.message
          })
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  }
)

export default {
  get (url, options) {
    const key = JSON.stringify({ ...options, url })
    if (configApi.cached && configApi.cached.has(key)) {
      console.log(`使用api缓存${url},${JSON.stringify(options)}`) // eslint-disable-line
      return Promise.resolve(configApi.cached.get(key))
    }
    // 服务器端请求使用axios时加入请求域名
    if (process.SERVER_BUILD) {
      url = process.env.REQ_HOST + url
    }
    return axios.get(url, options).then(res => {
      if (configApi.cached) configApi.cached.set(key, res)
      return res
    })
  },
  post: axios.post
}
