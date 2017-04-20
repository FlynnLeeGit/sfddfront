export default (store, e) => {
  if (process.SERVER_BUILD) {
    if (e.config) {
      console.error( // eslint-disable-line
        '[server-ajax_error]',
        e.config.method,
        e.config.url,
        e.toString(),
        e.config
      )
      if (e.data) {
        console.error(e.data) // eslint-disable-line
      }
      store.commit('SET_AJAX_ERROR', {
        message: e.toString(),
        axiosConfig: e.config
      })
    } else {
      throw e
    }
  }
}
