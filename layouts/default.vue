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
import { errorMixin, scrollMixin } from '~plugins/mixins'

export default {
  components: {
    MyHeader,
    MyFooter
  },
  mixins: [scrollMixin, errorMixin]
}
</script>
<style>
body {
  padding-top: 80px;
}
</style>
