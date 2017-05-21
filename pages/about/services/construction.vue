<template>
  <div class="contruction">
    <section class="ResponsiveBlock">
      <picture>
        <source type="image/webp"
                srcset='~assets/img/services/contruction/webp/key.webp'>
        <img class="ResponsiveBlock__img"
             src="~assets/img/services/contruction/key.jpg"
             alt="key">
      </picture>
      <div class="ResponsiveBlock__content">
        <div class="key"
             container>
          <h1 class="Intro__title">全程带资施工</h1>
          <p class="Intro__desc">
            施工中的纠纷是每个业主都反感的，而当下家装行业普遍以预付款形式让业主
            <br>维权成本高昂，这其中的主要矛盾点是在质量上，即质量出现问题后的双方扯
            <br>皮，而预付工程款让业主处处被动。我们认为工程质量有瑕疵在所难免，关键
            <br>是对待质量的态度，我们采用主动预防（高精度制图、全尺寸放线，质量三检
            <br>制度等形成我们的质量管理体系）与及时整改，来赢取每个用户的信任。因此，
            <br>我们从2012年起，每一个项目（仅家装类）均采用先施工后付款，全程带资的
            <br>形式来服务用户，已坚持了6年，只为业主放心。
          </p>
        </div>
      </div>
    </section>

    <frag-pay-flow />

  </div>
</template>
<style scoped src='./construction.css'></style>
<script>
import fragPayFlow from '~components/frag/payFlow'
export default {
  components: {
    fragPayFlow
  }
}
</script>
