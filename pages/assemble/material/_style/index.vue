<template>
  <div class="material">
    <div container
         grid>
      <aside class="aside">
        <h3 class="aside__title">物料清单</h3>
        <ul class="aside__spaces">
          <li v-for='s in assembleSpaces'>
            <nuxt-link :to='toSpace(s.id)'>
              {{s.space}}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <main class="main">
        <nuxt-child />
      </main>
    </div>
  </div>
</template>

<style scoped src='./space.css'></style>

<script>
import { mapGetters } from 'vuex'
export default {
  scrollToTop: false,
  computed: {
    ...mapGetters(['assembleSpaces'])
  },
  methods: {
    toSpace (sid) {
      return `/assemble/material/${this.$route.params.style}/${sid}`
    }
  }
}
</script>
