<template>
  <div>
    <!--banner 轮播图-->
    <section class='banner'>
      <img class="banner__placeholder"
           src="~assets/img/index/banner.png"
           alt="banner-img">
      <ul class="banner__slide">
        <li class="banner__slide-item"
            grid='middle,center,1'>
          <div col>
            <h1>2017春季 · 成品整装方案</h1>
            <h3>走心设计，最美表达，预案式整装方案，设计、硬装、软装、设备一体化 <br />低至 ¥1399/m² 起</h3>
            <nuxt-link to='/detail'
                       class='Btn -white'>查看详情</nuxt-link>
          </div>
        </li>
      </ul>
    </section>

    <!--feature 特性-->
    <section class="feature"
             container>
      <h1>中孚空间 · 预案式成品整装</h1>
      <h3>
                              <p>已为您规划好完整的设计预案，从硬装到软装的造价清单，从制图到全景展示，预案中一应俱全。</p>
                              <p>帮你把关选材搭配，预算控制，氛围意境。选择我们的当季预案，</p>
                              <p>来匹配您的房型，设计费仅以2折收取</p>
                            </h3>
    </section>

    <section class="video"
             container>
      <div ref='video__wrap'
           class="video__wrap"
           @click='toggleVideoPlay()'
           :style="videoWrapStyle">
        <div class="video__placeholder"
             :active='isPlaying'></div>
        <video ref='video__el'
               src="//video.baogaoyezhu.com/video/case/406/58c79aac6868d.mp4"
               class="video__el"></video>
      </div>

      <div class="video__control">
        <div class="video__timeline">
          <img src="~assets/img/index/time_line.png"
               alt="video-timeline">
          <div class="video__timeline-progress"
               :style='progressStyle'>
            <img src="~assets/img/index/time_line_orange.png"
                 alt="timeline-progress">
          </div>

        </div>
        <ul class="video__pins"
            grid='6'>
          <li @click='videoGo(index)'
              v-for='(pin,index) in videoPins'
              class="video__pin">
            <img :src="videoPinActive>=index ? pin.active : pin.icon"
                 class="video__pin-img"
                 :active="videoPinActive>=index"
                 :alt="pin.title">
            <p>{{pin.title}}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="beauty"
             grid='2,middle'>
      <img col
           src="~assets/img/index/beauty.png"
           alt="beauty-bg.png">
      <div col
           class='beauty__desc'>
        <h1>美感 · 低价 · 高质</h1>
        <p>每季度，我们的设计董事带领总监级设计师会推出当季的整装预案，
          <br /> 我们的采购部门会基于预案向更多一线供应商比较以确保低价
        </p>
      </div>
    </section>

    <section class="standard -design"
             container>
      <img class='standard__img'
           src="~assets/img/index/house.png"
           alt="design standard">
      <img class='standard__number'
           src="~assets/img/index/01.png"
           alt="01">
      <div class="standard__mask"></div>
      <div class="standard__content">
        <h2>整装设计标准</h2>
        <p>每套整装方案中，我们充分考虑了十二类家具收纳、十条家居动线、六类色彩搭配、核心风格与主打元素。我们基于每个风格，我们会主导三个近似的搭配，并提供软装包（可拆项选择）。帮助您第一时间明确造价、材料、施工内容、设备与软装。</p>
        <nuxt-link class="Btn -black"
                   to='/1'>深入了解</nuxt-link>
      </div>
    </section>

    <div class="idx-line -left -first">01</div>

    <section class="standard -quality"
             container>
      <img class="standard__img"
           src="~assets/img/index/mac.png"
           alt="mac">
      <img class="standard__number"
           src="~assets/img/index/02.png"
           alt="02">
      <div class="standard__mask"></div>
      <div class="standard__content">
        <h2>质量控制标准</h2>
        <p>我们作为专业的项目总承包商，深谙质量责任之重大，在以下六件事上不敢有半点马虎。自有施工班组成熟稳定、严审制图（深化）精度、先放线后施工、行业领先的工艺要求、稳定成熟的建材配套与尽心尽责的质检管理；并通过我们的协同管理系统，各司其职，统一汇报，为用户提供远超国标的质量标准。</p>
        <nuxt-link class="Btn -black"
                   to='/2'>深入了解</nuxt-link>
      </div>
    </section>

    <div class="idx-line -right -second">02</div>

    <section class="standard -material"
             container>
      <img class="standard__img"
           src="~assets/img/index/wood.png"
           alt="wood">
      <img class="standard__number"
           src="~assets/img/index/03.png"
           alt="03">
      <div class="standard__mask"></div>
      <div class="standard__content">
        <h2>材料选择标准</h2>
        <p>我们拥有强大的供应链跟严格的供应链考评机制，精选符合设计的国内外一线品牌，从质量稳定、环保、价格、配送及时、安装合规、产能稳定这七个维度，以季度为单位进行评测。采用集采预定的方式对供应商下单，确保我们的采购成本优势能体现在整装预案之内。</p>
        <nuxt-link class="Btn -black" to='/3'>深入了解</nuxt-link>
      </div>
    </section>

    <div class="idx-line -left -third">03</div>

    <section class="service">
      <div container>
        <h1>中孚空间服务</h1>
        <ul class="service__list" grid>
          <li class="service__item" v-for='s in serviceList'>
            <img class="service__icon" :src='s.icon' :alt="s.title">
            <h3>{{s.title}}</h3>
            <p>{{s.txt}}</p>
            <img class="service__arrow" src="~assets/img/index/arrow-right.png" alt="arrow">
          </li>
        </ul>
      </div>


    </section>
  </div>
</template>

<script src='./index.js'></script>
<style src='./index.css' scoped></style>
