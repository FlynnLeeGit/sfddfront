<template>
  <market title='2017年春季 · 整装方案'
          :desc="desc"
          to='/2017'
          name='contained' />
</template>
<script>
import Market from '../Market'
export default {
  components: {
    Market
  },
  computed: {
    dayRange () {
      const now = new Date().getTime()
      const end = new Date('2017-07-01').getTime()
      const oneDay = 24 * 3600 * 1000
      const rangeTime = end - now
      return Number.parseInt(rangeTime / oneDay)
    },
    desc () {
      return `每季度整装产品限时发售，离本季产品下架时间还有<br><span class='_color-primary'>${this.dayRange}</span>天`
    }
  }
}
</script>
