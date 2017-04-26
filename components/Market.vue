<template>
  <section class="ResponsiveBlock Market">
    <img :src='src'
         class="ResponsiveBlock__img"
         :alt='name'>
    <div class="ResponsiveBlock__content">
      <div class="Market__content"
           grid='middle'>
        <div>
          <h1 class="Market__title">{{title}}</h1>
          <h4 class="Market__desc" v-html='desc'></h4>
          <nuxt-link class="Btn -white Market__btn"
                     :to='to'>
            点击前往
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style src='./Market.css'></style>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    to: {
      type: String,
      default: 'to'
    },
    name: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      src: ''
    }
  },
  created () {
    const url = require('~assets/img/common/market/' + this.name + '.jpg')
    this.src = url
  }
}
</script>
