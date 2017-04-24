<template>
  <div class="custom-design">
    <tab-header title='一对一定制设计'
                :tabs='tabs' />
    <nuxt-child />
    <market-know-previous />

  </div>
</template>
<script>
import TabHeader from '~components/TabHeader'
import marketKnowPrevious from '~components/market/mKnowPrevious'
export default {
  components: {
    TabHeader,
    marketKnowPrevious
  },
  data () {
    return {
      tabs: [
        { to: '/customDesign', name: '介绍', exact: true },
        { to: '/customDesign/vrlist', name: '部分作品' },
        { to: '/customDesign/insperation?page=1', name: '全世界的灵感' }
      ]
    }
  }
}
</script>
<style src='./customDesign.css'></style>
