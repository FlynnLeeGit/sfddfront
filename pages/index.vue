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
    <section class="feature">
      <h1>中孚空间 · 预案式成品整装</h1>
      <h3>
        <p>已为您规划好完整的设计预案，从硬装到软装的造价清单，从制图到全景展示，预案中一应俱全。</p>
        <p>帮你把关选材搭配，预算控制，氛围意境。选择我们的当季预案，</p>
        <p>来匹配您的房型，设计费仅以2折收取</p>
      </h3>
    </section>

    <section class="video" container>
      <div ref='video__wrap'
           class="video__wrap"
           @click='toggleVideoPlay()'
           :style="videoWrapStyle">
        <div class="video__placeholder" :active='isPlaying'></div>
        <video ref='video__el' src="//video.baogaoyezhu.com/video/case/406/58c79aac6868d.mp4"
               class="video__el"></video>
      </div>

      <div class="video__control">
        <div class="video__timeline">
          <img src="~assets/img/index/time_line.png" alt="video-timeline">
          <div class="video__timeline-progress" :style='progressStyle'>
            <img src="~assets/img/index/time_line_orange.png" alt="timeline-progress">
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      videoScale: 0.5,
      videoEl: null,
      isPlaying: false,
      videoProgress: 0
    }
  },
  computed: {
    videoWrapStyle () {
      return {
        transform: `translate3d(0,0,0) scale(${this.videoScale})`
      }
    },
    progressStyle () {
      return {
        width: `${this.videoProgress}%`
      }
    }
  },
  methods: {
    toggleVideoPlay () {
      if (this.videoEl.paused) {
        this.videoEl.play()
        this.isPlaying = true
      } else {
        this.videoEl.pause()
        this.isPlaying = false
      }
    }
  },
  mounted () {
    this.videoEl = this.$refs.video__el
    this.videoEl.addEventListener('timeupdate', e => {
      this.videoProgress = parseInt(e.target.currentTime / e.target.duration * 100)
    })
  },
  watch: {
    '$store.state.ui.st' (newScrollTop) {
      const videoWrapEl = this.$refs.video__wrap
      const { top } = videoWrapEl.getBoundingClientRect()
      let ratio = top / (window.innerHeight)
      if (ratio < 0) ratio = 0
      if (ratio >= 1) ratio = 1
      let scale = (-4 / 9 * ratio) + 1.05
      if (scale > 1) scale = 1
      this.videoScale = scale
    }
  }
}
</script>

<style src='./index.css' scoped></style>
