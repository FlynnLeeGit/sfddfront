export function throttle (fn, delay) {
  clearTimeout(fn.timer)
  fn.timer = setTimeout(
    () => {
      fn.call()
    },
    delay
  )
}

export const isType = obj => Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1].toLowerCase()

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
