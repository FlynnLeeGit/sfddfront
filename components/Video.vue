<template>
  <div class="Video"
       @click='toggleVideoPlay()'>
    <div class="Video__placeholder" :active='isPlaying'></div>
    <video ref='videoEl'
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
    }
  },
  mounted () {
    this.videoEl = this.$refs.videoEl
  }
}
</script>
