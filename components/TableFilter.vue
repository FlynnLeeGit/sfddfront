<template>
  <div class="TableFilter">
    <div container>
      <ul class="TableFilter__list"
          grid>
        <li v-for='(tab,idx) in tabs'
            :key='tab.tag'
            class="TableFilter__item"
            :active="activeTab===idx"
            @click.stop='activeTab = idx'>
          <span class='TableFilter__item-name'>{{getFilterName(tab)}}</span>
          <svg-icon class='TableFilter__item-arrow'
                    icon='arrow'
                    size='0.8em' />
          <div class='filter-dropdown'
               @click.stop>
            <ul class='filter-dropdown__list'
                grid
                :style='dropdownListStyle(tab.filter.length)'>
              <li class='filter-dropdown__item'
                  v-for='f in tab.filter'
                  @click='handleFilterChange(f.name,idx)'>
                <nuxt-link :to="filterTo(tab.tag,f)"
                           exact>
                  {{f.name}}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import SvgIcon from './SvgIcon'
export default {
  components: {
    SvgIcon
  },
  name: 'TableFilter',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeTab: -1,
      filter: {}
    }
  },
  methods: {
    dropdownListStyle (length) {
      return length > 10 ? { minWidth: '600px' } : {}
    },
    filterTo (tag, filter) {
      const newQuery = Object.assign({}, this.$route.query, { [tag]: filter.id })
      delete newQuery.page
      return { query: newQuery }
    },
    handleFilterChange () {
      this.activeTab = -1
      this.$emit('change', this.$route)
    },
    getFilterName (tab) {
      const tagSelected = this.$route.query[tab.tag]
      return tab.filterMap[tagSelected] || tab.name
    }
  },
  mounted () {
    document.addEventListener('click', () => {
      this.activeTab = -1
    })
  }
}
</script>
<style src='./TableFilter.css'></style>
