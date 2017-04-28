import axios from '~plugins/axios'
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
  SET_VR_STYLES (state, styles) {
    if (!state.vrStyles.seted) {
      const styleMap = {
        all: '风格-全部'
      }
      styles.forEach(s => {
        styleMap[s] = s
      })
      state.vrStyles = toListMap(styleMap)
      state.vrStyles.seted = true
    }
  },
  SET_VR_SPACES (state, spaces) {
    if (!state.vrSpaces.seted) {
      const spaceMap = {
        all: '空间-全部'
      }
      spaces.forEach(s => {
        spaceMap[s] = s
      })
      state.vrSpaces = toListMap(spaceMap)
      state.vrSpaces.seted = true
    }
  }
}

const actions = {
  getInspiration (store, query) {
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
  getVrListAll (store) {
    // 此处是全量数据
    return axios
      .get('/_fapi/inspiration/vrs')
      .then(({ data }) => {
        // 页面对象
        store.commit('SET_VRLIST_ALL', data)
      })
      .catch(e => {
        errorHandler(store, e)
      })
  },
  getVrCate (store) {
    return axios
      .get('/_fapi/inspiration/vrs/cate')
      .then(({ data }) => {
        store.commit('SET_VR_STYLES', data.styles)
        store.commit('SET_VR_SPACES', data.spaces)
        return axios.get('/_fapi/inspiration/vrs')
      })
      .catch(e => {
        errorHandler(store, e)
      })
  },
  initVrList (store, query) {
    return store
      .dispatch('getVrCate')
      .then(() => store.dispatch('getVrListAll'))
      .catch(e => {
        errorHandler(store, e)
      })
  }
}

const getters = {
  insStyles: state => state.insStyles,
  insRooms: state => state.insRooms,
  insPaginate: state => state.insPaginate,
  vrListAll: state => state.vrListAll,
  vrSpaces: state => state.vrSpaces,
  vrStyles: state => state.vrStyles
}

export default {
  state,
  mutations,
  actions,
  getters
}
