/*
 * @Author       : HyFun
 * @Date         : 2021-09-01 22:48:40
 * @Description  : react中间件代理
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-03 18:00:16
 */
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    proxy('/api1', {
      target: 'http://10.123:80',
      changeOrigin: true,
      pathRewrite: {
        '^/api1': ''
      }
    })
  )
}
