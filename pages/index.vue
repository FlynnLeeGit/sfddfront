<template>
  <div>
    <!--banner 轮播图-->
    <section class='banner'>
      <img class="banner__placeholder"
           src="~assets/img/index/banner.png"
           alt="banner-img">
      <ul class="banner__slide">
        <li class="banner__slide-item"
            grid='middle,center,1'>
          <div col>
            <h1>2017春季 · 成品整装方案</h1>
            <h3>走心设计，最美表达，预案式整装方案，设计、硬装、软装、设备一体化 <br />低至 ¥1399/m² 起</h3>
            <nuxt-link to='/detail'
                       class='Btn -white'>查看详情</nuxt-link>
          </div>
        </li>
      </ul>
    </section>

    <!--feature 特性-->
    <section class="feature"
             container>
      <h1>中孚空间 · 预案式成品整装</h1>
      <h3>已为您规划好完整的设计预案，从硬装到软装的造价清单，从制图到全景展示，预案中一应俱全。<br>帮你把关选材搭配，预算控制，氛围意境。选择我们的当季预案，<br>来匹配您的房型，设计费仅以2折收取</h3>
    </section>

    <section class="video"
             container
             ref='videoSection'
             :style='videoSectionStyle'>
      <v-video ref='video'
               :time-update='timeUpdate'
               src='//video.baogaoyezhu.com/video/sfdd/1.mp4' />

      <!--<div class="video__control">

        <div class="video__timeline">
          <img src="~assets/img/index/time_line.png"
               alt="video-timeline">
          <div class="video__timeline-progress"
               :style='progressStyle'>
            <img src="~assets/img/index/time_line_orange.png"
                 alt="timeline-progress">
          </div>
        </div>

        <ul class="video__pins"
            grid='6'>
          <li @click='videoGo(index)'
              v-for='(pin,index) in videoPins'
              class="video__pin">
            <img :src="videoPinActive>=index ? pin.active : pin.icon"
                 class="video__pin-img"
                 :active="videoPinActive>=index"
                 :alt="pin.title">
            <p>{{pin.title}}</p>
          </li>
        </ul>
      </div>-->

    </section>

    <section class="beauty"
             grid='2,middle'>
      <img col
           src="~assets/img/index/beauty.png"
           alt="beauty-bg.png">
      <div col
           class='beauty__desc'>
        <h1>美感 · 低价 · 高质</h1>
        <p>每季度，我们的设计董事带领总监级设计师会推出当季的整装预案，
          <br /> 我们的采购部门会基于预案向更多一线供应商比较以确保低价
        </p>
      </div>
    </section>

    <section class="standard -design"
             container>
      <img class='standard__img'
           src="~assets/img/index/house.png"
           alt="design standard">
      <img class='standard__number'
           src="~assets/img/index/01.png"
           alt="01">
      <div class="standard__mask"></div>
      <div class="standard__content">
        <h2>整装设计标准</h2>
        <p>每套整装方案中，我们充分考虑了十二类家具收纳、十条家居动线、六类色彩搭配、核心风格与主打元素。我们基于每个风格，我们会主导三个近似的搭配，并提供软装包（可拆项选择）。帮助您第一时间明确造价、材料、施工内容、设备与软装。</p>
        <nuxt-link class="Btn -black"
                   to='/about/ideas/design'>深入了解</nuxt-link>
      </div>
    </section>

    <div class="idx-line -left -first">01</div>

    <section class="standard -quality"
             container>
      <img class="standard__img"
           src="~assets/img/index/mac.png"
           alt="mac">
      <img class="standard__number"
           src="~assets/img/index/02.png"
           alt="02">
      <div class="standard__mask"></div>
      <div class="standard__content">
        <h2>质量控制标准</h2>
        <p>我们作为专业的项目总承包商，深谙质量责任之重大，在以下六件事上不敢有半点马虎。自有施工班组成熟稳定、严审制图（深化）精度、先放线后施工、行业领先的工艺要求、稳定成熟的建材配套与尽心尽责的质检管理；并通过我们的协同管理系统，各司其职，统一汇报，为用户提供远超国标的质量标准。</p>
        <nuxt-link class="Btn -black"
                   to='/about/ideas/quality'>深入了解</nuxt-link>
      </div>
    </section>

    <div class="idx-line -right -second">02</div>

    <section class="standard -material"
             container>
      <img class="standard__img"
           src="~assets/img/index/wood.png"
           alt="wood">
      <img class="standard__number"
           src="~assets/img/index/03.png"
           alt="03">
      <div class="standard__mask"></div>
      <div class="standard__content">
        <h2>材料选择标准</h2>
        <p>我们拥有强大的供应链跟严格的供应链考评机制，精选符合设计的国内外一线品牌，从质量稳定、环保、价格、配送及时、安装合规、产能稳定这七个维度，以季度为单位进行评测。采用集采预定的方式对供应商下单，确保我们的采购成本优势能体现在整装预案之内。</p>
        <nuxt-link class="Btn -black"
                   to='/about/ideas/material'>深入了解</nuxt-link>
      </div>
    </section>

    <div class="idx-line -left -third">03</div>

    <section class="service">
      <div container>
        <h1>中孚空间服务</h1>
        <ul class="service__list"
            grid>
          <nuxt-link tag='li'
                     class="service__item"
                     :key='s.icon'
                     :to='s.to'
                     v-for='s in serviceList'>
            <img class="service__icon"
                 :src='s.icon'
                 :alt="s.title">
            <h3>{{s.title}}</h3>
            <p>{{s.txt}}</p>
            <img class="service__arrow"
                 src="~assets/img/index/arrow-right.png"
                 alt="arrow">
          </nuxt-link>
        </ul>
      </div>
    </section>

    <frag-market-contained></frag-market-contained>

  </div>
