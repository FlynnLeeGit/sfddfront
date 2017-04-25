import { throttle } from '~plugins/utils'

export const scrollMixin = {
  methods: {
    setTop () {
      this.$store.commit('SET_SCROLL_TOP', document.body.scrollTop)
    }
  },
  mounted () {
    window.addEventListener(
      'scroll',
      () => {
        throttle(this.setTop, 50)
      },
      false
    )
    this.setTop()
  }
}

