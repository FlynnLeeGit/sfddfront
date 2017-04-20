<template>
  <div class="inspiration">


    <table-filter @change='change' :tabs='tabs'/>



    <section class='inspiration__bd' container>
      <ul class='imgs' grid='2'>
        <li :key='item.id' class='imgs__item' v-for='item in insPaginate.items'>
          <div class="imgs__img-ratio">
            <div class="imgs__img-content">
              <img :src="getHozzyImg(item.src)" />

            </div>

          </div>
        </li>
      </ul>

    </section>



    <section class="inspiration__ft">
        <pagination v-if='insPaginate.totalCount' :total='insPaginate.totalCount' />
    </section>
  </div>
</template>
<script>
import TableFilter from '~components/TableFilter'
import Pagination from '~components/Pagination'
import {mapGetters} from 'vuex'
import {hozzyImgFilter} from '~plugins/filters'

export default {
  asyncData ({store, route}) {
    return store.dispatch('getInspiration', route.query)
  },
  data () {
    return {
      tabs: []
    }
  },
  components: {
    TableFilter,
    Pagination
  },
  methods: {
    change (route) {

    },
    getHozzyImg(fname){
      return hozzyImgFilter(fname,'case600')
    }
  },
  computed: {
    ...mapGetters(['insStyles', 'insRooms', 'insPaginate'])
  },
  created () {
    const _tabs = []

    _tabs.push({
      tag:'room',
      name:'空间',
      filter:this.insRooms.list,
      filterMap:this.insRooms.map
    })
    _tabs.push({
      tag:'style',
      name:'风格',
      filter:this.insStyles.list,
      filterMap:this.insStyles.map
    })
    this.tabs = _tabs
  }
}
</script>
<style scoped src='./insperation.css'></style>
