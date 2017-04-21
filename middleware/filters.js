import Vue from 'vue'
import { HOZZY_SERVER, IMG_SERVER } from '../config'

// use middlewre to make sure server use filters right
const hozzyImgFilter = (fname, suffix) => {
  return `${HOZZY_SERVER}/${fname}_${suffix}`
}
const imgFilter = (fname, suffix) => {
  return `${IMG_SERVER}/${fname}_${suffix}`
}

Vue.filter('hozzyImgFilter', hozzyImgFilter)
Vue.filter('imgFilter', imgFilter)
export default ctx => {}
