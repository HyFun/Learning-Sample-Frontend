/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-15 14:52:30
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-15 14:53:25
 */
/*
 * @Author       : heyongfeng
 * @Date         : 2021-06-30 15:25:48
 * @Description  : rollup配置
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-01 15:04:28
 */
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import clear from 'rollup-plugin-clear'
// import babel from 'rollup-plugin-babel'
// import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'auto'
  },
  external: [],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    clear({
      targets: ['./dist']
    })
    // babel({
    //   exclude: 'node_modules/**'
    // })
    // terser()
  ]
}
