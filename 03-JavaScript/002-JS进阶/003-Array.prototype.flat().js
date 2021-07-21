/*
 * @Author       : HyFun
 * @Date         : 2021-07-13 22:30:17
 * @Description  : 数组扁平化
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-21 16:43:23
 */
const list = [[1, 2, [3], [4, 5]], [6], [7, 8], [9]]

/**
 * 方法一：数组原生flat方法
 */
console.log(list.flat(Infinity))

/**
 * 方法二：递归 + push
 */
function flat1(list = []) {
  const result = []
  list.forEach((v) => {
    if (Array.isArray(v)) {
      result.push(...flat1(v))
    } else {
      result.push(v)
    }
  })
  return result
}
console.log(flat1(list))

/**
 * 方法三：递归 + concat
 */
function flat2(list = []) {
  let result = []
  list.forEach((v) => {
    if (Array.isArray(v)) {
      result = result.concat(flat2(v))
    } else {
      result.push(v)
    }
  })
  return result
}

console.log(flat2(list))

/**
 * 方法四：while + some
 */
function flat3(list = []) {
  while (list.some((v) => Array.isArray(v))) {
    list = [].concat(...list)
  }
  return list
}
console.log(flat3(list))

/**
 * 方法五：中间变量
 */
function flat4(list = []) {
  let stack = [...list]
  let result = []
  while (stack.length) {
    let first = stack.shift()
    if (Array.isArray(first)) {
      stack.unshift(...first)
    } else {
      result.push(first)
    }
  }
  return result
}

console.log(flat4(list))

/**
 * 方法六：toString + split
 * 不考虑元素类型
 */
console.log(list.toString().split(','))

/**
 * 方法七：generator + yield*
 */
function* flat5(list) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      yield* flat5(list[i])
    }
  } else {
    yield list
  }
}

console.log(Array.from(flat5(list)))
