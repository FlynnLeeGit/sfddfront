import Vue from 'vue'
import { HOZZY_SERVER } from '../config'

export const hozzyImgFilter = (fname, suffix) => {
  return `${HOZZY_SERVER}/${fname}_${suffix}`
}

Vue.filter('hozzyImgFilter', hozzyImgFilter)
