const state = {
  st: 0
}

const mutations = {
  SET_SCROLL_TOP (state, scrollTop) {
    state.st = scrollTop
  }
}

export default {
  state,
  mutations
}
