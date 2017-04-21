<template>
  <div class="vrlist">

    <section class='vrlist__bd'
             container>
      <ul class='imgs'
          grid='2'>
        <li :key='item.id'
            class='imgs__item'
            v-for='item in vrList'>
          <div class="imgs__img-ratio">
            <a class="imgs__img-content"
               :href="'/virtual_reality/inspirations/' + item.id + '/vr' "
               target='_blank'>
              <img :src="item.thumb | imgFilter('case600')" />
            </a>
          </div>
        </li>
      </ul>

    </section>

    <section class='vrlist__ft'
             container>
      <pagination :total='vrTotal'
                  :num-items-per-page='6' />

    </section>

  </div>
</template>

<style scoped src='./index.css'></style>

<script>
import Pagination from '~components/Pagination'

import { mapGetters } from 'vuex'
export default {
  components: {
    Pagination
  },
  asyncData ({ store, route }) {
    const page = +route.query.page || 1
    if (!store.state.inspiration.vrListAll.length) {
      return store.dispatch('getVrListAll', page)
    } else {
      store.commit('SET_VRLIST', page)
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['vrList', 'vrTotal'])
  }
}
</script>

