import { throttle } from '~plugins/utils'
import Vue from 'vue'

// 图片懒加载
const elHashMap = {}
class LoadEl {
  constructor (el, binding) {
    this.el = el
    this.binding = binding

    this.isBg = binding.modifiers.bg
    this.isAnimate = binding.modifiers.animate

    if (this.isAnimate) {
      this.el.style.opacity = 0
    }

    this.loaded = false
    // 每个图像特有事件监听方法，所以不能放在原型上
    this.handler = () => {
      throttle(() => {
        this.update()
      }, 500)
    }
  }
  canLoad () {
    const { top, bottom } = this.el.getBoundingClientRect()
    return top < window.innerHeight * 1 && bottom > 0 && !this.loaded
  }
  loadBg () {
    this.el.style.backgroundImage = `url(${this.binding.value})`
  }
  loadAnimate () {
    this.el.classList.add('animated')
    const effects = this.binding.value.split(' ')
    effects.forEach(effect => {
      this.el.classList.add(effect)
    })
  }
  update () {
    if (this.canLoad()) {
      this.loaded = true
      if (this.isBg) {
        this.loadBg()
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
    elHashMap[vnode.key] = loadEl
  },
  remove (el, binding, vnode) {
    // 获得当前的懒加载实例对象
    const loadEl = elHashMap[vnode.key]
    // 销毁时删除事件监听
    loadEl.removeEvent()
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
