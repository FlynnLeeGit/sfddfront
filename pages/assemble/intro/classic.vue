<template>
  <div class="classic">

    <div class="assemble-bg">
      <img v-lazy.animate="['slideInDown']"
           src="~assets/img/assemble/classic/bg1.png"
           class="assemble-bg__img classic__bg1">
      <section class="assemble-top top">
        <div container>
          <h1 v-lazy.animate="['fade']"
              class="assemble-top__title">新式古典，引领风骚</h1>
          <h4 v-lazy.animate="['fade']"
              class="assemble-top__sub">情调绅士</h4>
          <p v-lazy.animate="['slideInUp','fade']"
             class="assemble-top__desc">曾流连于塞纳河旁，蓝色流水舒缓无声， 漫步过香榭丽舍大街，梧桐树声窸窸窣窣。
            <br> 半轮落日，一杯拿铁，
            <br> 一缕幽香，就在某个不经意的时间节点，忘却一切烦扰。
            <br> 留声机一圈一圈唱着小情调，
            <br> 雕花大门开了又关，有人频频回首，
            <br> 不知是听风，还是等雨停。。
          </p>
        </div>
      </section>

      <section class="assemble-space -right hall"
               grid>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/classic/hall.jpg"
             class="assemble-space__img"
             alt="classic-hall" />
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp','fade']"
                class="assemble-space__title">客厅</h2>
            <p v-lazy.animate="['slideInUp','fade']"
               class="assemble-space__desc">
              新古典的主要特点是形散神聚，用现代的手法和材质还原古典气质。客厅装饰风格的色彩运用比较多，有与餐厅相一致的画框墙和黑白装饰墙，沉稳的静谧蓝沙发和地毯，还有棕褐色的窗帘，无一例外的显示出一种绅士的品格。值得一提的是橙色圆柱皮椅，还给整个空间注入了活力，丝毫不显得沉闷。
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="assemble-bg">
      <img class="assemble-bg__img classic__bg2"
           src="~assets/img/assemble/classic/bg2.png">
      <section class="assemble-space -left dining-room"
               grid>
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp','fade']"
                class="assemble-space__title">餐厅</h2>
            <p v-lazy.animate="['slideInUp','fade']"
               class="assemble-space__desc">
              奢华的嵌入式沙发椅，不论从面料还是质感都能牢牢吸住目光，再加上静谧蓝和微蓝绿的色彩选择，具备了古典与现代的双重审美效果，使人在享受美味的同时也满足了视觉审美。挂满画框的墨绿墙面与纵深视觉的黑白装饰墙相对，提升了整体的空间层次感。
            </p>
          </div>
        </div>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/classic/dining-room.jpg"
             class="assemble-space__img"
             alt="classic-dining" />
      </section>
    </div>

    <div class="assemble-bg">
      <img class="assemble-bg__img classic__bg3"
           src="~assets/img/assemble/classic/bg3.png">
      <section class="assemble-space -right dining-room"
               grid>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/classic/dining-room.jpg"
             class="assemble-space__img"
             alt="classic-dining" />
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp','fade']"
                class="assemble-space__title">卧室</h2>
            <p v-lazy.animate="['slideInUp','fade']"
               class="assemble-space__desc">
              因为延续了客厅的用色选择，各种色块的拼接还是显出了一致性，去除过多的线条装饰，只用了两种简洁的近似图案装饰房间，保留了主人精粹、高雅的性格，仍可以感受到丰富的艺术底蕴和历史文脉特色。糅合了少量白色，使色彩看起来明亮、大方，使整个空间给人以开放、宽容的非凡气度。
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="assemble-bg">
      <img class="assemble-bg__img classic__bg4"
           src="~assets/img/assemble/classic/bg4.png">
      <section class="assemble-space -left dining-room"
               grid>
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp','fade']"
                class="assemble-space__title">餐厅</h2>
            <p v-lazy.animate="['slideInUp','fade']"
               class="assemble-space__desc">
              奢华的嵌入式沙发椅，不论从面料还是质感都能牢牢吸住目光，再加上静谧蓝和微蓝绿的色彩选择，具备了古典与现代的双重审美效果，使人在享受美味的同时也满足了视觉审美。挂满画框的墨绿墙面与纵深视觉的黑白装饰墙相对，提升了整体的空间层次感。
            </p>
          </div>
        </div>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/classic/whole.jpg"
             class="assemble-space__img"
             alt="classic-dining" />
      </section>

      <section class="assemble-ft"
               v-lazy.animate="['fade']">
        电影里那个被紧紧追随的背影，永远是领结袖扣、西装笔挺，在羡艳的目光中，走在圆拱门下。
        <br> 无数人站在门外，踟蹰踱步、相顾无言。没有人是唯一的绅士，只需迈出一步，演绎经典，成就人生。
      </section>
    </div>

  </div>
</template>
<style src='./classic.css' scoped></style>
