/*
 * @Author       : HyFun
 * @Date         : 2021-04-19 22:54:23
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-19 22:54:52
 */

export default class Score {
    private MAX_LEVEL = 10

    score = 0
    level = 1
    upScore = 10

    scoreEle: HTMLElement
    levelEle: HTMLElement
    constructor(maxLevel:number = 10,upScore:number = 10) {
        this.MAX_LEVEL = maxLevel
        this.upScore = upScore

        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.querySelector('#level')!

        // 初始化分数和等级
        this.scoreEle.innerText = `${this.score}`
        this.levelEle.innerText = `${this.level}`
    }

    addScore() {
        this.score++
        this.scoreEle.innerText = `${this.score}`
        if(this.score % 10 === 0) {
            this.levelUp()
        }
    }

    private levelUp() {
        if(this.level<this.MAX_LEVEL){
            this.level++
            this.levelEle.innerText = `${this.level}`
        }
    }
}