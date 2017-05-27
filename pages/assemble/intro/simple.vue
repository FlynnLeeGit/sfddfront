<template>
  <div class="simple">

    <section class="ResponsiveBlock">
      <img v-lazy.animate="['blurIn']"
           src="~assets/img/assemble/simple/top.jpg"
           class="ResponsiveBlock__img" />
    </section>

    <section class="assemble-main"
             container>
      <h1 v-lazy.animate="['slideInUp' ]"
          class="assemble-main__title">现代简约</h1>
      <p v-lazy.animate="['slideInUp' ]"
         class="assemble-main__desc">品味纯净，因你动心</p>
      <div v-lazy.animate="['slideInUp' ]"
           class="assemble-main__price">¥ 2580/㎡</div>
    </section>

    <section class="ResponsiveBlock">
      <img v-lazy.animate="['blurIn']"
           src="~assets/img/assemble/simple/sub.jpg"
           class="ResponsiveBlock__img" />
      <div class="ResponsiveBlock__content">
        <div class="assemble-sub simple__sub"
             container>
          <h2 v-lazy.animate="['slideInUp' ]"
              class="assemble-sub__title">邂逅精致</h2>
          <div class="assemble-sub__desc">
            <p v-lazy.animate="['slideInUp' ]">喜欢碧空之上云卷云舒， 喜欢杯中咖啡袅袅生香，</p>
            <p v-lazy.animate="['slideInUp' ]">在每一个温润的气候里，静静欣赏飞鸟划过的轨迹。</p>
            <p v-lazy.animate="['slideInUp' ]">在一本书的尾页，灯光搅乱了如墨般黑夜，伴着星光点点呼吸清冽的空气，</p>
            <p v-lazy.animate="['slideInUp' ]">你来，或者不来，我都在这里。</p>
          </div>
        </div>
      </div>
    </section>

    <!--客厅-->
    <div class="assemble-bg">
      <img v-lazy.animate="['scaleToLeft','delay200']"
           class="assemble-bg__img simple__bg1"
           src="~assets/img/assemble/simple/bg-hall.png">
      <section class="assemble-space -right -first hall"
               grid>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/simple/hall.jpg"
             class="assemble-space__img"
             alt="simple-hall" />
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp' ]"
                class="assemble-space__title">客厅</h2>
            <p v-lazy.animate="['slideInUp' ]"
               class="assemble-space__desc">
              一眼览去，客厅空间明亮开敞、内外通透，墙面、地面和宽沙发均是简洁的灰色系，显出一种简约的空间情感、本能和理性的融合。装饰辅材多用金属和玻璃，也是现代风格家具的常见装饰手法，尤其是整个金属材质的茶几，能给人带来前卫、不受拘束的感觉，在这背后体现的是主人公时尚的生活品味。
            </p>
          </div>
        </div>
      </section>
    </div>

    <!--餐厅-->
    <div class="assemble-bg">
      <img v-lazy.animate="['scaleToRight','delay200']"
           class="assemble-bg__img simple__bg2"
           src="~assets/img/assemble/simple/bg-dining-room.png">
      <section class="assemble-space -left dining-room"
               grid>
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp' ]"
                class="assemble-space__title">餐厅</h2>
            <p v-lazy.animate="['slideInUp' ]"
               class="assemble-space__desc">
              延续一贯的灰色基调，加入了原木的材质，使得餐厅空间情感更为柔和，贴近生活。灯饰看上去只有寥寥几笔的感觉，但设计感极强，显然简约不等于简单，都是经过深思熟虑过后创新而来的思路延伸。光滑明亮的石纹桌面加入了时尚元素，使得整个空间不显单调。
            </p>
          </div>
        </div>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/simple/dining-room.jpg"
             class="assemble-space__img"
             alt="simple-dining" />
      </section>
    </div>

    <!--卧室-->
    <div class="assemble-bg">
      <img v-lazy.animate="['scaleToLeft','delay400']"
           class="assemble-bg__img simple__bg3"
           src="~assets/img/assemble/simple/bg-bedroom.png">
      <section class="assemble-space -right bedroom"
               grid>
        <img v-lazy.animate="['fade']"
             src="~assets/img/assemble/simple/bedroom.jpg"
             class="assemble-space__img"
             alt="cn-bedroom" />
        <div class="assemble-space__intro">
          <div class="assemble-space__intro-content">
            <h2 v-lazy.animate="['slideInUp' ]"
                class="assemble-space__title">卧室</h2>
            <p v-lazy.animate="['slideInUp' ]"
               class="assemble-space__desc">
              卧室是用来消除工作的疲惫、忘却都市的喧闹的放松空间。色彩运用方面，在灰色的基调上选择了大片的爱丽丝蓝和白色相接，营造出一种安静、祥和的氛围，使人不自觉就放松神经。卧室的整体布置，尽可能的取消了多余的东西，只留下了玻璃和金属配饰这一最能体现简约风的代表物。在满足功能需要的前提下，将空间、人及物进行合理精致的组合，用最洗练的笔触，描绘出最丰富动人的空间效果。
            </p>
          </div>
        </div>

      </section>
    </div>

    <section class="ResponsiveBlock">
      <img src="~assets/img/assemble/simple/ft.jpg"
           class="ResponsiveBlock__img" />
      <div class="ResponsiveBlock__content">
        <div class="assemble-ft"
             container>
          <h2 v-lazy.animate="['fade']">设计师寄语</h2>
          <p v-lazy.animate="['fade']">一杯白开水，一本没有结局的书，世上那么多的纯粹，是不问缘由。
            <br> 剪一片心情挂在窗外，远方的风轻轻拂过，带来遥远的问候。卸下平日的思绪万千，将手边的物什雕琢成精致的模样，
            <br> 简约又不简单的活着，就能邂逅最美的自己。
          </p>
        </div>
      </div>
    </section>

  </div>
</template>
<style src='./simple.css' scoped></style>
