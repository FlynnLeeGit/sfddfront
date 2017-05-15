export default ctx => {
  const { store } = ctx
  const currentStyleId = store.state.assemble.currentStyleId
  return store.dispatch('getAssembleSpaces', currentStyleId)
}
