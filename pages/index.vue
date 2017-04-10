<template>
  <section container>
    <h1 v-for='n in 20'>{{n}}</h1>
    <!--<transition name='slide-top'
                  @before-enter='beforeEnter'
                  @enter='enter'>-->
    <p class='test' v-lazy.animate>i am a text</p>
    <!--</transition>-->

    <button @click='show=!show'> toggle</button>

  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  asyncData({ store }) {
    return store.dispatch('getPms')
  },
  data() {
    return {
      show: false
    }
  },
  head() {
    return {
      title: 'Users'
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>

</style>
