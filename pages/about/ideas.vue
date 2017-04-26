<template>
  <div class="ideas-parent">
    <tab-header title='中孚整装理念'
                :tabs="tabs" />
    <nuxt-child />
    <frag-market-contained></frag-market-contained>
  </div>
</template>
<script>
import TabHeader from '~components/TabHeader'
import fragMarketContained from '~components/frag/market-contained'
export default {
  components: {
    TabHeader,
    fragMarketContained
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
