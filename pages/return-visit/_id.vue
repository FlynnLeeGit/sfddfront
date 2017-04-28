<template>
  <div class="revisit-id">
    <section class="revisit-id__banner"
             grid='middle,center'
             v-lazy.bg="getSrc(currentRevisit.article.thumbnail)">
      <h1>{{currentRevisit.article.title}}</h1>
    </section>

    <section class="revisit-id__bd">
      <ul class="revisit-id__info"
          grid='2'>
        <li col>
          <span>作者：<span class="_color-primary">{{currentRevisit.article.writer}}</span></span>&nbsp;
          <span> {{currentRevisit.article.publishTime | dateFilter }}</span>&nbsp;
          <span>阅读：{{currentRevisit.article.flow}}</span>
        </li>
        <li col='right'>
          <div class="Tag"
               v-for='t in currentRevisit.tags'>{{t.name}}</div>
        </li>
      </ul>
      <div class="revisit-id__content">
        <rich-text :html='currentRevisit.article.body'></rich-text>
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
    return store.dispatch('getCurrentRevisit', +params.id)
  },
  components: {
    RichText
  },
  computed: {
    ...mapGetters(['currentRevisit'])
  },
  data: () => ({

  }),
  methods: {
    getSrc (fname) {
      return imgFilter(fname, 'case1920')
    }
  }
}
</script>
