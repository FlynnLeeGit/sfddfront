<template>
<div class="products">
  <table-filter :tabs='tabs' />

  <section class='products__bd' container>
    <ul class='imgs'>



    </ul>


  </section>

  <section class='products__ft' container>
    <pagination :total='800' />

  </section>


</div>
</template>
<script>
import TableFilter from '~components/TableFilter'
import Pagination from '~components/Pagination'

export default {
  components: {
    TableFilter,
    Pagination
  },
  data () {
    return {
      tabs: []
    }
  },
  created () {
    const _tabs = []
    _tabs.push({
      tag:'style',
      name:'风格',
      filter:[],
      filterMap:{}
    })
    _tabs.push({
      tag:'style',
      name:'空间',
      filter:[],
      filterMap:{}
    })
    this.tabs = _tabs
  }
}
</script>
<style scoped src='./products.css'></style>
