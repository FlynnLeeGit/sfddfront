<template>
  <div class="SvgIcon"
       :style='iconStyle'>
    <svg viewBox="0 0 18 18"
         aria-hidden="true"
         focusable="false"
         class="SvgIcon__icon"
         v-html='path'>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '1em'
    }
  },
  data () {
    return {
      path: ''
    }
  },
  computed: {
    iconStyle () {
      return {
        fontSize: `${this.size}`
      }
    }
  },
  mounted () {
    switch (this.icon) {
      case 'arrow':
        this.path = `<path fill-rule="evenodd" d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z"></path>`
        break
      default:
        break
    }
  }
}
</script>
<style src='./SvgIcon.css'></style>

