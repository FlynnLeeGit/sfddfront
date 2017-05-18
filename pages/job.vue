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
          <li class="jobs__item -tr"
              ref='job'
              :key='jobIdx'
              v-for='(job,jobIdx) in jobs'
              :active='jobIdx===currentJobIdx'>
            <div class="jobs__line"
                 @click='clickJob(jobIdx)'>
              <div class="jobs__td">
                {{job.name}}
              </div>
              <div class="jobs__td">
                {{job.desc}}
              </div>
              <div class="jobs__td">
                {{job.address}}
              </div>
              <div class="jobs__td">
                <i class="iconfont icon-less"></i>
              </div>
            </div>
            <div class="jobs__content">
              <div class="jobs__content-item"
                   v-for='demand in job.demands'>
                <h4>{{demand.title}}</h4>
                <ol>
                  <li v-for='detail in demand.details'>{{detail}}</li>
                </ol>
              </div>
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
import jobs from './job.js'
export default {
  components: {
    TabHeader
  },
  data () {
    return {
      tabs: [
        { to: '/job', name: '工作机会' }
      ],
      currentJobIdx: -1,
      jobs
    }
  },
  methods: {
    clickJob (jobIdx) {
      if (jobIdx === this.currentJobIdx) {
        this.currentJobIdx = -1
      } else {
        this.currentJobIdx = jobIdx
        setTimeout(() => {
          let el = this.$refs.job[jobIdx]
          let elSt = 0
          while (el.offsetParent) {
            elSt += el.offsetTop
            el = el.offsetParent
          }
          this.scrollTo(elSt - 60)
        }, 500)
      }
    },
    scrollTo (st) {
      let req = null
      const stRender = () => {
        let docST = document.body.scrollTop || document.documentElement.scrollTop
        if (st < docST - 30) {
          this.docTo(docST - 30)
          req = window.requestAnimationFrame(stRender)
        } else {
          window.cancelAnimationFrame(req)
        }
      }
      req = window.requestAnimationFrame(stRender)
    },
    docTo (st) {
      document.body.scrollTop = document.documentElement.scrollTop = st
    }
  }
}
</script>
