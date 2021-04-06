/*
 * @Author       : HyFun
 * @Date         : 2021-04-06 11:12:16
 * @Description  : string和array的indexOf实现
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-06 12:40:21
 */
String.prototype.indexOf = function(searchString,position = 0) {
    const string = this.toString()
    const reg = new RegExp(`${searchString}`,'ig')
    reg.lastIndex = position
    const result = reg.exec(string)
    return result ? result.index:-1
}

console.log('hello word!'.indexOf('word'));

Array.prototype.indexOf = function(searchElement, fromIndex = 0) {
    if(!searchElement) {
        return -1
    }
    if(fromIndex>this.length-1) {
        return -1
    }
    for(let i = fromIndex;i<this.length-1;i++) {
        if(this[i]===searchElement){
            return i
        }
    }
    return -1
}

console.log([1,2,3,4,5].indexOf(4));