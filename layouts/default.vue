<template>
  <div id="app">
    <my-header />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '~components/Header.vue'
import MyFooter from '~components/Footer.vue'
import { throttle } from '~plugins/utils'
export default {
  components: {
    MyHeader,
    MyFooter
  },
  methods: {
    setTop () {
      this.$store.commit('SET_SCROLL_TOP', document.body.scrollTop)
    }
  },
  mounted () {
    const serverAjaxErrors = this.$store.state.ajaxErrors
    if (serverAjaxErrors.length) {
      Object.keys(serverAjaxErrors).forEach(k => {
        console.error('[server-ajax_error]', JSON.parse(JSON.stringify(serverAjaxErrors[k]))) // eslint-disable-line
      })
    }
    window.addEventListener('scroll', () => {
      throttle(this.setTop, 50)
    }, false)
    this.setTop()
  }
}
</script>
<style>
  body{
    padding-top: 80px;
  }
</style>
