import {
  throttle
} from '~plugins/utils'
import Vue from 'vue'

const getEdgeColor = url => new Promise((resolve, reject) => {
  let ctx = document.createElement('canvas').getContext('2d')
  let img = new Image()
  img.crossOrigin = true
  img.src = url
  img.onload = () => {
    ctx.drawImage(img, 0, 0, img.width, img.height)
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
    img = null
    ctx = null
    resolve(`rgba(${r},${g},${b},${a})`)
  }
})

// 图片懒加载
const elHashMap = {}
class LoadEl {
  constructor (el, binding) {
    this.el = el
    this.binding = binding

    this.isBg = binding.modifiers.bg
    this.isAnimate = binding.modifiers.animate
    this.isEdge = binding.modifiers.edge
    this.judge = 1

    if (this.isAnimate) {
      this.el.style.opacity = '0'
      this.judge = 0.9
    }

    this.loaded = false
    // 每个图像特有事件监听方法，所以不能放在原型上
    this.handler = () => {
      throttle(() => {
        this.update()
      }, 100)
    }
  }
  canLoad () {
    const {
      top,
      bottom
    } = this.el.getBoundingClientRect()
    return top < window.innerHeight * this.judge && bottom > 0 && !this.loaded
  }
  loadBg () {
    this.el.style.backgroundImage = `url(${this.binding.value})`
  }
  loadEdge () {
    getEdgeColor(this.binding.value).then(rgba => {
      this.el.style.backgroundColor = rgba
    })
  }
  loadAnimate () {
    this.el.classList.add('animated')
    try {
      this.binding.value.forEach(effect => {
        this.el.classList.add(effect)
      })
    } catch (e) {
      console.error(this.binding.value, e) // eslint-disable-line
    }
  }
  update () {
    if (this.canLoad()) {
      this.loaded = true
      if (this.isBg) {
        this.loadBg()
      }
      if (this.isEdge) {
        this.loadEdge()
      }
      if (this.isAnimate) {
        this.loadAnimate()
      }
      this.removeEvent()
    }
  }
  addEvent () {
    window.addEventListener('scroll', this.handler, false)
  }
  removeEvent () {
    window.removeEventListener('scroll', this.handler, false)
  }
}

const lazy = {
  add (el, binding, vnode) {
    const loadEl = new LoadEl(el, binding)
    loadEl.update()
    loadEl.addEvent()
    // 哈希表 使用vue生成节点key用作键名
    vnode.$uid = `x${el.offsetLeft}y${el.offsetTop}`
    elHashMap[vnode.$uid] = loadEl
  },
  remove (el, binding, vnode) {
    // 获得当前的懒加载实例对象
    const loadEl = elHashMap[vnode.$uid]

    // 销毁时删除事件监听
    if (loadEl) {
      loadEl.removeEvent()
      delete elHashMap[vnode.$uid]
    }
  }
}

const vueLazy = {
  install (Vue) {
    Vue.directive('lazy', {
      // directive内部无上下文 需要绑定上下文到实例
      inserted: lazy.add,
      unbind: lazy.remove
    })
  }
}

Vue.use(vueLazy)
