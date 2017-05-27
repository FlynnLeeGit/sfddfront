<template>
  <div class="classic">

    <section class="ResponsiveBlock">
      <img v-lazy.animate="['blurIn']"
           src="~assets/img/assemble/america/top.jpg"
           class="ResponsiveBlock__img" />
    </section>

    <section class="assemble-main"
             container>
      <h1 v-lazy.animate="['slideInUp' ]"
          class="assemble-main__title">简 美</h1>
      <p v-lazy.animate="['slideInUp' ]"
         class="assemble-main__desc">华美世界，自由至上</p>
      <div v-lazy.animate="['slideInUp' ]"
           class="assemble-main__price">¥ 2580/㎡</div>
    </section>

    <section class="ResponsiveBlock">
      <img v-lazy.animate="['blurIn']"
           src="~assets/img/assemble/america/sub.jpg"
           class="ResponsiveBlock__img" />
      <div class="ResponsiveBlock__content">
        <div class="assemble-sub"
             container>
          <h2 v-lazy.animate="['slideInUp' ]"
              class="assemble-sub__title">遇见魅力</h2>
          <div class="assemble-sub__desc">
            <p v-lazy.animate="['slideInUp' ]">华灯初上，星夜璀璨</p>
            <p v-lazy.animate="['slideInUp' ]">斑斓的光点映在害羞女孩的脸庞</p>
            <p v-lazy.animate="['slideInUp' ,'delay200']">倚车观望，杯中红酒跳跃</p>
            <p v-lazy.animate="['slideInUp' ,'delay200']">优雅先生第一次透过一双眼，窥到整个世界</p>
            <p v-lazy.animate="['slideInUp' ,'delay400']">簇拥一个她，拥有一个家</p>
            <p v-lazy.animate="['slideInUp' ,'delay400']">一霎那，遇见此生最好的美好</p>
            <p v-lazy.animate="['slideInUp' ,'delay600']">天空中绝响的，是一首关于自由的赞美诗</p>
          </div>
        </div>
      </div>
    </section>

    <div class="assemble-bg">

      <img v-lazy.animate="['scaleToLeft']"
           class="assemble-bg__img america__bg1"
           src="~assets/img/assemble/america/bg-hall.png">

      <section class="assemble-space -right -first hall"
               grid>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/america/hall.jpg"
             class="assemble-space__img"
             alt="america-hall" />
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp' ]"
                class="assemble-space__title">客厅</h2>
            <p v-lazy.animate="['slideInUp' ]"
               class="assemble-space__desc">
              客厅作为招待来宾的场所，在材料选择上大多倾向于较硬、光挺、华丽的材质，藏蓝和姜黄两种沙发简直是命中注定的搭配，就像爱意正浓的情侣一般。光滑石材的桌面，大气不失内涵，金属环形桌柱和上方的方形金属圆柱吊灯搭出了强烈的视觉冲击力。客厅是沉稳与华丽的结合，简洁明快的色调，在干净利落中凸显出美式自由的艺术感。
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="assemble-bg">
      <img v-lazy.animate="['scaleToRight']"
           class="assemble-bg__img america__bg2"
           src="~assets/img/assemble/america/bg-dining-room.png">
      <section class="assemble-space -left dining-room"
               grid>
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp' ]"
                class="assemble-space__title">餐厅</h2>
            <p v-lazy.animate="['slideInUp' ]"
               class="assemble-space__desc">
              恰到好处的生活，是别样的精致。餐厅色彩以灰调+白调为主，大胆的加入了明亮的姜黄色作为调剂，跟吊顶排灯色调相一致，反而提升了整个餐厅的格调，大气磅礴又不失含蓄内敛，做到了情感上的收放自如；缎面的窗帘更是给整个空间添上了一抹柔和的感情色彩，显示出主人柔软的内心。整体没有过多的空间装饰，却起到了以少胜多，以简胜繁的效果。
            </p>
          </div>
        </div>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/america/dining-room.jpg"
             class="assemble-space__img"
             alt="america-dining" />
      </section>
    </div>

    <div class="assemble-bg">
      <img v-lazy.animate="['scaleToLeft','delay200']"
           class="assemble-bg__img america__bg3"
           src="~assets/img/assemble/america/bg-bedroom1.png">
      <img v-lazy.animate="['scaleToLeft']"
           class="assemble-bg__img america__bg4"
           src="~assets/img/assemble/america/bg-bedroom2.png">

      <section class="assemble-space -right bedroom"
               grid>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/america/bedroom.jpg"
             class="assemble-space__img"
             alt="america-bedroom" />
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp' ]"
                class="assemble-space__title">卧室</h2>
            <p v-lazy.animate="['slideInUp' ]"
               class="assemble-space__desc">
              美式家居的卧室布置较为温馨，作为主人的私密空间，主要以功能性和实用舒适为考虑的重点，多用非炫目灯光，多用温馨柔软的成套布艺来装点；同时在色彩选择上，也以简单、素雅为主，空间的色彩没有突兀的部分，可以有效地建立一种温情暖意的家庭氛围。同时，没有反复的空间布局和多余的设计，显得宽广，不会觉得束缚。
            </p>
          </div>
        </div>
      </section>

    </div>

    <section class="ResponsiveBlock">
      <img src="~assets/img/assemble/america/ft.jpg"
           class="ResponsiveBlock__img" />
      <div class="ResponsiveBlock__content">
        <div class="assemble-ft"
             container>
          <h2 v-lazy.animate="['fade']">设计师寄语</h2>
          <p v-lazy.animate="['fade']"> 在乱花渐欲中叩首自问，怎样才是最向往的生活，不屈于柴米油盐，不臣于鸡毛蒜皮。
            <br> 将漫长岁月里的日子抓一把在手，精于心、简于形。生活与爱情都是自己创造的，只有自由的追求是永不停息。
            <br> 你、家、和自由，都该用心去遇见。
          </p>
        </div>
      </div>
    </section>

  </div>
</template>
<style src='./america.css' scoped></style>
