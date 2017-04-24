import Vue from 'vue'
import { HOZZY_SERVER, IMG_SERVER } from '../config'

// use middlewre to make sure server use filters right
const hozzyImgFilter = (fname, suffix) => {
  return `${HOZZY_SERVER}/${fname}_${suffix}`
}
const imgFilter = (fname, suffix) => {
  return `${IMG_SERVER}/${fname}_${suffix}`
}
const filterBy = (arr, field, target) => {
  return arr.filter(item => {
    if (!target) {
      return true
    }
    return item[field] === target
  })
}

Vue.filter('hozzyImgFilter', hozzyImgFilter)
Vue.filter('imgFilter', imgFilter)
Vue.filter('filterBy', filterBy)
export default ctx => {}
