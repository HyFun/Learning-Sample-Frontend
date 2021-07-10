<!--
 * @Author       : HyFun
 * @Date         : 2021-07-10 21:15:29
 * @Description  : readme
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-10 23:29:53
-->

# DOM

## 节点类型

| 节点         | 类型值 |
| ------------ | ------ |
| element      | 1      |
| attribute    | 2      |
| text         | 3      |
| CDATASection | 4      |

## 节点选择器

- `document.getElementById()`: 通过 id 获取节点对象
- `document.getElementsByClassName()`: 通过类获取一组元素对象
- `document.getElementsByTagName()`: 通过元素名称获取一组元素对象
- `document.querySelector(selector)`: 通过 css 选择器获取**_第一个元素对象_**
- `document.querySelectorAll(selector)`: 通过 css 选择器获取所有选中的元素对象

## 节点遍历

上面通过一些方法能获取到一个 dom 对象，那么如果想要获取它的兄弟、父亲、孩子该怎么获取呢？

- `.parentNode`: 亲父亲，所属父级节点
- `.childNodes`: 所有孩子节点。**_（包含 text、元素节点）_**
- `.children`: 所有孩子元素节点。**_（包含元素节点）_**
- `.firstChild`: 第一个孩子节点。 **_（包含 text、元素节点）_**
- `.firstElementChild`: 第一个孩子节点。**_（包含元素节点）_**
- `.lastChild`: 最后一个孩子节点。 **_（包含 text、元素节点）_**
- `.lastElementChild`: 最后一个孩子节点。**_（包含元素节点）_**
- `.nextSibling`: 当前节点的下一个节点。**_（包含 text、元素节点）_**
- `.nextElementSibling`: 当前节点的下一个节点。**_（包含元素节点）_**
- `.previousSibling`: 当前节点的上一个节点。**_（包含 text、元素节点）_**
- `.previousElementSibling`: 当前节点的上一个节点。**_（包含元素节点）_**

## DOM 操作

class

- `.classList`: 查看当前元素拥有的类列表
- `.classList.add(className)`: 添加某个类
- `.classList.remove(className)`: 移除某个类
- `.classList.toggle(className)`: toggle 某个类

style

- `.style.width`: 设置元素宽
- `.style.height`: 设置元素宽
- `.style.backgroundColor`: 设置元素背景颜色

**_注意：请使用驼峰命名法，第一个字母小写_**

添加元素

- `.appendChild(element)`: 添加一个元素子元素在最后
- `.insertBefore(element, whichEle)`: 在子元素`whichEle`前面添加一个`element`元素。
- `.innerHTML`: 也可以使用 innerHTML 直接添加元素，如下
  ```js
  parent.innerHTML = `<li>我是新添加的元素</li>`
  ```

删除元素

- `.remove()`: 删除自己
- `.removeChild(element)`: 删除某个孩子。`element`是子元素 dom 对象
- `.innerHTML = ''`: 一次性清除所有子元素

克隆元素

- `.clone(deep?)`: 克隆元素。`deep`如果为 false 或者不填，则只会克隆当前元素，其子元素不会被克隆；如果为 true，自己以及子元素都会被克隆。

取值和设置

- `.innerText`: 会获取到该元素内部的所有文字，包含子元素文字；设置的时候会覆盖掉之前的所有内容，如果设置的文本内容包含 html 标签，则不会被解析。
- `.innerHTML`: 会获取该元素内部所有内容，包含文本内容和 html 标签元素；设置文本的时候，如果包含 html 标签，则会被解析。
- `.value`: 获取或设置 input 标签的值

属性

- `.setAttribute(prop, value)`: 设置元素的属性，包含原始属性、自定义属性和`data-`属性
- `.getAttribute(prop)`: 获取元素的属性

尺寸

- `screen.width/height`: 屏幕宽度/高度
- `screen.availWidth/availHeight`: 屏幕可用高度/宽度 **_（软件最大化时的宽高）_**
- `window.outerWidth/outerHeight`: 浏览器的宽高
- `window.innerWidth/innerHeight`: 浏览器页面的宽高
- `.clientWidth/clientHeight`: 当前元素的`content+padding`大小
- `.clientTop/clientLeft`: 当前元素的`border`大小
- `.offsetParent`: 当前元素的父级元素`position!=static`的元素
- `.offsetWidth/offsetHeight`: 当前元素`content+padding+border`的大小。 **_（用的最多）_**
- `.offsetTop/offsetLeft`: 当前元素距离`offsetParent`的 top、left 距离。**_（border 距离 border 的距离）_**
- `.scrollWidth/scrollHeight`: 滑动内容的宽高
- `.scrollTop/scrollLeft`: 内容已经滑动了 top、left 距离
