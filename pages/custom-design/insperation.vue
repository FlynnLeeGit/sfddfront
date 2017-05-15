<template>
  <div class="inspiration">
    <table-filter :tabs='tabs' />

    <section class='inspiration__bd'
             container>
      <ul class='imgs'
          grid='2'>
        <li :key='item.id'
            class='imgs__item'
            @click.stop='openModal(item.src)'
            v-for='item in insPaginate.items'
            v-lazy.bg="getSrc(item.src)">
          <div class="imgs__loader">
            <pulse-loader />
          </div>
        </li>
      </ul>
      <frag-no-result v-if='!insPaginate.totalCount' />
    </section>

    <section class="inspiration__ft"
             v-if='insPaginate.totalCount'>
      <pagination :num-items-per-page='16'
                  :total='insPaginate.totalCount' />

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

  </div>
</template>
<script>
import TableFilter from '~components/TableFilter'
import Pagination from '~components/Pagination'
import Modal from '~components/Modal'
import pulseLoader from 'vue-spinner/src/PulseLoader'

import fragNoResult from '~components/frag/no-result'

import { mapGetters } from 'vuex'
import { hozzyImgFilter } from '~/middleware/filters'

export default {
  asyncData ({ store, route }) {
    return store.dispatch('getInspiration', route.query)
  },
  components: {
    TableFilter,
    Pagination,
    Modal,
    fragNoResult,
    pulseLoader
  },
  data: () => ({
    currentImg: '',
    modalImgWidth: 'auto',
    modalImgHeight: 'auto'
  }),
  methods: {
    getSrc (fname) {
      return hozzyImgFilter(fname, 'case600')
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
    ...mapGetters(['insStyles', 'insRooms', 'insPaginate']),
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
  }
}
</script>
<style scoped src='./insperation.css'></style>
