<template>
  <div>
    <tab-header title='中孚空间服务'
                :tabs='tabs' />
    <nuxt-child />
    <market title='2017年春季 · 整装方案'
            desc="每季度整装产品限时发售，离本季产品下架时间还有
                    <br>
                    <span class='_color-primary'>XX</span>
                    天"
            to='/2'
            name='contained' />

  </div>
</template>
<script>
import Market from '~components/Market'
import TabHeader from '~components/TabHeader'

export default {
  components: {
    Market,
    TabHeader
  },
  data () {
    return {
      tabs: [
        { to: '/about/services/zero', name: '闭口合同零增项' },
        { to: '/about/services/see', name: '所见即所得' },
        { to: '/about/services/construction', name: '先施工后付款' },
        { to: '/about/services/loan', name: '装修贷款' }
      ]
    }
  }
}
</script>
