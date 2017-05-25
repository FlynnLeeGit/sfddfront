<template>
  <div class="Video"
       @click='toggleVideoPlay()'>
    <div class="Video__placeholder"
         :active='isPlaying'></div>
    <video playsinline
           ref='videoEl'
           class="Video__el"
           :src="src">
    </video>
  </div>
</template>
<style src='./Video.css'></style>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    timeUpdate: {
      type: Function,
      default: () => { }
    }
  },
  data () {
    return {
      videoEl: null,
      isPlaying: false
    }
  },
  methods: {
    toggleVideoPlay () {
      if (this.videoEl.paused) {
        this.play()
      } else {
        this.pause()
      }
    },
    play () {
      this.videoEl.play()
      this.isPlaying = true
    },
    pause () {
      this.videoEl.pause()
      this.isPlaying = false
    },
    /**
     * @param progress 0-1数字表示百分比
     * */
    goProgress (progress) {
      this.videoEl.currentTime = progress * this.videoEl.duration
    },
    /**
     * @param time 时间s
     * */
    go (time) {
      this.videoEl.currentTime = time
    }
  },
  mounted () {
    this.videoEl = this.$refs.videoEl
    this.videoEl.addEventListener('timeupdate', e => {
      const currentTime = e.target.currentTime
      const progress = (currentTime / e.target.duration).toFixed(2)
      if (this.timeUpdate) {
        this.timeUpdate(currentTime, progress)
      }
    })
  }
}
</script>
