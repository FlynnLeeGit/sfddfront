<template>
  <div class="article">

    <section class="article__banner"
             grid='middle,center'
             v-lazy.bg="getSrc(currentArticle.article.thumbnail)">
      <h1>{{currentArticle.article.title}}</h1>
    </section>

    <section class="article__bd">
      <ul class="article__info"
          grid='2'>
        <li col>
          <span>作者：<span class="_color-primary">{{currentArticle.article.writer}}</span></span>&nbsp;
          <span> {{currentArticle.article.publishTime | dateFilter }}</span>&nbsp;
          <span>阅读：{{currentArticle.article.flow}}</span>
        </li>
        <li col='right'>
          <div class="Tag"
               v-for='t in currentArticle.tags'>{{t.name}}</div>
        </li>
      </ul>
      <div class="article__content">
        <rich-text :html='currentArticle.article.body'></rich-text>
      </div>
    </section>

  </div>
</template>
<style src='./_id.css' scoped></style>
<script>
import RichText from '~components/RichText'
import { imgFilter } from '~/middleware/filters'
import { mapGetters } from 'vuex'
export default {
  asyncData ({ store, params }) {
    return store.dispatch('getCurrentArticle', +params.id)
  },
  components: {
    RichText
  },
  computed: {
    ...mapGetters(['currentArticle'])
  },
  methods: {
    getSrc (fname) {
      return imgFilter(fname, 'case1920')
    }
  }
}
</script>
