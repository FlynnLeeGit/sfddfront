<template>
  <header class='header'>
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
            <nuxt-link to='/all'>成品整装 · 2017春季</nuxt-link>
          </li>
          <li class="header__link">
            <nuxt-link to="/customDesign">一对一定制设计</nuxt-link>
          </li>
          <li class="header__link">
            <nuxt-link to='/feedback'>用户回访</nuxt-link>
          </li>
          <li class="header__link">
            <nuxt-link to="/about" event='noop'>关于我们</nuxt-link>
            <ul class="header__dropdown">
              <li class="header__dropdonw-item">
                <nuxt-link to='/about/ideas/design'>中孚整装理念</nuxt-link>
              </li>
              <li class="header__dropdonw-item">
                <nuxt-link to='/about/services/zero'>中孚空间服务</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="header__link">
            <nuxt-link to="/views">观点</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style src='./Header.css'></style>
