export default ctx => {
  const { store, route } = ctx
  const [, staticStyle] = route.path.match(/\/intro\/(\w+)/) || []
  const currentStyleEn = route.params.style || staticStyle
  store.commit('SET_ASSEMBLE_CURRENT_STYLE', currentStyleEn)
  return store.dispatch('setAssembleStyleId', currentStyleEn)
}
