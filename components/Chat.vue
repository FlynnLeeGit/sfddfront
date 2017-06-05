<template>
  <section v-show='show'>
    <div class="Chat">
      <a @click='$refs.chatModal.open()'
         href="javascript:;">
        <img src="~assets/img/offline.png"
             alt="chat">
        <span class="Chat__txt">线下体验</span>
      </a>
    </div>
    <modal class="Chat__modal"
           ref='chatModal'>
      <div slot='content'
           class="Chat__modal-content">
        <form @submit.prevent='submitAppoint'>

          <h3 class="Chat__modal-title _mb20 delay200 animated slideInRight">
            可以邀请您
            <br> 来店里坐坐吗?
          </h3>
          <input type="text"
                 v-model='appoint.name'
                 class="Input _w220 _mb20 animated slideInUp delay400"
                 maxlength="12"
                 placeholder="如何称呼您">
          <br>
          <input type="text"
                 class="Input _w220 _mb30 animated slideInUp delay400"
                 v-model='appoint.mobile'
                 maxlength="11"
                 placeholder="手机号码">
          <br>
          <input type="submit"
                 class="Btn -modal animated slideInUp delay600"
                 value='预约' />
          <span v-text='errMsg'
                class="Chat__modal-msg">
          </span>
        </form>
      </div>
    </modal>
  </section>
</template>
<style src='./Chat.css'></style>
<script>
import axios from '~plugins/axios'
import Modal from './Modal'
export default {
  components: {
    Modal
  },
  data () {
    return {
      show: true,
      appoint: {
        name: '',
        mobile: ''
      },
      errMsg: ''
    }
  },
  methods: {
    submitAppoint () {
      axios.post(`/_fapi/appointments`, this.appoint)
        .then(res => {
          this.$message.success('预约成功')
          this.$refs.chatModal.iconClose()
        })
    }
  },
  created () {
    this.$root.$on('Chat:hide', () => {
      this.show = false
    })
    this.$root.$on('Chat:show', () => {
      this.show = true
    })
  }
}
</script>


