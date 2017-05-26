import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import { REQ_HOST } from '../config'

import ui from './ui'
import inspiration from './inspiration'
import article from './article'
import assemble from './assemble'

const store = new Vuex.Store({
  state: {
    ajaxErrors: []
  },
  mutations: {
    SET_AJAX_ERROR (state, e) {
      state.ajaxErrors.push(e)
    }
  },
  actions: {
    nuxtServerInit ({ commit }, { req }) {
      process.env.REQ_HOST = `${req.protocol}://${req.host}`
    }
  },
  modules: {
    ui,
    inspiration,
    article,
    assemble
  }
})

export default store
