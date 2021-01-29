/*
 * @Author       : HyFun
 * @Date         : 2021-01-27 13:56:12
 * @Description  : rollup 打包配置
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-29 15:18:01
 */
import babel from 'rollup-plugin-babel'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/vue.js',
        format: 'umd',
        name: 'Vue'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
