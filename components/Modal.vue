<template>
  <div>
    <transition name='modal'>
      <div class="Modal"
           :style='modalStyle'
           v-if='show'>
        <div class="Modal__content">
          <slot></slot>
        </div>
      </div>
    </transition>
    <modal-overlay ref='overlay' @close='close()' />
  </div>
</template>
<style src='./Modal.css'></style>
<script>
import ModalOverlay from './Overlay'
export default {
  components: {
    ModalOverlay
  },
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
      this.$refs.overlay.open()
      this.show = true
    },
    close () {
      this.show = false
    }
  }
}
</script>
