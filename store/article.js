import axios from '~plugins/axios'
import errorHandler from '~plugins/errorHandler'

const state = {
  viewPaginate: {},
  revisitPaginate: {}
}

const mutations = {
  SET_REVISIT_PAGINATE (state, paginate) {
    state.revisitPaginate = paginate
  },
  SET_VIEW_PAGINATE (state, paginate) {
    state.viewPaginate = paginate
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
  }
}

const getters = {
  revisitPaginate: state => state.revisitPaginate
}

export default {
  state,
  mutations,
  actions,
  getters
}
