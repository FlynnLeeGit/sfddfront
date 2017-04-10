export default (commit, e) => {
  if (process.SERVER_BUILD) {
    console.error('[server-ajax_error]', e.config.method,e.config.url); // eslint-disable-line
    commit('SET_AJAX_ERROR', `${e.config.method} ${e.config.url}`)
  }
}
