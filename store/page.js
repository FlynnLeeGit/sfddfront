export const state = {}

export const mutations = {
  SET_PAGE_CACHE (state, { url, cache }) {
    // 只有在数据有子键时才赋值 否则给与空对象
    state[url] = {
      cache: cache,
      lastUpdated: new Date().getTime()
    }
  }
}
