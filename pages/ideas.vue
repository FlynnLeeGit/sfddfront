<template>
  <div class="ideas-parent">
    <tab-header title='中孚整装理念'
                :tabs="tabs" />
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
        { to: '/ideas/design', name: '设计标准' },
        { to: '/ideas/quality', name: '质量控制' },
        { to: '/ideas/material', name: '材料选择' }
      ]
    }
  }
}
</script>
