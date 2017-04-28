<template>
  <div class="return-visit">
    <tab-header title='用户回访' />
    <div class="return-visit__content">
      <ul class="return-visit__list"
          container>
        <list-article :key='article.id'
                      v-for='article in revisitPaginate.items'
                      :article='article' />
      </ul>
    </div>
  </div>
</template>

<style src='./index.css'></style>

<script>
import TabHeader from '~components/TabHeader'
import ListArticle from '~components/ListArticle'
import { mapGetters } from 'vuex'

export default {
  components: {
    TabHeader,
    ListArticle
  },
  asyncData ({ store }) {
    return store.dispatch('getRevisit')
  },
  computed: {
    ...mapGetters(['revisitPaginate'])
  }
}
</script>
