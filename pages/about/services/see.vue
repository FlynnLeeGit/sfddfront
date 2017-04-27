<template>
  <div class="see">
    <section class="ResponsiveBlock">
      <img class="ResponsiveBlock__img"
           src="~assets/img/services/see/preview.jpg"
           alt="see-preview">
    </section>

    <section class="scene"
             container>
      <h1 class="see__title">效果图即实景</h1>
      <p class="see__desc">中孚空间的整装预案从设计、施工、建材、设备、家具、饰品给业主提供整包服务，
        <br> 通过在线VR浏览，提前预知到入住后的各处细节，小到阳台地漏，大到客餐厅的整体效果，一览无余，
        <br> 我们通过SADP（中孚自研的施工图设计插件）确保每张图纸的精确度，
        <br> 再通过全尺寸放线在开工早期就完成最终效果的室内呈现。
      </p>
      <v-video class="scene__video"
               src="//video.baogaoyezhu.com/video/sfdd/3.mp4" />
    </section>

    <section class="line">
      <div container>
        <h1 class="see__title">全尺寸放线</h1>
        <p class="see__desc">全尺寸放线作为我们在正式施工第一步，至关重要，它是图纸校验、施工指导、分包商与材料商的量尺依据，
          <br> 通过五根主控线（空间主控线、轴线、一米水平线、地面完成面线、吊顶完成面线、机电标高线）加以湿作业施工线、造型线、天花投影，
          <br> 同时放线于现场，清晰的标示材质、尺寸，能提早暴露现场问题，
          <br> 高效协调我们与各材料商、分包商之间的工作范围，确保施工一气呵成。
        </p>
        <v-video class="line__video"
                 src="//video.baogaoyezhu.com/video/sfdd/2.mp4" />
      </div>

    </section>

  </div>
</template>
<style scoped src='./see.css'></style>
<script>
import vVideo from '~components/Video'
export default {
  components: {
    vVideo
  }
}
</script>
