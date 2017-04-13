module.exports = {
  proxyTable: {
    '/_fapi': 'http://develop.sfdd.lab/',
    '/_common': 'http://develop.sfdd.lab/'
  },
  saladConf: {
    browsers: ['ie > 8', 'last 2 versions'],
    features: {
      bem: {
        shortcuts: {
          component: 'b',
          modifier: 'm',
          descendent: 'e',
          utility: 'u'
        },
        separators: {
          descendent: '__',
          modifier: '--'
        }
      }
    }
  }
}
