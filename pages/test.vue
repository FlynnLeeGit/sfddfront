<template>
<div class="">
<nuxt-link to='/'>{{$store.state.post.hello}}</nuxt-link>
</div>
</template>

<script>
  export default {
    middleware:'init_store'
  }
</script>
