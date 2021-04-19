/*
 * @Author       : HyFun
 * @Date         : 2021-04-19 22:53:58
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-19 22:54:16
 */

export default class Food {
    element:HTMLElement
    constructor() {
        // 获取页面中的food元素，并赋值给food
        this.element = document.querySelector('#food')!
    }

    // 获取X坐标的方法
    getX() {
        return this.element.offsetLeft
    }

    getY() {
        return this.element.offsetTop
    }

    // 修改食物位置的方法
    change() {
        const x = Math.round(Math.random() * 29) * 10
        const y = Math.round(Math.random() * 29) * 10
        this.element.style.left = x + 'px'
        this.element.style.top = y + 'px'
    }
}