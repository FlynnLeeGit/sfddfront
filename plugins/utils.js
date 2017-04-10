export function throttle (fn, delay) {
  clearTimeout(fn.timer)
  fn.timer = setTimeout(
    () => {
      fn.call()
    },
    delay
  )
}
