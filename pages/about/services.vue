<template>
  <div>
    <tab-header title='中孚空间服务' :tabs='tabs' />
    <nuxt-child />
  </div>
</template>
<script>
import TabHeader from '~components/TabHeader'
export default {
  components: {
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
