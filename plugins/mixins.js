// 局部使用的mixin
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

export const errorMixin = {
  mounted () {
    const serverAjaxErrors = this.$store.state.ajaxErrors
    if (serverAjaxErrors.length) {
      Object.keys(serverAjaxErrors).forEach(k => {
        console.error( // eslint-disable-line
          '[server-ajax_error]',
          JSON.parse(JSON.stringify(serverAjaxErrors[k]))
        )
      })
    }
  }
}
