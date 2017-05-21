<template>
  <div class="intro">
    <section class="what"
             container>
      <h1 class="Intro__title"
          v-lazy.animate="['fade']">一对一定制是什么</h1>
      <p class="Intro__desc"
         v-lazy.animate="['slideInUp']">
        一个设计团队，服务一家客户，规划今后的生活，您仅需面对一个主案设计师，剩下的交给我们。
        <br> 只有充分的项目经验、优良的沟通与表达能力，才能懂你与你的家人，主案设计师须拥有十年以上的工作资历，
        <br> 十个以上的大型项目经验，并能掌握深化、家具、木作的协作分工。
      </p>
      <img class="what__img"
           src="~assets/img/customDesign/intro/flow.png"
           width="1067px"
           alt="flow">
    </section>

    <section class="ResponsiveBlock">
      <img src="~assets/img/customDesign/intro/paint.jpg"
           alt="who-img"
           class="ResponsiveBlock__img">
      <div class="ResponsiveBlock__content">
        <div class="who"
             container>
          <h1 class="Intro__title"
              v-lazy.animate="['fade']">哪些客户需要一对一的定制设计？</h1>
          <div class="Intro__desc">
            <p v-lazy.animate="['slideInUp','fade']">我们认为整装预案能满足大部分客户的需求，但是当有如下情况时，需考虑一对一定制设计，</p>
            <p v-lazy.animate="['slideInUp','fade','delay200']"><span class="who__yellow">需求复杂且不稳定</span> 如：土建结构不确定，公寓的格局大幅改动或扩建，别墅地下室开挖、架设电梯等，</p>
            <p v-lazy.animate="['slideInUp','fade','delay400']"><span class="who__yellow">设计难度高</span> 如：小空间内（7平方的客厅）需通过可移动定制家具设计同时满足起居、饮食、亲子、麻将、收纳、工作的需求，</p>
            <p v-lazy.animate="['slideInUp','fade','delay600']"><span class="who__yellow">独特追求及审美品味</span> 如：对空间意境的追求，对家庭文化熏陶渲染的坚持，将老家的乡情融入当代的建筑等，</p>
            <p v-lazy.animate="['slideInUp','fade','delay800']"><span class="who__yellow">居住者多或决策人多</span> 如：别墅中需三代同堂，空间规划既有有独立也交叉的使用场景，且各自的审美与功能需求也不相同。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="flow"
             container>
      <h1 class="Intro__title"
          v-lazy.animate="['fade']">定制流程</h1>
      <p class="Intro__desc"
         v-lazy.animate="['slideInUp']">
        优秀的作品来自设计师与您与全部家庭成员的充分协作，严谨的流程与高效的沟通是基础。
      </p>
      <img class="flow__img"
           src="~assets/img/customDesign/intro/flow2.png"
           width="1012px"
           alt="flow2">
    </section>

    <frag-know-previous />
  </div>
</template>

<style scoped src='./index.css'></style>

<script>
import fragKnowPrevious from '~components/frag/know-previous'
export default {
  components: {
    fragKnowPrevious
  }
}
</script>
