<template>
  <div class="vr">
    <iframe src="/virtual_reality/scene/1"
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
export default {
  created () {
    this.$root.$emit('FooterClose')
  },
  destroyed () {
    this.$root.$emit('FooterOpen')
  }
}
</script>
