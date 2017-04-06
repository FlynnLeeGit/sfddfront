const fs = require('fs')
const path = require('path')
const { apiServer, name } = require('../config')

const axios = require('axios').create({
  baseURL: apiServer
})

const pathJoin = p => path.join(__dirname, p)
// 添加error模版页样式
const addPhpStyle = pageString => {
  const headTailIndex = pageString.indexOf('</head>')
  return pageString.substr(0, headTailIndex) +
    `<style>
    .show-on-php{
      display:block !important;
    }
    .show-on-node{
      display:none !important;
    }
  </style>` +
    pageString.substr(headTailIndex)
}

// 爬取一个不存在的页面作为模版
axios
  .post('404')
  .then(res => {
    console.log('404 can not be reached'); // eslint-disable-line
  })
  .catch(e => {
    let errorPage = e.response.data
    fs.writeFileSync(pathJoin('./error/404.html'), errorPage, 'utf-8')
  })

const getRoutes = routePath => {
  const rawRoute = fs.readFileSync(routePath, 'utf-8')
  const routerIndex = rawRoute.indexOf('routes')

  const routerString = rawRoute.substring(routerIndex, rawRoute.length - 4)

  const routesString = routerString
    .replace(/component:.+/g, '')
    .replace('routes:', '')
  console.log('路由表====>\n', routesString); // eslint-disable-line
  return eval(routesString); // eslint-disable-line
}

const routes = getRoutes(pathJoin('../.nuxt/router.js'))

const tasks = routes.map(route => {
  return axios
    .get(route.path)
    .then(res => {
      const page = res.data
      const errorFile = pathJoin(`./${route.name}-error.html`)
      fs.writeFileSync(pathJoin(`./pages/${route.name}.html`), page, 'utf-8')
      if (fs.existsSync(errorFile)) {
        fs.unlinkSync(errorFile)
      }
    })
    .catch(e => {
      let errorPage = e.response.data
      const errorFile = pathJoin(`./${route.name}-error.html`)
      if (fs.existsSync(errorFile)) {
        fs.unlinkSync(errorFile)
      }
      fs.writeFileSync(errorFile, errorPage, 'utf-8')
      throw new Error(`生成页面错误 请查看${route.name}-error.html`)
    })
})

Promise.all(tasks)
  .then(() => {
    console.log('爬取页面完成！'); // eslint-disable-line
  })
  .catch(e => {
    console.error(e); // eslint-disable-line
  })
