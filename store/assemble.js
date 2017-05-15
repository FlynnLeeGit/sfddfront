import axios from '~plugins/axios'
import errorHandler from '~plugins/errorHandler'

const state = {
  currentStyle: '',
  currentStyleId: 0,
  spaces: [],
  materials: []
}
const mutations = {
  SET_ASSEMBLE_CURRENT_STYLE (state, style) {
    state.currentStyle = style
  },
  SET_ASSEMBLE_CURRENT_STYLE_ID (state, styleId) {
    state.currentStyleId = styleId
  },
  SET_ASSEMBLE_SPACES (state, spaces) {
    state.spaces = spaces
  },
  SET_ASSEMBLE_MATERIALS (state, materials) {
    state.materials = materials
  }
}
const actions = {
  setAssembleStyleId (store, styleEn) {
    return axios
      .get(`/_fapi/planscheme/recomend`)
      .then(({ data }) => {
        store.commit('SET_ASSEMBLE_CURRENT_STYLE_ID', data[styleEn])
      })
      .catch(e => {
        errorHandler(store, e)
      })
  },
  getAssembleSpaces (store, currentStyleId) {
    return axios
      .get(`/_fapi/planschemes/${currentStyleId}/space`)
      .then(({ data }) => {
        store.commit('SET_ASSEMBLE_SPACES', data)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  },
  getAssembleMaterials (store, sid) {
    return axios
      .get(`/_fapi/spaces/${sid}/material`)
      .then(({ data }) => {
        store.commit('SET_ASSEMBLE_MATERIALS', data)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  }
}
const getters = {
  assembleCurrentStyle: state => state.currentStyle,
  assembleCurrentStyleId: state => state.currentStyleId,
  assembleSpaces: state => state.spaces,
  assembleMaterials: state => state.materials
}

export default {
  state,
  mutations,
  actions,
  getters
}
