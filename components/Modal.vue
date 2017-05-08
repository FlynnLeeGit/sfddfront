<template>
  <div>
    <transition name='modal'>
      <div class="Modal"
           v-if='show'>
        <div class="Modal__hd">
          <div class="Modal__title"></div>
          <div class="Modal__icon"
               @click='iconClose()'>
            <i class="iconfont icon-close"></i>
          </div>
          <a class="Modal__icon"
             :href='src'
             target="_blank">
            <i class="iconfont icon-fullscreen"></i>
          </a>
        </div>
        <div class="Modal__content">
          <slot></slot>
        </div>
      </div>
    </transition>
    <modal-overlay ref='overlay'
                   @close='close()' />
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
    src: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    open () {
      this.show = true
      this.$refs.overlay.open()
    },
    close () {
      this.show = false
    },
    iconClose () {
      this.show = false
      this.$refs.overlay.close()
    },
    getMaxWidth () {
      return window.innerWidth - 20
    },
    getMaxHeight () {
      return window.innerHeight - 80
    }
  }
}
</script>
