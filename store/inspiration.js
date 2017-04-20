import axios from 'axios'
import errorHandler from '~plugins/errorHandler'
import { toListMap } from '~plugins/utils'

const state = {
  paginate: {},
  styles: {
    list: [],
    map: {},
    seted: false
  },
  rooms: {
    list: [],
    map: {},
    seted: false
  }
}
const mutations = {
  SET_INS_PAGINATE (state, data) {
    state.paginate = data
  },
  SET_INS_STYLES (state, styleMap) {
    if (!state.styles.seted) {
      state.styles = toListMap(styleMap)
      state.styles.seted = true
    }
  },
  SET_INS_ROOMS (state, roomMap) {
    if (!state.rooms.seted) {
      state.rooms = toListMap(roomMap)
      state.styles.seted = true
    }
  }
}

const actions = {
  getInspiration (store, query) {
    return axios.get('/_fapi/inspiration/img', {
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
  }
}

const getters = {
  insStyles: state => state.styles,
  insRooms: state => state.rooms,
  insPaginate: state => state.paginate
}

export default {
  state,
  mutations,
  actions,
  getters
}
