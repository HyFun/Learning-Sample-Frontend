(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

    /*
     * @Author       : HyFun
     * @Date         : 2021-01-27 14:39:36
     * @Description  : 
     * @LastEditors  : HyFun
     * @LastEditTime : 2021-01-27 14:55:47
     */
    class Vue {
        constructor(options) {
            console.log('新建了vue实例啦啦啦');
        }
    }

    /*
     * @Author       : HyFun
     * @Date         : 2021-01-27 13:59:00
     * @Description  : 
     * @LastEditors  : HyFun
     * @LastEditTime : 2021-01-27 14:40:34
     */

    return Vue;

})));
