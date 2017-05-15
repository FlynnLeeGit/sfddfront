<template>
  <div class="vr">
    <iframe :src="vrUrl"
            width="100%"
            height="100%"
            frameborder="0"></iframe>
  </div>
</template>
<style scoped>
.vr {
  height: calc(100vh - 85px);
}
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  asyncData ({ store, params }) {
  },
  computed: {
    ...mapGetters(['assembleCurrentStyleId']),
    vrUrl () {
      return `/virtual_reality/scene/${this.assembleCurrentStyleId}`
    }
  },
  created () {
    this.$root.$emit('FooterClose')
  },
  destroyed () {
    this.$root.$emit('FooterOpen')
  }
}
</script>
