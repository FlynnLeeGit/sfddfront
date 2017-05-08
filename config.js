const ENV = process.env.NODE_ENV
module.exports = {
  HOZZY_SERVER: '//dn-st.baogaoyezhu.com',
  IMG_SERVER: {
    development: 'http://ocefx1x5d.bkt.clouddn.com',
    staging: 'https://dn-st.baogaoyezhu.com',
    production: 'https://dn-st.baogaoyezhu.com'
  }[ENV],
  VIDEO_SERVER: {
    development: '//video.baogaoyezhu.com',
    staging: '//video.baogaoyezhu.com',
    production: '//video.baogaoyezhu.com'
  }[ENV],
  PORT: {
    development: 5180,
    staging: 5180,
    production: 5181
  }[ENV],
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
  },
  // 需要动态vueRender的路由
  dynamicRoutes: [
    '/assemble/vr/:style',
    '/assemble/material/:style',
    '/article/:id',
    '/custom-design/vrlist',
    '/custom-design/insperation',
    '/return-visit',
    '/view-point'
  ]
}
