<template>
  <div class="inspiration">
    <table-filter :tabs='tabs' />

    <section class='inspiration__bd'
             container>
      <waterfall v-if='insList.length'
                 :col-num='3'
                 @click-item='clickImg'
                 :needmore='loadmore'
                 :list='insList'
                 :src-filter='waterfallSrc'>
      </waterfall>

      <frag-no-result v-else />
    </section>

    <modal ref='imgModal'>

      <a :href="currentImg"
         slot='tool'
         class="Modal__icon"
         target="_blank">
        <i class="iconfont icon-fullscreen"></i>
      </a>

      <div class="modal"
           slot='content'>
        <pulse-loader class="modal__loader" />
        <img class="modal__img"
             :src='currentImg'
             :width="modalImgWidth"
             :height="modalImgHeight">
      </div>
    </modal>
    <transition v-if='isLoadmore'>
      <div class="load-modal">
        <pulse-loader />
      </div>
    </transition>

  </div>
</template>
<script>
import TableFilter from '~components/TableFilter'
import Modal from '~components/Modal'
import Waterfall from '~components/Waterfall'
import pulseLoader from 'vue-spinner/src/PulseLoader'

import fragNoResult from '~components/frag/no-result'

import { mapGetters, mapActions } from 'vuex'
import { hozzyImgFilter } from '~/middleware/filters'

export default {
  asyncData ({ store, route }) {
    return store.dispatch('getInspiration', route.query).then(() => {
      return { page: 1 }
    })
  },
  components: {
    TableFilter,
    Waterfall,
    Modal,
    fragNoResult,
    pulseLoader
  },
  data: () => ({
    currentImg: '',
    modalImgWidth: 'auto',
    modalImgHeight: 'auto',
    isLoadmore: false
  }),
  methods: {
    ...mapActions(['getInspirationMore']),
    clickImg (item) {
      this.openModal(item.src)
    },
    waterfallSrc (src) {
      return hozzyImgFilter(src, 'case380')
    },
    loadmore () {
      this.isLoadmore = true
      return this.getInspirationMore(Object.assign({}, this.$route.query, { page: ++this.page }))
        .then(() => {
          this.isLoadmore = false
        })
    },
    openModal (fname) {
      this.currentImg = hozzyImgFilter(fname, 'default')
      this.$refs.imgModal.open()
      const img = new Image()
      img.src = this.currentImg
      const maxWidth = this.$refs.imgModal.getMaxWidth()
      const maxHeight = this.$refs.imgModal.getMaxHeight()
      const maxRatio = maxWidth / maxHeight
      const timer = setInterval(() => {
        if (img.width) {
          clearInterval(timer)
          const imgRatio = img.width / img.height
          // 图片过高
          if (imgRatio <= maxRatio) {
            this.modalImgHeight = `${maxHeight}px`
          }
          if (imgRatio > maxRatio) {
            this.modalImgWidth = `${maxWidth}px`
          }
        }
      }, 40)
    }
  },
  computed: {
    ...mapGetters(['insStyles', 'insRooms', 'insList']),
    tabs () {
      return [{
        tag: 'room',
        name: '空间',
        filter: this.insRooms.list,
        filterMap: this.insRooms.map
      }, {
        tag: 'style',
        name: '风格',
        filter: this.insStyles.list,
        filterMap: this.insStyles.map
      }]
    }
  },
  mounted () {
    this.$root.$emit('FooterClose')
  },
  destroyed () {
    this.$root.$emit('FooterOpen')
  }
}
</script>
<style scoped src='./insperation.css'></style>
