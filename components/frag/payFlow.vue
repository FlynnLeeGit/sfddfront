<template>
  <section class="pay-flow"
           container>
    <h1 class="Intro__title">付款流程</h1>
    <p class="Intro__desc">
      开工仅需支付￥5000定金，水电验收通过后支付60%，泥木验收后支付35%，竣工验收后支付5%
    </p>
    <ul class="pay-flow__list"
        grid>

      <li v-for='flow in flows'
          :key='flow.id'
          class="pay-flow__item">
        <h2 v-lazy.animate="['slideInUp']">{{flow.name}}</h2>
        <div v-lazy.animate="['scale','delay200']"
             class="pay-flow__icon-wrap"
             grid='middle'>
          <img v-lazy.animate="['scale','delay400']"
               :src="flow.icon"
               :width="flow.width" />
        </div>
        <p v-lazy.animate="['slideInUp','delay600']">{{flow.txt}}</p>
      </li>

      <li v-lazy.animate="['scaleXRight','delay400']"
          class="pay-flow__item-line">
        <img src="~assets/img/common/payflow/line.png"
             width="1400px"
             alt="line">
      </li>

    </ul>
  </section>
</template>

<style src='./payFlow.css'></style>

<script>
export default {
  data: () => ({
    flows: [
      { id: 1, name: '开工', icon: require('~assets/img/common/payflow/icon1.png'), width: '62px', txt: '￥5000' },
      { id: 2, name: '水电', icon: require('~assets/img/common/payflow/icon2.png'), width: '81px', txt: '60%' },
      { id: 3, name: '泥木', icon: require('~assets/img/common/payflow/icon3.png'), width: '85px', txt: '35%' },
      { id: 4, name: '竣工', icon: require('~assets/img/common/payflow/icon4.png'), width: '81px', txt: '5%' }
    ]
  })
}
</script>
