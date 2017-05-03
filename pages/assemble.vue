<template>
  <div class="assemble">
    <tab-header :tabs='tabs'
                :title='title' />
    <nuxt-child />
  </div>
</template>

<style src='./assemble.css'></style>

<script>
const STYLE_MAP = {
  cn: '新中式',
  america: '简美',
  simple: '现代简约',
  classic: '新古典'
}


import TabHeader from '~components/TabHeader'
export default {
  components: {
    TabHeader
  },
  computed: {
    style () {
      // 介绍页为静态页 使用正则匹配风格style 解构匹配
      const [, staticStyle] = this.$route.path.match(/\/intro\/(\w+)/) || []
      return this.$route.params.style || staticStyle
    },
    tabs () {
      return [
        { name: '介绍', to: `/assemble/intro/${this.style}` },
        { name: 'VR全景', to: `/assemble/vr/${this.style}` },
        { name: '材料', to: `/assemble/material/${this.style}` }
      ]
    },
    title () {
      return '整装 · ' + STYLE_MAP[this.style]
    }
  }
}

</script>
