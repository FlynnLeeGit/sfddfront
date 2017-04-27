<template>
  <transition name='modal'>
    <div class="Modal"
         :style='modalStyle'
         @click.stop
         v-if='show'>
      <div class="Modal__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<style src='./Modal.css'></style>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '80%'
    }
  },
  data: () => ({
    show: false
  }),
  computed: {
    modalStyle () {
      return {
        width: this.width
      }
    }
  },
  methods: {
    open () {
      this.$root.$emit('OverlayOpen')
      this.show = true
    },
    close () {
      this.$root.$emit('OverlayClose')
      this.show = false
    }
  },
  mounted () {
    document.addEventListener('click', this.close, false)
  },
  destroyed () {
    document.removeEventListener('click', this.close, false)
  }

}
</script>
