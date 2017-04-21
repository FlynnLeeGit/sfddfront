<template>
  <div class="custom-disign">
    <tab-header title='一对一定制设计'
                :tabs='tabs' />
    <nuxt-child />
    <section class="ResponsiveBlock custom__more">
      <img src="~assets/img/customDesign/intro/more.jpg"
           alt="custom-more-img"
           class="ResponsiveBlock__img">
      <div class="ResponsiveBlock__content">
        <div class="custom__more-content"
             grid='middle'>
          <div>
            <h1 class="custom__more-title">了解我们过往的作品</h1>
            <nuxt-link class="Btn -white custom__more-btn"
                       to='/more'>
              点击前往
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
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
        { to: '/customDesign', name: '介绍', exact: true },
        { to: '/customDesign/products', name: '部分作品' },
        { to: '/customDesign/insperation?page=1', name: '全世界的灵感' }
      ]
    }
  }
}
</script>
<style>
.ft-find {
  display: none;
}
</style>
<style src='./customDesign.css'></style>
