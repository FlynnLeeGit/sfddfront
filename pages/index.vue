<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />

      <nuxt-link to='/test'>test</nuxt-link>
      <ul>
        <li v-for='item in posts'>
          {{item.title}}
        </li>
      </ul>




  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  middleware:'init_store',
  computed:{
    posts(){
      return this.$store.state.post.posts
    }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
