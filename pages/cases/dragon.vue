<template>
  <div class="dragon">
    <section class="ResponsiveBlock banner">
      <img src="~assets/img/cases/dragon/banner.jpg"
           alt="dragon-banner"
           class="ResponsiveBlock__img">
      <div class="ResponsiveBlock__content">
        <div class="banner__content">
          <img src="~assets/img/cases/dragon/banner-txt.png"
               width="286px"
               alt="banner-txt">
          <h5>装修-设计-施工-预算-方案-官方推荐</h5>

        </div>
      </div>
    </section>

    <section class="style"
             container>
      <h1 class="Intro__title">风格筛选</h1>
      <ul class="style__tabs">

      </ul>
      <ul class="style__list"
          grid>
        <li class="style__item"
            v-for='s in styles[currentStyle]'
            v-lazy.bg='s.src'>
        </li>
      </ul>
    </section>

    <section class="budget">
      <div container>
        <h1 class="Intro__title">城开珑庭·中孚空间预算</h1>
        <p class="Intro__desc">
          施工预算约￥ xxxx/m²，推荐软装约￥dd
        </p>
        <ul class="budget__list"
            grid>
          <nuxt-link v-for='(item,k) in budgetList'
                     :key='k'
                     tag='li'
                     :to='item.to'
                     class="budget__item">
            <div class="budget__icon-wrap"
                 grid='middle'>
              <img :src="item.icon"
                   :width="item.iconWidth">
            </div>
            <p>{{item.txt}}</p>
            <img class="budget__arrow"
                 src="~assets/img/cases/dragon/icon-arrow.png"
                 width="30px">
          </nuxt-link>
        </ul>
      </div>
    </section>

    <section class="layout">
      <div container>
        <h1 class="Intro__title">城开珑庭·房型设计布局方案</h1>
        <ul class="layout__tabs">

        </ul>
        <ul class="layout__list"
            grid>
          <li class="layout__item"
              v-for='item in layouts[currentLayout]'
              v-lazy.bg='item.src'>

          </li>
        </ul>
      </div>
    </section>

    <section class="video"
             container>
      <h1 class="Intro__title">了解中孚的三个视频</h1>
      <ul class="video__list"
          grid>
        <li class="video__item"
            v-for='v in videos'>
          <v-video :src='v.src | videoFilter' />
          <p>{{v.title}}</p>
        </li>

      </ul>
    </section>

    <section class="team">
      <h1 class="Intro__title">中孚资深设计团队</h1>
      <ul class="team__list"
          grid>
        <li class="team__item"
            v-for='t in teams'
            v-lazy.bg="t.src">
          <p class="team__title">{{t.title}}</p>
        </li>
      </ul>
    </section>

    <frag-pay-flow />

    <section class="ft-video">


    </section>

    <market title='了解中孚空间整体装修预案'
            to='/customDesign/vrlist'
            name="plan" />
  </div>
</template>

<style scoped src='./dragon.css'></style>

<script>
import Market from '~components/Market'
import vVideo from '~components/Video'
import fragPayFlow from '~components/fragPayFlow'
export default {
  components: {
    Market,
    vVideo,
    fragPayFlow
  },
  data () {
    return {
      currentStyle: 1,
      styles: {
        1: [
          { src: require('~assets/img/cases/dragon/c1.jpg') },
          { src: require('~assets/img/cases/dragon/c2.jpg') }
        ],
        2: [
          { src: '3' },
          { src: '4' }
        ],
        3: [
          { src: '5' },
          { src: '6' }
        ],
        4: [
          { src: '7' },
          { src: '8' }
        ]
      },
      budgetList: [
        { icon: require('~assets/img/cases/dragon/icon1.png'), iconWidth: '75px', to: '/1', txt: '了解工程概算' },
        { icon: require('~assets/img/cases/dragon/icon2.png'), iconWidth: '64px', to: '/2', txt: '了解建材清单' },
        { icon: require('~assets/img/cases/dragon/icon3.png'), iconWidth: '72px', to: '/3', txt: '了解软装建议' },
        { icon: require('~assets/img/cases/dragon/icon4.png'), iconWidth: '51px', to: '/4', txt: '了解设备电气清单' }
      ],
      currentLayout: 1,
      layouts: {
        1: [
          { src: '' },
          { src: '' },
          { src: '' },
          { src: '' },
          { src: '' },
          { src: '' }
        ],
        2: [
          { src: '' }
        ]
      },
      videos: [
        { src: '/video/sfdd/1.mp4', title: 'SADP' },
        { src: '/video/sfdd/2.mp4', title: '全尺寸放线' },
        { src: '/video/sfdd/3.mp4', title: '从毛坯到入住' }
      ],
      teams: [
        { src: require('~assets/img/cases/dragon/c1.jpg'), title: '王鹏 设计董事' },
        { src: require('~assets/img/cases/dragon/c2.jpg'), title: '王鹏 设计董事' },
        { src: require('~assets/img/cases/dragon/c1.jpg'), title: '王鹏 设计董事' },
        { src: require('~assets/img/cases/dragon/c2.jpg'), title: '王鹏 设计董事' },
        { src: require('~assets/img/cases/dragon/c2.jpg'), title: '王鹏 设计董事' },
        { src: require('~assets/img/cases/dragon/c2.jpg'), title: '王鹏 设计董事' },
      ]
    }
  }
}
</script>
