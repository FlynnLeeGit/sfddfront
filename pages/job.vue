<template>
  <div class="job">
    <tab-header title='招聘'
                :tabs='tabs'></tab-header>
    <div class="job__content">
      <section class="ResponsiveBlock">
        <img src="~assets/img/job/join.jpg"
             alt="join-img"
             class="ResponsiveBlock__img">
      </section>
      <section class="job__list _tc"
               container>
        <h1 class="Intro__title">职位列表</h1>
        <p class="Intro__desc">以下职位长期招聘，欢迎简历投递至：</p>
        <ul class="jobs">
          <li class="jobs__item -th">
            <div class="jobs__td">
              职位名称
            </div>
            <div class="jobs__td">
              工作职能
            </div>
            <div class="jobs__td">
              工作地点
            </div>
            <div class="jobs__td">
              操作
            </div>
          </li>
          <li class="jobs__item" v-for='j in jobs'>
            <div class="jobs__td">
              {{j.name}}
            </div>
            <div class="jobs__td">
              {{j.desc}}
            </div>
            <div class="jobs__td">
              {{j.address}}
            </div>
            <div class="jobs__td">
              操作
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<style src='./job.css' scoped></style>
<script>
import TabHeader from '~components/TabHeader'
export default {
  components: {
    TabHeader
  },
  data () {
    return {
      tabs: [
        { to: '/job', name: '工作机会' }
      ],
      jobs: [
        // { name: 'UED', desc: '辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做', address: '上海市闵行区东川路kkk' },
        // { name: 'UED', desc: '辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做', address: '上海市闵行区东川路kkk' },
        // { name: 'UED', desc: '辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做', address: '上海市闵行区东川路kkk' },
        // { name: 'UED', desc: '辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做辅助我门做', address: '上海市闵行区东川路kkk' }
      ]
    }
  }
}
</script>