</template>

<script>
import fragMarketContained from '~components/frag/market-contained'
import vVideo from '~components/Video'

export default {
  components: {
    fragMarketContained,
    vVideo
  },
  data () {
    return {
      videoScale: 0.6,
      videoProgress: 0,
      videoPinActive: 0,
      // videoPins: [
      //   { icon: require('~assets/img/index/icon1.png'), active: require('~assets/img/index/icon1_active.png'), title: '放线' },
      //   { icon: require('~assets/img/index/icon2.png'), active: require('~assets/img/index/icon2_active.png'), title: '设备' },
      //   { icon: require('~assets/img/index/icon3.png'), active: require('~assets/img/index/icon3_active.png'), title: '家具' },
      //   { icon: require('~assets/img/index/icon4.png'), active: require('~assets/img/index/icon4_active.png'), title: '软饰' },
      //   { icon: require('~assets/img/index/icon5.png'), active: require('~assets/img/index/icon5_active.png'), title: '家电' },
      //   { icon: require('~assets/img/index/icon6.png'), active: require('~assets/img/index/icon6_active.png'), title: '整家' }
      // ],
      serviceList: [
        { icon: require('~assets/img/index/s_icon1.png'), title: '所见即所得', to: '/about/services/see', txt: '中孚通过全套预案深化图纸，全尺寸现场放线以确保精确施工后的所见即所得。' },
        { icon: require('~assets/img/index/s_icon2.png'), title: '闭口合同零增项', to: '/about/services/zero', txt: '精算每个整装产品的成本后执行平方米报价，不额外增项，执行闭口合同。' },
        { icon: require('~assets/img/index/s_icon3.png'), title: '先施工后付款', to: '/about/services/construction', txt: '5000元开工定金，各阶段验收通过后方支付本阶段款项，装不好，不付款。' },
        { icon: require('~assets/img/index/s_icon4.png'), title: '装修贷款', to: '/about/services/loan', txt: '联合建设银行装修分期业务，高额度，放心贷。' }
      ]
    }
  },
  computed: {
    videoSectionStyle () {
      return {
        transform: `translate3d(0,0,0) scale(${this.videoScale})`
      }
    },
    progressStyle () {
      return {
        width: `${this.videoProgress * 100}%`
      }
    }
  },
  methods: {
    videoGo (index) {
      if (index !== 5) {
        this.videoPinActive = index
        const progress = index / 5
        this.videoProgress = progress
        this.$refs.video.goProgress(progress)
        this.$refs.video.play()
      }
    },
    timeUpdate (progress) {
      this.videoProgress = progress
    }
  },
  watch: {
    '$store.state.ui.st' (newScrollTop) {
      const videoEl = this.$refs.videoSection
      const { top, height } = videoEl.getBoundingClientRect()
      const parentWindowHeight = window.innerHeight - 80
      const vpMiddleLineTop = parentWindowHeight / 2
      const videoElCenterTop = (top - 80) + height / 2
      let scale = 1 - ((videoElCenterTop - vpMiddleLineTop) / parentWindowHeight)
      if (scale < 0.6) {
        scale = 0.6
      }
      if (scale >= 1) {
        scale = 1
      }
      this.videoScale = scale
    }
  }
}

</script>
<style src='./index.css' scoped></style>
