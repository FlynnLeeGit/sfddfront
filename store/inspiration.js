import axios from 'axios'
import errorHandler from '~plugins/errorHandler'
import { toListMap } from '~plugins/utils'

const state = {
  insPaginate: {},
  insStyles: {
    list: [],
    map: {},
    seted: false
  },
  insRooms: {
    list: [],
    map: {},
    seted: false
  },
  vrListAll: [],
  vrList: [],
  vrStyles: {
    list: [],
    map: {},
    seted: false
  },
  vrSpaces: {
    list: [],
    map: {},
    seted: false
  }
}
const mutations = {
  SET_INS_PAGINATE (state, paginate) {
    state.insPaginate = paginate
  },
  SET_INS_STYLES (state, styleMap) {
    if (!state.insStyles.seted) {
      state.insStyles = toListMap(styleMap)
      state.insStyles.seted = true
    }
  },
  SET_INS_ROOMS (state, roomMap) {
    if (!state.insRooms.seted) {
      state.insRooms = toListMap(roomMap)
      state.insRooms.seted = true
    }
  },
  SET_VRLIST_ALL (state, list) {
    state.vrListAll = list
  },
  SET_VRLIST (state, page) {
    state.vrList = state.vrListAll.slice((page - 1) * 6, page * 6)
  },
  SET_VR_STYLES (state, styles) {
    if (!state.vrStyles.seted) {
      state.vrSpaces.seted = true
    }
  },
  SET_VR_SPACES (state, spaces) {
    if (!state.vrSpaces.seted) {
      state.vrSpaces.seted = true
    }
  }
}

const actions = {
  getInspiration (store, query) {
    console.log(query) // eslint-disable-line
    return axios
      .get('/_fapi/inspiration/img', {
        params: query
      })
      .then(({ data }) => {
        store.commit('SET_INS_PAGINATE', data.paginate)
        store.commit('SET_INS_STYLES', data.styles)
        store.commit('SET_INS_ROOMS', data.rooms)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  },
  getVrListAll (store, page) {
    // 此处是全量数据
    return axios
      .get('/_fapi/inspiration/vrs')
      .then(({ data }) => {
        // 页面对象
        store.commit('SET_VRLIST_ALL', data)
        // 设定vr列表
        store.commit('SET_VRLIST', page)
        return axios.get('/_fapi/inspiration/vrs/cate')
      })
      .then(({ data }) => {
        store.commit('SET_VR_STYLES', data.styles)
        store.commit('SET_VR_SPACES', data.spaces)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  }
}

const getters = {
  insStyles: state => state.insStyles,
  insRooms: state => state.insRooms,
  insPaginate: state => state.insPaginate,
  vrPaginate: state => state.vrPaginate,
  vrList: state => state.vrList,
  vrTotal: state => state.vrListAll.length
}

export default {
  state,
  mutations,
  actions,
  getters
}
