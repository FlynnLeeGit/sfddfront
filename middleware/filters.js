import Vue from 'vue'
import { HOZZY_SERVER, IMG_SERVER, VIDEO_SERVER } from '../config'

// use middlewre to make sure server use filters right
export const hozzyImgFilter = (fname, suffix) => {
  return `${HOZZY_SERVER}/${fname}_${suffix}`
}

export const imgFilter = (fname, suffix = '') => {
  return `${IMG_SERVER}/${fname}${suffix && '_' + suffix}`
}

export const videoFilter = fname => {
  return `${VIDEO_SERVER}/${fname}`
}

export const videoThumbFilter = (fname, offset = 0) => {
  return `${VIDEO_SERVER}/${fname}?vframe/jpg/offset/${offset}/w/1280/h/720`
}

Vue.filter('hozzyImgFilter', hozzyImgFilter)
Vue.filter('imgFilter', imgFilter)
Vue.filter('videoFilter', videoFilter)
Vue.filter('videoThumbFilter', videoThumbFilter)

export default ctx => {}
