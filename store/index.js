import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import ui from './ui'
import inspiration from './inspiration'
import products from './products'

const store = new Vuex.Store({
  state: {
    ajaxErrors: []
  },
  mutations: {
    SET_AJAX_ERROR (state, e) {
      state.ajaxErrors.push(e)
    }
  },
  actions: {},
  modules: {
    ui,
    inspiration,
    products
  }
})

export default store
