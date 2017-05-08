import axios from '~plugins/axios'
import errorHandler from '~plugins/errorHandler'

const state = {
  viewPaginate: {},
  revisitPaginate: {},
  viewCate: [],
  currentArticle: {}
}

const mutations = {
  SET_REVISIT_PAGINATE (state, paginate) {
    state.revisitPaginate = paginate
  },
  SET_VIEW_PAGINATE (state, paginate) {
    state.viewPaginate = paginate
  },
  SET_CURRENT_ARTICLE (state, article) {
    state.currentArticle = article
  },
  SET_VIEW_CATE (state, cate) {
    state.viewCate = cate
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
  getCurrentArticle (store, id) {
    return axios
      .get(`/_fapi/contents/${id}`)
      .then(({ data }) => {
        store.commit('SET_CURRENT_ARTICLE', data)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  },
  getViewCate (store) {
    return axios
      .get('/_fapi/article/viewpoint/cate')
      .then(({ data }) => {
        console.log(data)
        store.commit('SET_VIEW_CATE', data)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  },
  getView (store, query) {
    const reqUrl = query.cate
      ? `/_fapi/cates/${query.cate}/articles`
      : '/_fapi/article/viewpoint'
    return store
      .dispatch('getViewCate')
      .then(() => {
        return axios.get(reqUrl, {
          params: query
        })
      })
      .then(({ data }) => {
        store.commit('SET_VIEW_PAGINATE', data)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  }
}

const getters = {
  revisitPaginate: state => state.revisitPaginate,
  viewCate: state => state.viewCate,
  viewPaginate: state => state.viewPaginate,
  currentArticle: state => state.currentArticle
}

export default {
  state,
  mutations,
  actions,
  getters
}
