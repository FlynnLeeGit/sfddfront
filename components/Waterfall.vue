<template>
  <ul class="Waterfall"
      :class='waterfallCls'>
    <li ref='column'
        v-for='(col,colIdx) in waterfallArr'
        :key='colIdx'
        class="Waterfall__column">
      <div class="Waterfall__item"
           v-for='(item,itemIdx) in col'
           :key="item.src">
        <div class="Waterfall__item-content"
             @click='click(item)'>
          <div class="Waterfall__img">
            <img :src="srcFilter(item.src)"
                 width="100%">
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    colNum: {
      type: Number,
      default: 3
    },
    srcFilter: {
      type: Function,
      default: src => src
    },
    needmore: {
      type: Function,
      default: () => Promise.resolve()
    }
  },
  data () {
    return {
      waterfallArr: [],
      itemIdx: 0,
      scrollTop: 0
    }
  },
  computed: {
    waterfallCls () {
      return [`is-${this.colNum}`]
    }
  },
  methods: {
    click (item) {
      this.$emit('click-item', item)
    },
    init () {
      this.waterfallArr = []
      this.itemIdx = 0
      // 创建二维数组
      for (let i = 0; i < this.colNum; i++) {
        this.waterfallArr.push([])
      }
      // 每一列先加入五个图片
      for (let i = 0; i < 5; i++) {
        this.waterfallArr.forEach(col => {
          this.append(col)
        })
      }
    },
    append (col) {
      if (this.itemIdx < this.list.length) {
        col.push(this.list[this.itemIdx++])
      }
      if (this.itemIdx === this.list.length && this.list.length > 0) {
        this.needmore().then(() => {
          this.appendDetect()
        })
        this.itemIdx++
      }
    },
    appendDetect () {
      const columns = this.$refs.column
      columns.forEach((col, colIdx) => {
        const {
          bottom
        } = col.getBoundingClientRect()
        const winH = window.innerHeight
        if (bottom < winH * 1.2) {
          this.append(this.waterfallArr[colIdx])
        }
      })
    }
  },
  watch: {
    list (newList) {
      this.init()
    }
  },
  created () {
    this.init()
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (Math.abs(scrollTop - this.scrollTop) > 50) {
        this.scrollTop = scrollTop
        this.appendDetect()
      }
    }, false)
  }
}
</script>
<style src='./Waterfall.css'></style>


