<template>
  <header class='header'
          :not-fixed='notFixed'>
    <div container>
      <a href="/"
         class='header__logo'>
        <img src="~assets/img/logo.png"
             alt="logo">
      </a>
      <nav class='header__nav'>
        <ul class="header__links">
          <li class="header__link">
            <nuxt-link :to="{name:'index'}"
                       exact>首页</nuxt-link>
          </li>
          <li class="header__link">
            <nuxt-link to="/assemble"
                       event='noop'
                       @click.native="to('/assemble/intro/cn')">
              成品整装 · 2017春季
            </nuxt-link>
            <ul class="header__dropdown">
              <li class="header__dropdonw-item">
                <nuxt-link to='/assemble/intro/cn'>新中式</nuxt-link>
              </li>
              <li class="header__dropdonw-item">
                <nuxt-link to='/assemble/intro/classic'>新古典</nuxt-link>
              </li>
              <li class="header__dropdonw-item">
                <nuxt-link to='/assemble/intro/simple'>现代简约</nuxt-link>
              </li>
              <li class="header__dropdonw-item">
                <nuxt-link to='/assemble/intro/america'>简美</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="header__link">
            <nuxt-link to="/custom-design">一对一定制设计</nuxt-link>
          </li>
          <li class="header__link">
            <nuxt-link to='/return-visit'>用户回访</nuxt-link>
          </li>
          <li class="header__link">
            <nuxt-link to="/about"
                       event='noop'
                       @click.native="to('/about/ideas/design')">
              关于我们
            </nuxt-link>
            <ul class="header__dropdown">
              <li class="header__dropdonw-item">
                <nuxt-link to='/about/ideas/design'>中孚整装理念</nuxt-link>
              </li>
              <li class="header__dropdonw-item">
                <nuxt-link to='/about/services/zero'>中孚空间服务</nuxt-link>
              </li>
              <li class="header__dropdonw-item">
                <nuxt-link to='/about/us?team=design'>我们</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="header__link">
            <nuxt-link to="/view-point">观点</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style src='./Header.css'></style>

<script>
export default {
  data () {
    return {
      notFixed: false
    }
  },
  created () {
    this.$root.$on('HeaderNotFixed', () => {
      this.notFixed = true
    })
    this.$root.$on('HeaderFixed', () => {
      this.notFixed = false
    })
  },
  methods: {
    to (url) {
      this.$router.push(url)
    }
  }
}
</script>
