<template>
  <section class="ResponsiveBlock Advertise">
    <picture>
      <source type='image/webp'
              srcset='~assets/img/common/advertise/webp/know-previous.webp'>
      <img src='~assets/img/common/advertise/know-previous.jpg'
           class="ResponsiveBlock__img">
    </picture>
    <div class="ResponsiveBlock__content">
      <div class="Advertise__content"
           grid='middle'>
        <div>
          <h1 class="Advertise__title">了解我们过往的作品</h1>
          <nuxt-link class="Btn -white Advertise__btn"
                     to='/custom-design/vrlist'>
            点击前往
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
