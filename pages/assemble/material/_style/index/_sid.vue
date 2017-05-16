<template>
  <div class="content">
    <div class="content__bd">
      <ul class="m-list"
          grid>
        <li col
            v-for='m in pageMaterials'
            :key='m.id'
            class="m-list__item">
          <div @click='showDetail(m)'
               class="m-list__img"
               v-lazy.bg="imgFilter(m.img,'case600')"></div>
          <p class="m-list__name">{{m.name}}</p>
        </li>
      </ul>
    </div>
    <div class="content__ft">
      <pagination :total='assembleMaterials.length'
                  :num-items-per-page='numItemsPerPage'></pagination>
    </div>
    <modal ref='mModal'>
      <div class="modal"
           slot='content'
           grid>
        <div class="modal__left">
          <div class="modal__img"
               v-lazy.bg="imgFilter(currentMaterial.img,'case600')"></div>
        </div>
        <div class="modal__right">
          <h3 class="detail__name">{{currentMaterial.name}}</h3>
          <ul class="detail__ul">
            <li>产品描述</li>
          </ul>
          <div class="detail__desc">
            {{currentMaterial.description}}
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<style src='./sid.css' scoped></style>

<script>
import { mapGetters } from 'vuex'
import { imgFilter } from '~/middleware/filters'
import Pagination from '~components/Pagination'
import Modal from '~components/Modal'

export default {
  middleware: ['assembleSpace'],
  components: {
    Pagination,
    Modal
  },
  asyncData ({ store, params, redirect }) {
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
      numItemsPerPage: 6,
      currentMaterial: {}
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
    imgFilter,
    showDetail (m) {
      this.currentMaterial = m
      this.$refs.mModal.open()
    }
  }
}
</script>
