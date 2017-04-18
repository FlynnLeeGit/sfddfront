<template>
  <section class="TabHeader"
           container
           grid='2,middle'>
    <div col
         class="TabHeader__title">{{title}}</div>
    <ul col='right'
        grid
        class="TabHeader__tabs">
      <nuxt-link v-for='tab in tabs'
                 :key='tab.to'
                 tag='li'
                 :to='tab.to'
                 class="TabHeader__tab">
        {{tab.name}}
      </nuxt-link>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'title'
    }
  }
}
</script>
<style src='./TabHeader.css' scoped></style>
