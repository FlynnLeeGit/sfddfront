<template>
  <li class="ListArticle">
    <nuxt-link grid
               :to="articleTo(article)">
      <div class="ListArticle__img"
           v-lazy.bg='getSrc(article.thumbnail)'>
        <p class="ListArticle__author">
          <span>作者<i class="_1em">{{article.writer}}</i></span>
          <span>阅读<i class="_1em"></i>{{article.flow}}</span>
        </p>
      </div>
      <div class="ListArticle__content">
        <h2 class="ListArticle__title">{{article.title}}</h2>
        <p class="ListArticle__desc">
          {{article.introduce}}
        </p>
        <span class="ListArticle__time">{{article.publishTime | dateFilter }}</span>
      </div>
    </nuxt-link>
  </li>
</template>
<style src='./ListArticle.css'></style>
<script>
import { imgFilter } from '~/middleware/filters'
export default {
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getSrc (fname) {
      return imgFilter(fname, 'case380')
    },
    articleTo (article) {
      return {
        name: 'article-id',
        params: { id: article.id },
        query: { from: this.$route.name }
      }
    }
  }
}
</script>
