<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      <span class='show-on-node'>{{ error.statusCode }}</span>
      <span class='show-on-php'>[[error.statusCode]]</span>
    </h1>
    <h2 class="info">
      <span class='show-on-node'> {{ error.message }}</span>
      <span class='show-on-php'>[[error.message]]</span>

    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.show-on-php{
  display:none;
}
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
