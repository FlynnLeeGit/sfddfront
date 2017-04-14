<template>
  <section container>
    <div class="error-page">
      <!--<img src="~assets/img/logo.png"
             alt="Nuxt.js Logo"
             class="logo" />-->
      <h1 class="error-title">
            {{ error.statusCode }}
          </h1>
      <h2 class="error-message">
            {{ error.message }}
          </h2>
      <nuxt-link class="error-button"
                 to="/"
                 v-if="error.statusCode === 404">
        返回首页
      </nuxt-link>
    </div>

  </section>
</template>
<script>
export default {
  props: ['error'],
  layout: 'empty'
}
</script>

<style scoped>
.error-page {
  padding: 100px 250px;
}

.error-title {
  margin-top: 15px;
  font-size: 5em;
}

.error-message {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}

.error-button {
  margin-top: 50px;
}
</style>
