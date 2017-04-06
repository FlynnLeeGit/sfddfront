export const state = {
  posts: [],
  hello: ''
}

export const mutations = {
  init_posts (state, posts) {
    state.posts = posts
  },
  init_hello (state, hello) {
    state.hello = hello
  }
}

