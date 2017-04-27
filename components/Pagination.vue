<template>
  <ul class="Pagination"
      grid>
    <li class="Pagination__item -prev"
        v-if='currentPage>1 && paginate.totalPage>5'>
      <nuxt-link :to='pageTo(currentPage - 1)'>
        <i class="iconfont icon-back"></i>
      </nuxt-link>
    </li>
    <li class='Pagination__item'
        v-for='page in pageInRange'>
      <nuxt-link :to="pageTo(page)"
                 exact
                 :class="{active:page === currentPage }">
        {{ page }}
      </nuxt-link>
    </li>
    <li class="Pagination__item -next"
        v-if='currentPage<paginate.totalPage && paginate.totalPage > 5'>
      <nuxt-link :to='pageTo(currentPage + 1)'>
        <i class="iconfont icon-more"></i>
      </nuxt-link>

    </li>

  </ul>
</template>
<script>
import Paginate from '~plugins/Paginate'

export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    totalPage: {
      type: Number,
      default: 0
    },
    numItemsPerPage: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      pageInRange: [],
      paginate: {},
      currentPage: 1
    }
  },
  computed: {
    page () {
      return +this.$route.query.page || 1
    }
  },
  methods: {
    pageTo (page) {
      const newQuery = Object.assign({}, this.$route.query, { page: page })
      return { query: newQuery }
    },
    updatePageInRange () {
      this.pageInRange = this.paginate.getPageInRange(this.currentPage)
    },
    initPaginate () {
      this.paginate = new Paginate({
        total: this.total,
        totalPage: this.totalPage,
        pageRange: 5,
        numItemsPerPage: this.numItemsPerPage
      })
      this.updatePageInRange()
    }
  },
  created () {
    this.currentPage = this.page
    this.initPaginate()
  },
  watch: {
    total (newTotal) {
      this.initPaginate()
    },
    page (newPage) {
      this.currentPage = newPage
      this.updatePageInRange()
    }
  }
}
</script>
<style src='./Pagination.css' scoped></style>
