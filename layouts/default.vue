<template>
  <div id="app">
    <my-header />
    <nuxt />
    <my-footer />
    <overlay />
  </div>
</template>

<script>
import MyHeader from '~components/Header.vue'
import MyFooter from '~components/Footer.vue'
import Overlay from '~components/Overlay.vue'
import { errorMixin, scrollMixin } from '~plugins/mixins'

export default {
  components: {
    MyHeader,
    MyFooter,
    Overlay
  },
  mixins: [scrollMixin, errorMixin]
}
</script>
<style>
body {
  padding-top: 80px;
}
</style>
