/*
 * @Author       : HyFun
 * @Date         : 2021-04-19 22:56:14
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-19 23:03:53
 */
export default class Snake {
    head:HTMLElement
    bodies: HTMLCollection
    constructor() {  
        this.head = document.querySelector('#snake')!?.firstChild as HTMLElement
        this.bodies = document.querySelector('#snake')?.getElementsByTagName('div') as HTMLCollection
    }

    getX() {
        return this.head.offsetLeft
    }

    getY() {
        return this.head.offsetTop
    }
}