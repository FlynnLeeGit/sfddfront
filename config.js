module.exports = {
  HOZZY_SERVER: '//dn-st.baogaoyezhu.com',
  PORT: {
    development: 5180,
    staging: 5180,
    production: 5181
  }[process.env.NODE_ENV],
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
