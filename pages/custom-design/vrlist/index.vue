<template>
  <div class="vrlist">
    <table-filter :tabs='tabs' />
    <section class='vrlist__bd'
             container>
      <ul class='imgs'
          grid='2'>
        <li :key='item.id'
            class='imgs__item'
            v-for="item in pageVrList">
          <a :href="'/virtual_reality/inspirations/' + item.id + '/vr'"
             target="_blank">
            <div class="imgs__content"
                 v-lazy.bg='getSrc(item.thumb)'>
              <pulse-loader class="imgs__loader"
                            :loading='true' />
              <p class="imgs__name">
                {{item.title}}
              </p>
              <i class="iconfont icon-vr imgs__vr"></i>
            </div>

          </a>
        </li>
      </ul>
      <frag-no-result v-if='!vrList.length' />

    </section>

    <section class='vrlist__ft'
             container
             v-if='vrList.length'>
      <pagination :total='vrList.length'
                  :num-items-per-page='numItemsPerPage' />

    </section>

  </div>
</template>

<style scoped src='./index.css'></style>

<script>
import TableFilter from '~components/TableFilter'
import Pagination from '~components/Pagination'
import pulseLoader from 'vue-spinner/src/PulseLoader'
import fragNoResult from '~components/frag/no-result'

import { mapGetters } from 'vuex'
import { imgFilter } from '~/middleware/filters'

export default {
  components: {
    TableFilter,
    Pagination,
    fragNoResult,
    pulseLoader
  },
  asyncData ({ store, route }) {
    return store.dispatch('initVrList', route.query)
  },
  data: () => ({
    numItemsPerPage: 10
  }),
  methods: {
    getSrc (fname) {
      return imgFilter(fname, 'case600')
    }
  },
  computed: {
    ...mapGetters(['vrListAll', 'vrStyles', 'vrSpaces']),
    query () {
      return this.$route.query
    },
    page () {
      return +this.query.page || 1
    },
    style () {
      return this.query.style
    },
    space () {
      return this.query.space
    },
    vrList () {
      return this.vrListAll
        .filter(item => {
          if (!this.space || this.space === 'all') {
            return true
          }
          return item.space === this.space
        })
        .filter(item => {
          if (!this.style || this.style === 'all') {
            return true
          }
          return item.style === this.style
        })
    },
    pageVrList () {
      return this.vrList.slice((this.page - 1) * this.numItemsPerPage, this.page * this.numItemsPerPage)
    },
    tabs () {
      return [{
        tag: 'space',
        name: '空间',
        filter: this.vrSpaces.list,
        filterMap: this.vrSpaces.map
      }, {
        tag: 'style',
        name: '风格',
        filter: this.vrStyles.list,
        filterMap: this.vrStyles.map
      }]
    }
  }
}
</script>
