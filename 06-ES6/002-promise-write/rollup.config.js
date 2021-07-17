/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-17 14:21:56
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-17 14:23:10
 */

import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import clear from 'rollup-plugin-clear'
// import babel from 'rollup-plugin-babel'
// import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/promise.ts',
  output: {
    file: 'dist/promise.js',
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