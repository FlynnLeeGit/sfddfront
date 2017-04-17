import icon1 from '~assets/img/index/icon1.png'
import icon1Active from '~assets/img/index/icon1_active.png'
import icon2 from '~assets/img/index/icon2.png'
import icon2Active from '~assets/img/index/icon2_active.png'
import icon3 from '~assets/img/index/icon3.png'
import icon3Active from '~assets/img/index/icon3_active.png'
import icon4 from '~assets/img/index/icon4.png'
import icon4Active from '~assets/img/index/icon4_active.png'
import icon5 from '~assets/img/index/icon5.png'
import icon5Active from '~assets/img/index/icon5_active.png'
import icon6 from '~assets/img/index/icon6.png'
import icon6Active from '~assets/img/index/icon6_active.png'

export default {
  data () {
    return {
      videoScale: 0.5,
      videoEl: null,
      isPlaying: false,
      videoProgress: 0,
      videoPins: [
        {
          icon: icon1,
          active: icon1Active,
          title: '硬装'
        },
        {
          icon: icon2,
          active: icon2Active,
          title: '设备'
        },
        {
          icon: icon3,
          active: icon3Active,
          title: '家具'
        },
        {
          icon: icon4,
          active: icon4Active,
          title: '软饰'
        },
        {
          icon: icon5,
          active: icon5Active,
          title: '家电'
        },
        {
          icon: icon6,
          active: icon6Active,
          title: '整家'
        }
      ],
      videoPinActive: 0
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
        this.videoPlay()
      } else {
        this.videoPause()
      }
    },
    videoPlay () {
      this.videoEl.play()
      this.isPlaying = true
    },
    videoPause () {
      this.videoEl.pause()
      this.isPlaying = false
    },
    videoGo (index) {
      if (index !== 5) {
        this.videoPinActive = index
        this.videoEl.currentTime = index / 5 * this.videoEl.duration
        this.videoPlay()
      }
    }
  },
  mounted () {
    this.videoEl = this.$refs.video__el
    this.videoEl.addEventListener('timeupdate', e => {
      const _progress = e.target.currentTime / e.target.duration
      this.videoProgress = parseInt(_progress * 100)
      this.videoPinActive = parseInt(_progress * 5)
    })
  },
  watch: {
    '$store.state.ui.st' (newScrollTop) {
      const videoWrapEl = this.$refs.video__wrap
      const { top } = videoWrapEl.getBoundingClientRect()
      let ratio = top / window.innerHeight
      if (ratio < 0) ratio = 0
      if (ratio >= 1) ratio = 1
      let scale = -4 / 9 * ratio + 1.05
      if (scale > 1) scale = 1
      this.videoScale = scale
    }
  }
}
