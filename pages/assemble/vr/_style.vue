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
  height: calc(100vh - 80px);
}
</style>
<script>
export default {
  data () {
    return {
      ftEl: null
    }
  },
  mounted () {
    this.ftEl = document.querySelector('.footer')
    this.ftEl.style.display = 'none'
  },
  destroyed () {
    this.ftEl.style.display = 'block'
  }
}
</script>
