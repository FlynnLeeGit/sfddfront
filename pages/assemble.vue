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
import { mapGetters } from 'vuex'

import TabHeader from '~components/TabHeader'
export default {
  middleware: ['assembleStyle'],
  components: {
    TabHeader
  },
  computed: {
    ...mapGetters(['assembleCurrentStyle']),
    tabs () {
      return [
        { name: '介绍', to: `/assemble/intro/${this.assembleCurrentStyle}` },
        { name: 'VR全景', to: `/assemble/vr/${this.assembleCurrentStyle}` },
        { name: '材料', to: `/assemble/material/${this.assembleCurrentStyle}` }
      ]
    },
    title () {
      return '整装 · ' + STYLE_MAP[this.assembleCurrentStyle]
    }
  }
}

</script>
