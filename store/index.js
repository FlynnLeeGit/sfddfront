import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import server from './server'
import pm from './pm'
import user from './user'
import ui from './ui'

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pm,
    server,
    user,
    ui
  }
})

export default store
