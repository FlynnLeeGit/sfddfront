<template>
  <div class="us">
    <tab-header title='我们'
                :tabs='tabs' />
    <div class="us__child"
         container>
      <ul class="team"
          grid>
        <li class="team__item"
            v-for='n in designList'>

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
        { to: '/about/us?design=1', name: '设计团队' },
        { to: '/about/us?tech=1', name: '技术团队' },
        { to: '/about/us?build=1', name: '施工团队' }
      ],
      designList: [
        { src: '' },
        { src: '' },
        { src: '' },
        { src: '' },
        { src: '' }
      ],
      techList: [
        { src: '' },
        { src: '' },
        { src: '' },
        { src: '' },
        { src: '' }
      ],
      buildList: [
        { src: '' },
        { src: '' },
        { src: '' },
        { src: '' },
        { src: '' }
      ]
    }
  },
  computed: {
    query () {
      return this.$route.query
    }
  }
}
</script>
