/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-09 12:18:51
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-09 12:19:14
 */
export interface User {
    username:string,
    age: number,
    setUserName(name:string):void,
    getUserName():string
}