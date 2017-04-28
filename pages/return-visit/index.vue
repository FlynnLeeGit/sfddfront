<template>
  <div class="return-visit">
    <tab-header title='用户回访' />
    <div class="return-visit__content">
      <ul class="feeds"
          container>
        <li class="feeds__item"
            v-for='article in revisitPaginate.items'>
          <nuxt-link grid
                     :to="{name:'return-visit-id',params:{id:article.id}}">
            <div class="feeds__img"
                 v-lazy.bg='getSrc(article.thumbnail)'>
              <p class="feeds__author">
                <span>作者<i class="_1em">{{article.writer}}</i></span>
                <span>阅读<i class="_1em"></i>{{article.flow}}</span>
              </p>
            </div>
            <div class="feeds__content">
              <h2 class="feeds__title">{{article.title}}</h2>
              <p class="feeds__desc">
                {{article.introduce}}
              </p>
              <span class="feeds__time">{{article.publishTime | dateFilter }}</span>
            </div>
          </nuxt-link>
        </li>

      </ul>

    </div>
  </div>
</template>

<style src='./index.css'></style>

<script>
import TabHeader from '~components/TabHeader'
import { mapGetters } from 'vuex'
import { imgFilter } from '~/middleware/filters'

export default {
  components: {
    TabHeader
  },
  asyncData ({ store }) {
    return store.dispatch('getRevisit')
  },
  computed: {
    ...mapGetters(['revisitPaginate'])
  },
  methods: {
    getSrc (fname) {
      return imgFilter(fname, 'case380')
    }
  }
}
</script>
