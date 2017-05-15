<template>
  <div class="content">
    <div class="content__bd">
      <ul class="m-list"
          grid>
        <li col
            v-for='m in pageMaterials'
            class="m-list__item">
          <div class="m-list__img"
               v-lazy.bg="imgFilter(m.img,'case600')"></div>
          <p class="m-list__name">{{m.name}}</p>
        </li>
      </ul>
    </div>
    <div class="content__ft">
      <pagination :total='assembleMaterials.length'
                  :num-items-per-page='numItemsPerPage'></pagination>
    </div>
  </div>
</template>
<style src='./sid.css' scoped></style>

<script>
import { mapGetters } from 'vuex'
import { imgFilter } from '~/middleware/filters'
import Pagination from '~components/Pagination'

export default {
  middleware: ['assembleSpace'],
  components: {
    Pagination
  },
  asyncData ({store, params, redirect}) {
    let sid = params.sid
    if (!sid) {
      sid = store.state.assemble.spaces[0].id
      redirect(`/assemble/material/${params.style}/${sid}`)
    } else {
      return store.dispatch('getAssembleMaterials', sid)
    }
  },
  data () {
    return {
      numItemsPerPage: 6
    }
  },
  computed: {
    ...mapGetters(['assembleMaterials']),
    page () {
      return +this.$route.query.page || 1
    },
    pageMaterials () {
      return this.assembleMaterials.slice((this.page - 1) * this.numItemsPerPage, this.page * this.numItemsPerPage)
    }
  },
  methods: {
    imgFilter
  }
}
</script>
