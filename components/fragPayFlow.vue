<template>
  <section class="pay-flow"
           container>
    <h1 class="Intro__title">付款流程</h1>
    <p class="Intro__desc">
      开工仅需支付￥5000定金，水电验收通过后支付60%，泥木验收后支付35%，竣工验收后支付5%
    </p>
    <ul class="pay-flow__list"
        grid>
      <li class="pay-flow__item">
        <h2>开工</h2>
        <div class="pay-flow__icon-wrap"
             grid='middle'>
          <img src="~assets/img/common/payflow/icon1.png"
               width="62px" />
        </div>
        <p>￥5000</p>
      </li>

      <li class="pay-flow__item">
        <h2>水电</h2>
        <div class="pay-flow__icon-wrap"
             grid='middle'>
          <img src="~assets/img/common/payflow/icon2.png"
               width="81px" />
        </div>
        <p>60%</p>
      </li>

      <li class="pay-flow__item">
        <h2>泥木</h2>
        <div class="pay-flow__icon-wrap"
             grid='middle'>
          <img src="~assets/img/common/payflow/icon3.png"
               width="85px" />
        </div>
        <p>35%</p>
      </li>

      <li class="pay-flow__item">
        <h2>竣工</h2>
        <div class="pay-flow__icon-wrap"
             grid='middle'>
          <img src="~assets/img/common/payflow/icon4.png"
               width="81px" />
        </div>
        <p>5%</p>
      </li>

      <li class="pay-flow__item-line">
        <img src="~assets/img/common/payflow/line.png"
             width="1400px"
             alt="line">
      </li>

    </ul>
  </section>
</template>

<style src='./fragPayFLow.css'></style>
