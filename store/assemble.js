import axios from '~plugins/axios'
import errorHandler from '~plugins/errorHandler'

const state = {
  assembleStyleId: 0
}
const mutations = {
  SET_ASSEMBLE_STYLE_ID (state, styleId) {
    state.assembleStyleId = styleId
  }
}
const actions = {
  getAssembleStyles (store, style) {
    return axios
      .get(`/_fapi/planscheme/recomend`)
      .then(({ data }) => {
        store.commit('SET_ASSEMBLE_STYLE_ID', data[style])
      })
      .catch(e => {
        errorHandler(store, e)
      })
  }
}
const getters = {
  assembleStyleId: state => state.assembleStyleId
}

export default {
  state,
  mutations,
  actions,
  getters
}
