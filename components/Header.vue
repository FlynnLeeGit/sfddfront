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
          <li>
            <nuxt-link :to="{name:'index'}" exact>首页</nuxt-link>
          </li>
          <li>
            <nuxt-link to='/all'>成品整装 · 2017春季</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/onebyone">一对一定制设计</nuxt-link>
          </li>
          <li>
            <nuxt-link to='/feedback'>用户回访</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/us">我们</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/views">观点</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style src='./Header.css'></style>
