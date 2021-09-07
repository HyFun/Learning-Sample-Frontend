/*
 * @Author       : HyFun
 * @Date         : 2021-09-07 10:20:12
 * @Description  : Condition Type
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-07 10:25:36
 */

type isTrue<T> = T extends boolean ? true : false


type type1 = isTrue<true> // true
type type2 = isTrue<number> // false