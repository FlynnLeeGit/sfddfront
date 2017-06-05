<template>
  <footer class="footer"
          v-if='ftShow'>
    <div container>
      <section class="footer__nav">
        <ul class="footer__list">
          <li class="footer__list-title">热销小区</li>
          <li class='footer__item'>
            <nuxt-link class='Link'
                       to='/cases/dragon'>城开珑庭</nuxt-link>
          </li>
        </ul>
        <ul class="footer__list">
          <li class="footer__list-title">关于</li>
          <li class='footer__item'>
            <nuxt-link class='Link'
                       to='/job'>招聘</nuxt-link>
          </li>
          <li class='footer__item'>
            <nuxt-link class='Link'
                       to='/about/2'>商务</nuxt-link>
          </li>
          <li class='footer__item'>
            <nuxt-link class='Link'
                       to='/about/3'>业务</nuxt-link>
          </li>
          <li class='footer__item'>
            <nuxt-link class='Link'
                       to='/about/4'>课题</nuxt-link>
          </li>
          <li class='footer__item'>
            <nuxt-link class='Link'
                       to='/thanks'>致谢</nuxt-link>
          </li>
        </ul>
        <ul class="footer__list">
          <li class="footer__list-title">关注公众号</li>
          <li class="footer__qr">
            <img src="~assets/img/qr.jpg"
                 width="100px"
                 alt="qr">

          </li>
        </ul>
        <ul class="footer__list">
          <li class="footer__list-title">24小时客服热线</li>
          <li class='footer__phone'>
            400-080-2121
          </li>
        </ul>
      </section>

      <section class="footer__copy-right">
        <span>中孚空间装饰设计 © 2016 上海中孚空间 ／</span>
        <a class="Link"
           href='//www.miitbeian.gov.cn'
           target="_blank">
          沪ICP备12039245号
        </a>
        <span>／</span>
        <!--<a class="Link"
             href='/any'
             target='_blank'>站长统计</a>-->
      </section>
    </div>

  </footer>
</template>

<style src='./Footer.css'></style>

<script>
export default {
  data () {
    return {
      ftShow: true
    }
  },
  created () {
    this.$root.$on('Footer:hide', () => {
      this.ftShow = false
    })
    this.$root.$on('Footer:show', () => {
      this.ftShow = true
    })
  }
}
</script>
