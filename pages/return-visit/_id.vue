<template>
  <div class="return-visit-id">

  </div>
</template>
<script>
export default {
  asyncData ({ store, params, route }) {
    console.log(route)
    console.log(params.id)
    console.log(route.meta)
  }
}
</script>
