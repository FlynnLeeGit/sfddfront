<template>
  <div>
    <section class="ResponsiveBlock top">
      <img class="ResponsiveBlock__img"
           src="~assets/img/ideas/quality/top.jpg"
           alt="quality-top">
      <div class="ResponsiveBlock__content">
        <div class='top__content'>
          <p>我们知道客户对于质量的高度关注与自身责任之重大，质量优先的理念扎根在我们每个工作人员心中，
            <br> 在面临多项目进发、手工作业多、执业人员素养中下、管理环节众多、设计复杂程度高、多方协同困难的局面下，
            <br> 我们至少做对了这几件事情：高精度制图、全尺寸放线、班组技术培训、三检制度（品控）、研发项目管理系统、研发施工图标准插件，
            <br> 以保障每个复杂的工程项目的质量不出纰漏。
          </p>
        </div>
      </div>
    </section>

    <section class="line"
             container>
      <h1 class="quality__title">全尺寸放线</h1>
      <p class="quality__desc">全尺寸放线作为我们在正式施工第一步，至关重要，它是图纸校验、施工指导、分包商与材料商的量尺依据，
        <br> 通过五根主控线（空间主控线、轴线、一米水平线、地面完成面线、吊顶完成面线、机电标高线）加以湿作业施工线、造型线、天花投影，
        <br> 同时放线于现场，清晰的标示材质、尺寸，能提早暴露现场问题，
        <br> 高效协调我们与各材料商、分包商之间的工作范围，确保施工一气呵成。
      </p>
      <v-video class="line__video" src='//video.baogaoyezhu.com/video/sfdd/2.mp4' />
    </section>

    <section class="high-precision"
             container>
      <h1 class="quality__title">高精度制图</h1>
      <p class="quality__desc">制图精度是装修的第一道保证，
        <br> 我们研发了针对装饰行业的制图标准插件SADP（Sfdd-Auto-Desing-Plugin），确保每一张图纸都精准合规。
        <br> 尺寸详细标注、立面完整表达、材质标识清晰，收口与大样与剖面一张不漏，
        <br> 这些用心不仅为我们效率大幅提升，更为您家的效果落地保驾护航。
      </p>
      <v-video class="high-precision__video" src='//video.baogaoyezhu.com/video/sfdd/3.mp4' />
    </section>

    <section class="tri-check">
      <h1 class="quality__title">三检制度</h1>
      <p class="quality__desc">施工的质量离不开成熟的质量控制体系、我们标准采用高于国际（GB-50203）的企业标准验收依据，
        <br> 独创了品控的三检制度，施工员自检、项目经理自检、质检员全检，三检完成后提报验收，
        <br> 每次验收时均用仪器采集数据，用数据判定合规标准。
      </p>
      <img class="tri-check__img"
           src="~assets/img/ideas/quality/tri_check.png"
           alt="tri-check">
    </section>

    <section class="team">
      <h1 class="quality__title">成熟班组</h1>
      <p class="quality__desc">施工人员的专业度与项目经理资历是质量体系的基石，
        <br> 我们常年自备专业施工队伍与管理队伍，并就常见施工质量通病预防，反复多次培训与讲解，
        <br> 下载中孚空间常见质量通病预防。
      </p>
      <div class="team__img-wrap">
        <img src="~assets/img/ideas/quality/team.png"
             alt="team">
      </div>
    </section>

    <section class="management"
             container>
      <h1 class="quality__title">高效管理</h1>
      <p class="quality__desc">多项目并发考验着我们的管理能力
        <br> 面对同时数百个在建项目，每个项目超过120个质量主控点
        <br> 我们采用云端项目管理系统，井井有条的管理着每年数万计的质量主控点
      </p>
      <img class="management__img"
           src="~assets/img/ideas/quality/flow.jpg"
           alt="management">
    </section>

  </div>
</template>
<style scoped src='./quality.css'></style>
<script>
import vVideo from '~components/Video'
export default {
  components: {
    vVideo
  }
}
</script>
