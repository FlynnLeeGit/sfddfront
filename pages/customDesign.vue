<template>
  <div class="custom-design">
    <tab-header title='一对一定制设计'
                :tabs='tabs' />
    <nuxt-child />
    <section class="ResponsiveBlock custom-design__ft">
      <img src="~assets/img/customDesign/intro/more.jpg"
           class="ResponsiveBlock__img">
      <div class="ResponsiveBlock__content">
        <div class="custom-design__ft-content"
             grid='middle'>
          <div>
            <h1 class="custom-design__ft-title">了解我们过往的作品</h1>
            <nuxt-link class="Btn -white custom-design__ft-btn"
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
        { to: '/customDesign/vrlist', name: '部分作品' },
        { to: '/customDesign/insperation?page=1', name: '全世界的灵感' }
      ]
    }
  }
}
</script>
<style src='./customDesign.css'></style>
