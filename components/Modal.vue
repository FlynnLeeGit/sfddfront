<template>
  <div class="modal-wrapper" v-show='showWrapper'>
    <transition name='modal'
                @after-leave='toggleWrapper'>
      <div class="Modal"
           v-if='show'>
        <div class="Modal__hd">
          <div class="Modal__title"></div>
          <div class="Modal__tools">
            <div class="Modal__icon"
                 @click='iconClose()'>
              <i class="iconfont icon-close"></i>
            </div>
            <slot name='tool'></slot>
          </div>
        </div>
        <div class="Modal__content">
          <slot name='content'></slot>
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
    show: false,
    showWrapper: false
  }),
  methods: {
    toggleWrapper () {
      this.showWrapper = false
    },
    open () {
      this.showWrapper = true
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
