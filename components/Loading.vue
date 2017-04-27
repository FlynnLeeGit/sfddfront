<template>
  <div class="loading-page"
       v-if="loading">
    <bounce-loader class="loading-page__loader"
                   :loading='true'
                   size='80px' />
  </div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader'
export default {
  components: {
    BounceLoader
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-image: linear-gradient(transparent 0%, color(#fff alpha(.9)) 50%, transparent 100%);
  text-align: center;
  padding-top: 20%;
}

.loading-page__loader {
  display: inline-block;
}
</style>
