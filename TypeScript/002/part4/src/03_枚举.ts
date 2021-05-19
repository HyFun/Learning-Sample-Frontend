/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-19 22:33:20
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-19 22:40:10
 */

/**
 * 1. 枚举类型  相当于java的枚举
 *  枚举类型的值默认是数字，从0开始，之后的默认+1
 *  也可以自己定义值
 */
enum Gender {
    男,
    女
}

console.log(Gender.男); // 0

console.log(Gender[1]); // 女


/**
 * 2. 自定义枚举值
 */

enum Color {
    RED = '红',
    BLUE = '蓝',
    GREEN = '绿',
}
console.log(Color.BLUE,Color.GREEN, Color.RED);
