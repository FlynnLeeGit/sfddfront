import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import ui from './ui'
import inspiration from './inspiration'
import article from './article'

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
    article
  }
})

export default store
