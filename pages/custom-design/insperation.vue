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

    <modal ref='imgModal'
           width='95%'>
      <div class="modal">
        <pulse-loader class="modal__loader" />
        <img :src="currentImg"
             width="100%"
             alt="modalImg">
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
    currentImg: ''
  }),
  methods: {
    getSrc (fname) {
      return hozzyImgFilter(fname, 'case600')
    },
    openModal (fname) {
      this.currentImg = hozzyImgFilter(fname, 'case1920')
      this.$refs.imgModal.open()
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
