<template>
  <div class="loan">
    <section class="ResponsiveBlock">
      <picture>
        <source type="image/webp"
                srcset='~assets/img/services/loan/webp/top.webp'>
        <img class="ResponsiveBlock__img"
             src="~assets/img/services/loan/top.jpg"
             alt="loan-top">
      </picture>
      <div class="ResponsiveBlock__content">
        <div class="top"
             grid='middle'>
          <div>
            <h1 class="loan__title">装修贷款</h1>
            <p class="loan__desc">
              最高100万，最长可分60期（五年）
              <br> 还款方式自由，除传统的等额本金/等额本息外，还可以到期一次还本付息，及按照付息任意还本
              <br> 中孚空间免费协助准备装修贷款资料
            </p>
            <nuxt-link class="Btn -white top__btn"
                       to='/go'>去申请</nuxt-link>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<style scoped src='./loan.css'></style>
