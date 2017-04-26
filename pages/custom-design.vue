<template>
  <div class="custom-design">
    <tab-header title='一对一定制设计'
                :tabs='tabs' />
    <nuxt-child />


  </div>
</template>

<style src='./custom-design.css'></style>

<script>
import TabHeader from '~components/TabHeader'
export default {
  components: {
    TabHeader
  },
  data () {
    return {
      tabs: [
        { to: '/custom-design', name: '介绍', exact: true },
        { to: '/custom-design/vrlist', name: '部分作品' },
        { to: '/custom-design/insperation', name: '全世界的灵感' }
      ]
    }
  }
}
</script>
