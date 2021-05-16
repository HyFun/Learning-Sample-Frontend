<!--
 * @Author       : heyongfeng
 * @Date         : 2021-05-09 12:10:33
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-09 12:28:04
-->
<template>
    <div>
        <input type="text" v-model="username">
        <br>
        {{username}}
        <br>
        {{reverseUserName}}
        <br>
        <button @click="setUserName('我叫李四')">改变username</button>
    </div>
</template>
<script lang="ts">
import {computed, defineComponent,reactive, toRefs} from 'vue'
import {User} from './com'
export default defineComponent({
    setup() {
        // 1. 第一种约束方法
        // const user:User = reactive({
        //     username: '张三',
        //     age: 20,
        //     setUserName(name: string){
        //         this.username = name
        //     },
        //     getUserName() {
        //         return this.username
        //     }
        // })

        // 2. 第一种约束方法: 泛型
        // const user = reactive<User>({
        //     username: '张三',
        //     age: 20,
        //     setUserName(name: string){
        //         this.username = name
        //     },
        //     getUserName() {
        //         return this.username
        //     }
        // })


        // 3. 第三种约束方法: as
        const user = reactive({
            username: '张三',
            age: 20,
            setUserName(name: string){
                this.username = name
            },
            getUserName() {
                return this.username
            }
        }) as User


        const reverseUserName = computed(():string=>{
            return user.username.split('').reverse().join('')
        })


        return {
            ...toRefs(user),
            reverseUserName
        }
    }
})
</script>