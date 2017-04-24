export function throttle (fn, delay) {
  clearTimeout(fn.timer)
  fn.timer = setTimeout(() => {
    fn.call()
  }, delay)
}

export const isType = obj =>
  Object.prototype.toString
    .call(obj)
    .match(/^\[object\s(.*)\]$/)[1]
    .toLowerCase()

export const toListMap = obj => {
  let result = {
    list: [],
    map: {}
  }
  if (isType(obj) === 'object') {
    Object.keys(obj).forEach(k => {
      result.list.push({ id: k, name: obj[k] })
    })
    result.map = obj
  }
  if (isType(obj) === 'array') {
  }
  return result
}

export class F {
  constructor (arr) {
    this.arr = arr
  }
  limitBy (page, pageCount) {
    this.arr = this.arr.slice((page - 1) * pageCount, page * pageCount)
    return this
  }
  filterBy (field, target) {
    this.arr = this.arr.filter(item => {
      if (target === '') {
        return true
      } else {
        return item[field] === target
      }
    })
    return this
  }
  get () {
    return this.arr
  }
}
