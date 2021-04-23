<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-22 13:28:11
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-22 16:31:50
-->
<template>
    <div>
        <h3>事件对象</h3>
        <button @click="clickButton1">点我1</button>
        <button @click="clickButton2('111',$event)">点我2</button>
        <button @click="clickButton3($event)">点我改变自己的颜色</button>
        <div>
            {{ event }}
        </div>
        <h3>事件对象-获取属性data-</h3>
        <button @click="clickButton4" data-id="我是id">点我获取属性</button>
        <h3>事件对象-阻止原生事件</h3>
        <a href="https://www.baidu.com" target="_blank">点百度可以去</a>
        <br>
        <a href="https://www.baidu.com" target="_blank" @click="clickButton5">点百度不可以去</a>
        <h3>事件对象-阻止事件冒泡</h3>
        <span>1. 未阻止</span>
        <div @click="clickFather1">
            我是父亲
            <div @click="clickSon1">我是儿子</div>
        </div>
        <span>2. 阻止了</span>
        <div @click="clickFather2">
            我是父亲
            <div @click="clickSon2">我是儿子</div>
        </div>
        <h3>多事件处理</h3>
        <div @click="one(),two()">多事件</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            event: ''
        }
    },
    methods: {
        /**
         * 方式一：如果方法不传参，直接点击的时候写方法名，在方法中，参数的第一个参数就是事件对象
         */
        clickButton1(e) {
            console.log(e);
            this.event = JSON.stringify(e)
        },
        /**
         * 方式二：如果传参，那么事件对象则需要写成 $event
         */
        clickButton2(name,e) {
            console.log(e);
            this.event = JSON.stringify(e)
        },
        /**
         * 通过事件对象，获取事件节点
         * event.srcElement
         * event.target
         */
        clickButton3(e) {
            console.log(e);
            e.srcElement.style.backgroundColor = 'orange'
        },
        /**
         * 获取自定义的属性
         */
        clickButton4(e){
            const id = e.srcElement.dataset.id
            alert(id)
        },
        /**
         * 阻止原生事件
         */
        clickButton5(e) {
            e.preventDefault();
        },
        clickFather1() {
            alert('我是父亲1')
        },
        clickSon1() {
            alert('我是儿子1')
        },
        clickFather2() {
            alert('我是父亲2')
        },
        clickSon2(e) {
            // IE下使用 e.cancelBubble = true
            e.cancelBubble = true
            e.stopPropagation();
            alert('我是儿子2')
        },
        one() {
            alert('one')
        },
        two() {
            alert('two')
        }
    },
}
</script>