/*
 * @Author       : HyFun
 * @Date         : 2021-09-17 14:22:49
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-17 14:25:53
 */
/* craco.config.js */
const CracoAntDesignPlugin = require('craco-antd')

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A'
        }
      }
    }
  ]
}
