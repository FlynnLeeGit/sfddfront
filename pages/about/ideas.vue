<template>
  <div class="ideas-parent">
    <tab-header title='中孚整装理念'
                :tabs="tabs" />
    <nuxt-child />
    <market-contained />
  </div>
</template>
<script>
import TabHeader from '~components/TabHeader'
import marketContained from '~components/market/mContained'
export default {
  components: {
    TabHeader,
    marketContained
  },
  data () {
    return {
      tabs: [
        { to: '/about/ideas/design', name: '设计标准' },
        { to: '/about/ideas/quality', name: '质量控制' },
        { to: '/about/ideas/material', name: '材料选择' }
      ]
    }
  }
}
</script>
