const state = {
  ajaxErrors: []
}

const mutations = {
  SET_AJAX_ERROR (state, e) {
    state.ajaxErrors.push(e)
  }
}

export default {
  state,
  mutations
}
