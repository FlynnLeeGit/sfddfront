import axios from '~plugins/axios'
import errorHandler from '~plugins/errorHandler'

const state = {
  viewPaginate: {},
  revisitPaginate: {},
  currentRevisit: {}
}

const mutations = {
  SET_REVISIT_PAGINATE (state, paginate) {
    state.revisitPaginate = paginate
  },
  SET_VIEW_PAGINATE (state, paginate) {
    state.viewPaginate = paginate
  },
  SET_CURRENT_REVISIT (state, revisit) {
    state.currentRevisit = revisit
  }
}

const actions = {
  getRevisit (store, query) {
    return axios
      .get(`/_fapi/article/revisit`)
      .then(({ data }) => {
        store.commit('SET_REVISIT_PAGINATE', data)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  },
  getCurrentRevisit (store, id) {
    return axios
      .get(`/_fapi/contents/${id}`)
      .then(({ data }) => {
        store.commit('SET_CURRENT_REVISIT', data)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  }
}

const getters = {
  revisitPaginate: state => state.revisitPaginate,
  currentRevisit: state => state.currentRevisit
}

export default {
  state,
  mutations,
  actions,
  getters
}
