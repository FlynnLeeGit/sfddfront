import axios from '~plugins/axios'
import errorHandler from '~plugins/errorHandler'

const state = {
  pms: []
}

const mutations = {
  SET_PMS (state, pms) {
    state.pms = pms
  }
}

const actions = {
  async getPms ({ commit }) {
    try {
      const { data } = await axios.get('/pms')
      commit('SET_PMS', data)
    } catch (e) {
      errorHandler(commit, e)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
