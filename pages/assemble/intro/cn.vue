<template>
  <div>
    <section class="ResponsiveBlock">
      <picture>
        <source type="image/webp"
                srcset='~assets/img/assemble/cn/webp/top.webp'>
        <img v-lazy.animate="['blurIn']"
             src="~assets/img/assemble/cn/top.jpg"
             class="ResponsiveBlock__img" />
      </picture>
    </section>

    <section class="assemble-main"
             container>
      <h1 v-lazy.animate="['slideInUp' ]"
          class="assemble-main__title">新中式</h1>
      <p v-lazy.animate="['slideInUp' ]"
         class="assemble-main__desc">低调优雅，独成天地</p>
      <div v-lazy.animate="['slideInUp' ]"
           class="assemble-main__price">¥ 2580/㎡</div>
    </section>

    <section class="ResponsiveBlock">
      <picture>
        <source type="image/webp"
                srcset='~assets/img/assemble/cn/webp/sub.webp'>
        <img v-lazy.animate="['blurIn']"
             src="~assets/img/assemble/cn/sub.jpg"
             class="ResponsiveBlock__img" />
      </picture>
      <div class="ResponsiveBlock__content">
        <div class="assemble-sub"
             container>
          <h2 v-lazy.animate="['slideInUp' ]"
              class="assemble-sub__title">惊鸿一面</h2>
          <div class="assemble-sub__desc">
            <p v-lazy.animate="['slideInUp' ]">风吹晚灯，杜鹃摇曳</p>
            <p v-lazy.animate="['slideInUp' ]">一盏茶，一席话，一段情</p>
            <p v-lazy.animate="['slideInUp' ]">尘世间独留一片方圆，自成天地</p>
            <p v-lazy.animate="['slideInUp' ]">山水是你的眼帘</p>
            <p v-lazy.animate="['slideInUp' ]">画与你是我的风景</p>
            <p v-lazy.animate="['slideInUp' ]">不恋红尘却难舍这番回忆</p>
            <p v-lazy.animate="['slideInUp' ]">莲白、湛鸟、墨枝，在屋檐下交织出那年惊鸿一面</p>
          </div>
        </div>
      </div>
    </section>

    <section class="assemble-space -right -first hall"
             grid>
      <picture class="assemble-space__img">
        <source type="image/webp"
                srcset='~assets/img/assemble/cn/webp/hall.webp'>
        <img v-lazy.animate="['fade','slideInLeft']"
             src="~assets/img/assemble/cn/hall.jpg"
             width="100%"
             alt="cn_hall" />
      </picture>

      <div class="assemble-space__intro">
        <div class="assemble-space__intro-content">
          <h2 class="assemble-space__title"
              v-lazy.animate="['slideInUp' ]">客厅</h2>
          <p class="assemble-space__desc"
             v-lazy.animate="['slideInUp' ]">
            新中式风格，东方人特有的情怀，木构架门的装饰显示主人的成熟稳重。知更鸟蓝撞色地毯、抱枕和金色花鸟卷背景完美融合在一起。地面大理石纹沉静大气，与天花板大片留白遥相呼应，现代中揉着古典。另外大开大合式的家具装饰，将房间整体层次美糅合升华，显出大家风范。
          </p>
        </div>
      </div>
    </section>

    <!--餐厅-->
    <section class="assemble-space -left dining-room"
             grid>
      <div class="assemble-space__intro">
        <div class="assemble-space__intro-content">
          <h2 class="assemble-space__title"
              v-lazy.animate="['slideInUp' ]">餐厅</h2>
          <p class="assemble-space__desc"
             v-lazy.animate="['slideInUp' ]">
            整个餐厅色调为黑白灰，餐椅的姜土色与墙上的水墨画和谐般配。天花吊顶灯以木条相交成方格形，简单的用实木做框，层次清晰，有“规矩”和“方圆”之意。餐厅简单的陈设，突出实用性功能和简约性审美，同样的大理石纹在传统中，加入了现代元素，优雅绅士。
          </p>
        </div>
      </div>
      <picture class="assemble-space__img">
        <source type="image/webp"
                srcset='~assets/img/assemble/cn/webp/dining-room.webp'>
        <img v-lazy.animate="['fade','slideInRight']"
             src="~assets/img/assemble/cn/dining-room.jpg"
             width="100%"
             alt="cn-dining" />
      </picture>
    </section>

    <!--卧室-->
    <section class="assemble-space -right bedroom"
             grid>
      <img v-lazy.animate="['fade','slideInLeft']"
           src="~assets/img/assemble/cn/bedroom.jpg"
           class="assemble-space__img"
           alt="cn-bedroom" />
      <div class="assemble-space__intro">
        <div class="assemble-space__intro-content">
          <h2 class="assemble-space__title"
              v-lazy.animate="['slideInUp' ]">卧室</h2>
          <p class="assemble-space__desc"
             v-lazy.animate="['slideInUp' ]">
            卧室延续了客厅的花鸟和餐厅的水墨画装饰，色调也是如出一辙的优雅大气，在中式的基础上，加入了现代飘窗元素，花朵的装饰给整个空间添上了温馨的气息，在低调中缓缓道来生活与艺术的真理。地面换成了木板，不仅舒适度倍增，还赋有自然的纹理，符合中国人一贯的“天人合一”追求。
          </p>
        </div>
      </div>
    </section>

    <section class="ResponsiveBlock">
      <picture>
        <source type="image/webp"
                srcset='~assets/img/assemble/cn/webp/ft.webp'>
        <img src="~assets/img/assemble/cn/ft.jpg"
             class="ResponsiveBlock__img" />
      </picture>
      <div class="ResponsiveBlock__content">
        <div class="assemble-ft"
             container>
          <h2 v-lazy.animate="['fade']">设计师寄语</h2>
          <p v-lazy.animate="['fade']">尘世嚣嚣，欲望横流，你是否还坚持心中那一份最初的悸动。
            <br> 坐卧进这一片港湾，无论潮起潮落，任千年的故事顺指尖流淌。
            <br> 独在这片雅静天空，寻找心灵的平静。
          </p>
        </div>
      </div>
    </section>

  </div>
</template>
<style src='./cn.css' scoped></style>
