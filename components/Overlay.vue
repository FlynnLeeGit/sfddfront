<template>
  <transition name='fade'>
    <div class="Overlay"
         v-if="show">
    </div>
  </transition>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  methods: {
    open () {
      this.show = true
      document.body.style.overflow = 'hidden'
    },
    close () {
      this.show = false
      document.body.style.overflow = 'auto'
    }
  },
  created () {
    this.$root.$on('OverlayOpen', this.open)
    this.$root.$on('OverlayClose', this.close)
  }

}
</script>
<style>
.Overlay {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: color(#000 alpha(.5));
  z-index: 1000;
}
</style>
