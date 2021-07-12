<!--
 * @Author       : HyFun
 * @Date         : 2021-07-09 15:24:27
 * @Description  : JQuery
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-12 18:57:31
-->

# JQuery

## DOMContentLoaded

当初始的 HTML 文档被完全加载和解析完成之后， DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完全加载。

**_注意：script 中的耗时操作和网络加载远程 script 会延时触发`DOMContentLoaded`事件_**

- ### 原生事件写法

```js
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded')
})
```

- ### JQuery 写法

```js
// 1
$(function () {
  console.log(`init1`)
})

// 2
$(document).ready(function () {
  console.log(`init2`)
})

// 3
$().ready(function () {
  console.log(`init3`)
})
```

- ### ready 和 load 区别
  document.ready 方法在 DOM 树加载完成后就会执行，而 window.onload 是在页面资源（比如图片和媒体资源，它们的加载速度远慢于 DOM 的加载速度）加载完成之后才执行

## JQuery 对象和 DOM 对象相互转换

```js
// dom 转 jquery
$(dom)
$(selector)

// jquery 转 dom
$(dom)[0]
$(selector).get(0)
```

## JQuery 选择器

支持的选择器：

- id 选择器
- 类、伪类、属性、结构伪类
- 元素选择器

基本上上面的选择都够用了

## JQuery 遍历元素方法

- `parent()`: 返回当前元素的父级元素
- `parents(selector?)`: 返回满足 selector 的父级元素数组，没有参数返回全部
- `children(selector?)`: 返回当前元素的子类元素，满足 selector 的数组 **_注意：直接子元素 （亲儿子）_**
- `find(selector)`: 在当前元素查找所有满足 selector 的后代元素
- `siblings(selector?)`: 返回除了自己满足 selector 的兄弟元素数组
- `next()`: 返回当前元素的下一个兄弟元素
- `nextAll()`: 当前元素后边的所有兄弟元素
- `prev()`: 返回当前元素的上一个兄弟元素
- `prevAll()`: 当前元素前边的所有兄弟元素

## JQuery 的 DOM 操作

取值和设置值

- `text(value?)`: 获取/设置元素的文字内容，html 标签除外
- `html(value?)`: 获取/设置元素的 html 内容，会覆盖
- `val(value?)`: 获取/设置 input 标签的值

添加元素

- `append()`: 在当前元素内部后边添加内容。**_(新增子元素))_**
- `prepend()`: 在当前元素内部前边添加内容。**_(新增子元素)_**
- `after()`: 在当前元素后边添加内容。**_(和当前同级)_**
- `before()`: 在当前元素前边添加内容。**_(和当前同级)_**

删除元素

- `remove(selector?)`: 删除当前满足 selector 的元素。**_(删除自己)_**
- `empty()`: 删除元素的子级元素。**_(删除所有儿子)_**
- `html('')`: 当前元素的 html 内容设置为空。也同样达到`empty()`的效果

克隆
- `clone(event?)`: 克隆当前节点及其子节点。`event`默认为false，即不克隆事件。true则会克隆事件。

遍历

- `each((index, ele)=>{})`: 遍历元素

样式

- `css(key,value)`: 设置当前元素的样式，key 是样式属性，value 是属性对应的值
- `css({property: value})`: 以对象的方式样式属性

class

- `addClass('a b c')`: 给当前元素添加类
- `removeClass('a b c')`: 移除类
- `toggleClass('a b c')`: toggle 类

属性

- `prop(key, value?)`: 获取/设置当前元素自身的属性
- `attr(key, value?)`: 获取/设置当前元素自身的属性和自定义的属性
- `data(key, value)`: 给当前元素添加`data-[key]`，值为 value 的属性，在 html 页面中看不到，但是可以获取到值

尺寸

- `width()`: 获取元素的宽度。 **_content_**
- `height()`: 获取元素的宽度。**_content_**
- `innerWidth()`: 获取元素的宽度。**_content+padding_**
- `innerHeight()`: 获取元素的宽度。**_content+padding_**
- `outerWidth()`: 获取元素的宽度。**_content+padding+border_**
- `outerHeight()`: 获取元素的宽度。**_content+padding+border_**

**_注意：它们的大小计算方式取决于 box-sizing 属性_**

offset

- `offset()`: 返回基于文档位置的坐标 `{top: number, left: number}`
- `position()`: 返回基于父元素是 position: relative、absolute、fixed 的坐标
- `scrollTop()、scrollLeft()`: 返回当前元素基于父元素的位置

## JQuery 动画

内置动画，统一参数: `(speed = 'fast'|'slow'|duration, callback)`

- `show()、hide()、toggle()`: 显示 隐藏
- `fadeIn()、fadeOut()、toggleFade()`: 淡入淡出
- `slideDown()、slideUp()、toggleSlide()`: 滑动滑出

自定义动画

- `animate({params}, speed, callback)`

停止动画

- `stop()`

## JQuery 事件

常用事件

- `click()`: 单击
- `dbclick()`: 双击
- `change()`: 改变
- `mouseover()`:
- `mouseout()`:
- `mouseenter()`:
- `mouseleave()`:

多个事件

- `on('event...', handler)`: 向元素添加事件处理程序

  ```js
  // 绑定多个事件
  $('p').on('mouseenter mouseleave', function () {})
  ```

- `off(event)`: 移除事件，如果参数为空，移除所有的事件
- `one(event, handler)`: 被绑定的事件只会执行一次
- `trigger(event?)`: 触发指定事件

事件委托

```js
// 使用click()绑定事件
$('ol li').click(function () {
  console.log('click>>>>您点击了ol下的li') // 未触发点击方法
})

// 使用on()的事件委托
$('ol').on('click', 'li', function () {
  console.log('on>>>>您点击了ol下的li') // 点击方法被触发了
})

// 创建元素
$('ol').append($('<li>我是ol动态创建的li</li>'))
```

通过 on 绑定多个事件

```js
$('div').on({
mouseenter:function() {
    console.log('on多个事件:::鼠标进来了');
},
mouseleave:function() {
    console.log('on多个事件:::鼠标离开了');
},
click:function() {
    console.log('on一个事件:::div被点击了4');
}
```

## 其他 API

- `$.each(array, handler)`: 遍历数组
- `$.extend()`: 复制对象
  ```js
  {
    const wife = {
      name: '小红',
      age: 20,
      date: new Date()
    }
    const person = {
      name: '张三',
      age: 21,
      wife
    }
    const person2 = {}
    $.extend(true, person2, person)
    // 修改之前的值
    person.name = '李四'
    person.wife.name = '王五'
    console.log(person) // 改变
    console.log(person2) // 未改变
  }
  ```

## 滚动到顶部
[示例代码](.%2F015%20jquery%E7%9A%84scrollTop%E3%80%81scrollerLeft.html")

基于文档的滚动
```js
$('html,body').stop().animate(
  {
    scrollTop: '0px'
  },
  500
)
```