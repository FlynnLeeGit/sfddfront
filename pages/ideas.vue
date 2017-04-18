<template>
  <div class="ideas-parent">
    <section class="ideas-hd"
             container
             grid='2,middle'>
      <div col
           class="ideas-hd__title">中孚整装理念</div>
      <ul col='right'
          grid
          class="ideas-hd__tabs">
        <nuxt-link tag='li'
                   to='/ideas/design'
                   class="ideas-hd__tab">
          设计标准
        </nuxt-link>
        <nuxt-link tag='li'
                   to='/ideas/quality'
                   class="ideas-hd__tab">
          质量控制
        </nuxt-link>
        <nuxt-link tag='li'
                   to='/ideas/material'
                   class="ideas-hd__tab">
          材料选择
        </nuxt-link>
      </ul>
    </section>
    <nuxt-child />
  </div>
</template>
<style src='./ideas.css'></style>
