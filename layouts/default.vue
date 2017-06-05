<template>
  <div id="app">
    <my-header />
    <my-chat />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '~components/Header.vue'
import MyChat from '~components/Chat.vue'
import MyFooter from '~components/Footer.vue'
import { errorMixin, scrollMixin } from '~plugins/mixins'

export default {
  components: {
    MyHeader,
    MyFooter,
    MyChat
  },
  mixins: [scrollMixin, errorMixin]
}
</script>
<style>
body {
  padding-top: 80px;
}
</style>
