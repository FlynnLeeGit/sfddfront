<template>
  <div class="view-point">
    <tab-header title='用户观点'
                :tabs='tabs' />
    <div class="view-point__content">
      <ul class="view-point__list"
          container>
        <list-article :key='article.id'
                      v-for='article in viewPaginate.items'
                      :article='article' />
      </ul>
    </div>
  </div>
</template>
<style src='./index.css' scoped></style>
<script>
import TabHeader from '~components/TabHeader'
import Pagination from '~components/Pagination'
import ListArticle from '~components/ListArticle'
import { mapGetters } from 'vuex'
export default {
  components: {
    TabHeader,
    Pagination,
    ListArticle
  },
  asyncData ({ store, query }) {
    return store.dispatch('getView', query)
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['viewPaginate', 'viewCate']),
    tabs () {
      const _tabs = this.viewCate.map(cate => {
        return { name: cate.name, to: `/view-point?cate=${cate.id}`, exact: true }
      })
      _tabs.unshift({ name: '全部观点', to: '/view-point', exact: true })
      return _tabs
    }
  }

}
</script>
