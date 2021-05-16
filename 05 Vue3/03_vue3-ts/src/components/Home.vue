<!--
 * @Author       : heyongfeng
 * @Date         : 2021-05-09 11:50:42
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-09 11:53:55
-->
<template>
    <div>
        {{title}}
        <br>
        <button @click="setTitle">点我改变</button>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Home',
    data(){
        return {
            title: '我是title'
        }
    },
    methods: {
        setTitle():void {
            this.title = '我是改变后的title'
        }
    }
})
</script>