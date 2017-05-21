<template>
  <section class="ResponsiveBlock Advertise">
    <picture>
      <source type='image/webp'
              srcset='~assets/img/common/advertise/webp/count-down.webp'>
      <img src='~assets/img/common/advertise/count-down.jpg'
           class="ResponsiveBlock__img">
    </picture>
    <div class="ResponsiveBlock__content">
      <div class="Advertise__content"
           grid='middle'>
        <div>
          <h1 class="Advertise__title">2017年春季 · 整装方案</h1>
          <h4 class="Advertise__desc">
            每季度整装产品限时发售，离本季产品下架时间还有
            <br>
            <span class='_color-primary'>{{this.dayRange}}</span>天
          </h4>
          <nuxt-link class="Btn -white Advertise__btn"
                     to='/assemble/intro/cn'>
            点击前往
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    dayRange () {
      const now = new Date().getTime()
      const end = new Date('2017-07-01').getTime()
      const oneDay = 24 * 3600 * 1000
      const rangeTime = end - now
      return Number.parseInt(rangeTime / oneDay)
    }
  }
}
</script>
