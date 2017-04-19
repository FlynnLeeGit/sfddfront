<template>
  <footer>

    <section class="ResponsiveBlock ft-find">
      <img class="ResponsiveBlock__img"
           src="~assets/img/index/ft_bg.jpg"
           alt="ft_bg">
      <div class="ResponsiveBlock__content">
        <div class="ft-find__content">
          <h2>2017年春季 · 整装方案</h2>
          <h4>每季度整装产品限时发售，离本季产品下架时间还有</h4>
          <h4><span class="ft-find__day">XX</span>天</h4>
          <nuxt-link class="Btn -white ft-find__btn"
                     to='/2'>点击前往</nuxt-link>
        </div>
      </div>
    </section>

    <section class="footer">
      <div container>
        <section class="footer__nav">
          <ul class="footer__list">
            <li class="footer__list-title">往期</li>
            <li class='footer__item'>
              <nuxt-link class='Link'
                         to='/old/1'>2016冬季</nuxt-link>
            </li>
            <li class='footer__item'>
              <nuxt-link class='Link'
                         to='/old/2'>2016秋季</nuxt-link>
            </li>
            <li class='footer__item'>
              <nuxt-link class='Link'
                         to='/old/2'>2016夏季</nuxt-link>
            </li>
            <li class='footer__item'>
              <nuxt-link class='Link'
                         to='/old/2'>2016春季</nuxt-link>
            </li>
            <li class='footer__item'>
              <nuxt-link class='Link'
                         to='/old/2'>热销小区</nuxt-link>
            </li>
          </ul>
          <ul class="footer__list">
            <li class="footer__list-title">关于</li>
            <li class='footer__item'>
              <nuxt-link class='Link'
                         to='/about/1'>招聘</nuxt-link>
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
                         to='/about/5'>致谢</nuxt-link>
            </li>
          </ul>
          <ul class="footer__list">
            <li class="footer__list-title">关注</li>
            <li class='footer__item'>
              <a class='Link'
                 href='javascript:;'>官方微博</a>
            </li>
            <li class='footer__item'>
              <a class='Link'
                 href='javascript:;'>官方微信</a>
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
          <a class="Link"
             href='/any'
             target='_blank'>站长统计</a>
        </section>
      </div>
    </section>

  </footer>
</template>

<style src='./Footer.css'></style>
