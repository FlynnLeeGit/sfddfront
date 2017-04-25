<template>
  <div class="ideas-parent">
    <tab-header title='中孚整装理念'
                :tabs="tabs" />
    <nuxt-child />
    <market title='2017年春季 · 整装方案'
            desc="每季度整装产品限时发售，离本季产品下架时间还有
                  <br>
                  <span class='_color-primary'>XX</span>
                  天"
            to='/2'
            name='contained' />/>
  </div>
</template>
<script>
import TabHeader from '~components/TabHeader'
import Market from '~components/Market'
export default {
  components: {
    TabHeader,
    Market
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
