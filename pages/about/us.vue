<template>
  <div class="us">
    <tab-header title='我们'
                :tabs='tabs' />
    <div class="us__child">
      <nuxt-child />
    </div>
  </div>
</template>

<style>
.us__child {
  padding-top: 60px;
}
</style>

<script>
import TabHeader from '~components/TabHeader'
export default {
  components: {
    TabHeader
  },
  data () {
    return {
      tabs: [
        { to: '/about/us/design', name: '设计团队' },
        { to: '/about/us/tech', name: '技术团队' },
        { to: '/about/us/build', name: '施工团队' }
      ]
    }
  }
}
</script>
