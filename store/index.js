export const state = {}

export const mutations = {}

export const actions = {
  init_index_page ({ commit }, data) {
    commit('post/init_posts', data.posts || [])
  },
  init_test_page ({ commit }, data) {
    commit('post/init_hello', data.hello || '')
  }
}
