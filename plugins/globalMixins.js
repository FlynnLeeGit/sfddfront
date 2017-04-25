import Vue from 'vue'

const errorMixin = {
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

Vue.mixin(errorMixin)
