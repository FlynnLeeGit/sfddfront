import axios from '~plugins/axios'

export default ctx => {
  const { store, req, route, isServer, isClient } = ctx
  let url, cache
  if (isServer && route.name) {
    url = req.url
    cache = req.body
    store.commit('page/SET_PAGE_CACHE', { url, cache })
    console.log(`[server] 初始化store中，init_${route.name}_page...`, url); // eslint-disable-line
    store.dispatch(`init_${route.name}_page`, cache)
  }
  if (isClient && route.name) {
    url = route.fullPath
    const currentPage = store.state.page[url]

    if (!currentPage) {
      return ajaxPage(url)
    } else {
      if (new Date().getTime() - currentPage.lastUpdated > 15 * 60 * 1000) {
        return ajaxPage(url)
      }
    }
  }

  function ajaxPage (url) {
    return axios.get(url).then(res => {
      const cache = res.data
      store.commit('page/SET_PAGE_CACHE', { url, cache })
      console.log(`[client] 初始化store中,init_${route.name}_page...`, url); // eslint-disable-line
      store.dispatch(`init_${route.name}_page`, cache)
    })
  }
}
