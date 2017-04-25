<template>
  <div class="us">
    <tab-header title='我们'
                :tabs='tabs' />
    <div class="us__child"
         container>
      <ul class="team"
          grid>
        <li class="team__item"
            v-for='t in teamList'
            v-lazy.bg='t.src'>
        </li>
      </ul>

    </div>

    <div class="us__ft">

    </div>
  </div>
</template>

<style src='./us.css' scoped></style>

<script>
import TabHeader from '~components/TabHeader'

export default {
  components: {
    TabHeader
  },
  data () {
    return {
      tabs: [
        { to: '/about/us?team=design', name: '设计团队', exact: true },
        { to: '/about/us?team=tech', name: '技术团队', exact: true },
        { to: '/about/us?team=build', name: '施工团队', exact: true }
      ],
      designList: [
        { src: require('~assets/img/logo.png') },
        { src: '2' },
        { src: '3' },
        { src: '4' },
        { src: '5' }
      ],
      techList: [
        { src: 't1' },
        { src: 't5' }
      ],
      buildList: [
        { src: '' },
        { src: '' },
        { src: '' }
      ]
    }
  },
  computed: {
    team () {
      return this.$route.query.team
    },
    teamList () {
      return this[this.team + 'List']
    }
  }
}
</script>
