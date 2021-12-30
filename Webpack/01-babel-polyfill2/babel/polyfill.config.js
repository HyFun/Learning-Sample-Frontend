/**
 * useBuiltIns
 *    - false 需要全部导入 corejs
 *    - entry 需要全部导入 corejs
 *    - usage 不用导入，会自动按需引入，但无法识别 includes 来导入垫片
 * modules
 *    - false 不会解析esm，用于tree-sharking
 * corejs
 *    - 2 使用corejs2版本
 * 
 */
module.exports = {
  "presets": [
    [
      "@babel/preset-env",{
        "modules": false,
        "useBuiltIns": "usage",
        "corejs":2
      }
    ]
  ]
}
