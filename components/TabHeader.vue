<template>
  <section class="TabHeader"
           :fixed='$store.state.ui.st>80'>
    <div class="TabHeader__content"
         container
         grid='middle,2'>
      <div col
           class="TabHeader__title">{{title}}</div>
      <ul col='right'
          grid
          class="TabHeader__tabs">
        <nuxt-link v-for='tab in tabs'
                   :key='tab.to'
                   tag='li'
                   :to='tab.to'
                   :exact='tab.exact'
                   class="TabHeader__tab">
          {{tab.name}}
        </nuxt-link>
      </ul>
    </div>

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
  },
  created () {
    this.$root.$emit('HeaderNotFixed')
  },
  destroyed () {
    this.$root.$emit('HeaderFixed')
  }
}
</script>
<style src='./TabHeader.css' scoped></style>
