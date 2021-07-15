/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-24 22:24:15
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-24 22:33:05
 */
(() => {
  /**
   * 重载
   * 
   */

  function add(a1: number, a2: number): number;
  function add(a1: string, a2: string): string;

  function add(x: number | string, y: number | string): number | string {
    if (typeof x === "string" && typeof y === "string") {
      return x + y;
    } else if (typeof x === "number" && typeof y === "number") {
      return x + y;
    }
    return 0
  }

  add(1,2)
  add(1,'2')
})();
