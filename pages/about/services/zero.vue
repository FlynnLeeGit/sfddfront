<template>
  <div class="zero">
    <section class="first"
             container>
      <h1 v-lazy.animate="['fade']"
          class="zero__title">整装一口价，从设计到入驻的全部花费</h1>
      <p v-lazy.animate="['slideInUp' ]"
         class="zero__desc">装修是次昂贵的消费，对于普通客户而言，装修工程造价难估难测，既不知省钱后效果是否有折扣，也不知多花费的质量有没有提升，
        <br> 我们有责任帮您把钱花在实处，在每套方案中，我们提倡“恰如其分”的设计原则，反对过度设计与材质堆砌，在效果与造价中，取得平衡点，
        <br> 每一款整装方案中，均配以设计师推荐的软装与设备价格清单，可按需选购。
      </p>
      <picture>
        <source type="image/webp"
                srcset='~assets/img/services/zero/webp/house.webp'>
        <img v-lazy.animate="['slideInDown' ]"
             class="first__img"
             src="~assets/img/services/zero/house.jpg"
             alt="first">
      </picture>
    </section>

    <section class="second">
      <h1 class="zero__title"
          v-lazy.animate="['fade']">整装一口价，从设计到入驻的全部花费</h1>
      <p v-lazy.animate="['slideInUp' ]"
         class="zero__desc">装修是次昂贵的消费，对于普通客户而言，装修工程造价难估难测，既不知省钱后效果是否有折扣，也不知多花费的质量有没有提升，
        <br> 我们有责任帮您把钱花在实处，在每套方案中，我们提倡“恰如其分”的设计原则，反对过度设计与材质堆砌，在效果与造价中，取得平衡点，
        <br> 每一款整装方案中，均配以设计师推荐的软装与设备价格清单，可按需选购。
      </p>

      <ul class="second__legends"
          grid>
        <li>
          <h3 class="second__legend-title">装修面积</h3>
          <p class="second__legend-sub">计价面积</p>
          <img v-lazy.animate="['scale']"
               class="second__legend-icon"
               src="~assets/img/services/zero/area.png"
               alt="area"
               height="117px">
        </li>
        <li>
          <img v-lazy.animate="['scale','delay200']"
               class="second__legend-sign"
               src="~assets/img/services/zero/x.png"
               alt="x"
               width="24px">
        </li>
        <li>
          <h3 class="second__legend-title">整装方案</h3>
          <p class="second__legend-sub">每平方米价格</p>
          <img v-lazy.animate="['scale','delay400']"
               class="second__legend-icon"
               src="~assets/img/services/zero/m.png"
               alt="x"
               height="117px">
        </li>
        <li>
          <img v-lazy.animate="['scale','delay600']"
               class="second__legend-sign"
               src="~assets/img/services/zero/=.png"
               alt="="
               width="29px">
        </li>
        <li>
          <h3 class="second__legend-title">总金额</h3>
          <p class="second__legend-sub"> 0增项，0加价</p>
          <img v-lazy.animate="['scale','delay800']"
               class="second__legend-icon"
               src="~assets/img/services/zero/calc.png"
               alt="calc"
               height="117px">
        </li>

      </ul>
      <p class="second__ps">说明：非标项目造价与大宅设计请到店咨询。</p>
    </section>

    <section class="ResponsiveBlock">
      <img v-lazy.animate="['blurIn']"
           class="ResponsiveBlock__img"
           src="~assets/img/services/zero/pen.jpg"
           alt="pen">
      <div class="ResponsiveBlock__content">
        <div class="zero-increment"
             container>
          <img v-lazy.animate="['slideInUp' ]"
               class="zero-increment__number"
               src="~assets/img/services/zero/0.png"
               width="326px"
               alt="0" />
          <h1 v-lazy.animate="['slideInUp' ]"
              class="zero__title">闭口合同，零增项，零漏项</h1>
          <p v-lazy.animate="['slideInUp' ]"
             class="zero__desc">我们的专业体现在您能体验到的设计、建材、工程、项目管理，以及您看不到的合约造价与预算管理，
            <br> 我们的成本合约部门，日复一日的精算着整装产品的止损线，跟供应商不断开会模拟现场极端情况，
            <br> 只为保证整装产品的闭口实现。
          </p>
        </div>

      </div>

    </section>

  </div>
</template>
<style src='./zero.css' scoped></style>
