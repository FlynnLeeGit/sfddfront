<template>
  <div class="RichText">
    <div class="RichText__content"
         v-html='html'>

    </div>
  </div>
</template>
<style src='./RichText.css'></style>
<script>
export default {
  props: {
    html: {
      type: String,
      default: '<h1>props.html</h1>'
    }
  }
}
</script>
