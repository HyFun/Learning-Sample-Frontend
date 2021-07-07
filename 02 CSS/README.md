<!--
 * @Author       : HyFun
 * @Date         : 2021-07-07 17:26:19
 * @Description  : css 笔记
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-07 23:37:26
-->

# CSS

## 1. css 特性

- 层叠性
- 继承性
- 优先级

## 2. css 优先级

`!important` > `内联样式` > `ID选择器(#id)` > `类选择器(.class)` =
`伪类选择器(:hover等)` = `属性选择器[type等]` > `元素选择器(p等)` =
`伪元素选择器(:after/:before/::selection等)` > `通用选择器(*)` > `继承的样式`

## 3. 文字换行、文字溢出

单行

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

多行

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

## 4. 盒子模型

### 标准盒模型 + IE 盒模型

![](https://segmentfault.com/img/bVbb5zA?w=746&h=455)
标准 W3C 盒子模型的范围包括: margin、border、padding、content，并且 content 部分不包含其他部分。

![](https://segmentfault.com/img/bVbb5zB?w=791&h=462)
IE 盒子模型的范围也包括 margin、border、padding、content，和标准 W3C 盒子模型不同的是：IE 盒子模型的 content 部分包含了 border 和 pading。

### 通过 CSS 设置盒模型模式

```css
box-sizing: content-box; // 标准盒模型
box-sizing: border-box; // IE盒模型
```

### 获取盒子模型的宽高

```js
dom.style.width / height
dom.currentStyle.width / height // (ie支持)
window.getComputedStyle(dom).width / height
dom.getBoundingClientRect().width / height
```

## 5. 清除浮动

- 固定宽高
- overflow: hidden
- 隔墙法。在最后使用`.clearfix`
- 伪元素法
- 双伪元素

## 6. 解决`<img/>`1px 留白

- 父级和`img`宽高写一样
- display：block
- float
- vertical-align：middle
- 父级：font-size：0
- 父级：line-height：0

## 7. css: background

- background-image
- background-color
- background-size
- background-position
- background-repeat
- background-origin
- background-clip

## 8. css: position

- static
- absolute
- relative
- fixed

## 9. css: cursor

- <span style="cursor: auto;">auto 输入框 focus 样式 </span>
- <span style="cursor: pointer;">pointer 小手</span>
- <span style="cursor: progress;">progress 等待 loading</span>
- <span style="cursor: not-allowed;">not-allowed 不允许</span>
- <span style="cursor: default;">default 默认样式</span>
- <span style="cursor: help;">help 帮助</span>

## 10. css3: border-radius

![](./../00_Resource/assets/css/border.png)

<a href="../02 CSS/003 CSS进阶/002 通过css绘制各种形状.html">相关 css 代码</a>

## 11. css3: box-shadow

参数：`水平偏移 垂直偏移 阴影模糊度? 阴影大小 阴影颜色 内/外阴影？`

内外阴影取值：inset/outset

## 12. css3: transition

参数：属性|all 时间 timing-func

## 13. css3: 透视和 3D 准换

```css
// 最外层盒子
perspective: 300px;

// 父盒子设置为3D模式
transform-style: preserve-3d;

// 真正的盒子进行3d转换
transform: translateZ(-150px) rotateY(180deg);
```

## 14. css3: animation

### 创建动画

- 方式一：`from`、`to`

  ```css
  @keyframes rotate {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
  ```

- 方式二：百分比
  ```css
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  ```

### css 参数：`name duration timing-function delay count direction fill-mode play-state`

- name：动画名称
- duration：动画时长，如：0.2s、200ms
- timing-function：动画的方式，`linear(匀速)`,`ease`,`ease-in`,`ease-out`等
- delay：延迟时间
- count：动画执行次数 `number|infinite`
- direction：动画方向
  - normal 每个循环内动画向前循环，换言之，每个动画循环结束，动画重置到起点重新开始，这是默认属性。
  - alternate 动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向，比如，ease-in 在反向时成为 ease-out。计数取决于开始时是奇数迭代还是偶数迭代
  - reverse 反向运行动画，每周期结束动画由尾到头运行。
  - alternate-reverse 动画第一次运行时是反向的，然后下一次是正向，后面依次循环。决定奇数次或偶数次的计数从 1 开始。
- fill-mode 设置 CSS 动画在执行之前和之后如何将样式应用于其目标。
  - none 当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的 CSS 规则来显示该元素。这是默认值。
  - forwards 目标将保留由执行期间遇到的最后一个关键帧计算值
  - backwards 动画将在应用于目标时立即应用第一个关键帧中定义的值，并在 animation-delay 期间保留此值。
  - both 动画将遵循 forwards 和 backwards 的规则，从而在两个方向上扩展动画属性。
- play-state：动画的执行状态
  - running 当前动画正在运行。
  - paused 当前动画已被停止。

## 15. css3: 媒体查询

```css
@media screen and (max-width: 300px) {
  // 表示 屏幕 <= 300px 的时候
}

@media screen and (mim-width: 300px) {
  // 表示 屏幕 >= 300px 的时候
}
```

## 16. css3: flex 布局

### 1. display: flex;

- 开启 flex 布局模式
- 子元素都横向排列 `flex-direciton: row;`
- 宽度超出则会压缩 `flex-wrap: no-wrap;`

### 2. flex-direction

该属性设置 flex 布局的`主轴`

- `row`: 子元素会横向排列
- `colomn`: 子元素纵向排列
- `row-reverse`: `row`的反向，从右到左排列
- `colomn-reverse`: `colomn`的反向，从下到上排列

### 3. flex-wrap

该属性设置子元素宽度超出后是否换行

- `no-wrap`: 不换行，默认值
- `wrap`: 换行
- `wrap-reserve`: 交叉轴位置交换，换行

### 4. flex-flow

`flex-direction flex-wrap`简写

### 5. justify-content

主轴子元素内容排列方式

以`flex-direction: row`为例

- `flex-start`: 开始
- `flex-end`: 结束位置
- `center`: 子元素居中
- `space-around`: item 被均匀分配
- `space-between`: 左右各占一个，中间位置其他 item 平分

### 6. justify-items

主轴子元素 item 排列方式

以`flex-direction: row`为例

- `flex-start`
- `flex-end`
- `start`
- `end`

### 7. align-content

交叉轴子元素内容排列方式

以`flex-direction: row`为例

- `flex-start`: left-top 排列
- `flex-end`: left-bottom 排列
- `center`: left-center 排列 整个内容居中
- `space-between`: top 平均 bottom 排列
- `space-around`: 平均分配排列

### 8. align-items

交叉轴子元素 item 排列方式

以`flex-direction: row`为例

- `flex-start`: left-top
- `flex-end`: left-bottom
- `start`: left-top
- `end`: left-bottom
- `center`: 每个子元素都会居中

### 9. order

- 规定 item 在 flex 布局中的排列顺序。参数越大，排列约后
- 参数： number

### 10. flex-grow

- 占用剩余空间
- 值：0 为默认值

大小计算方式：

- 剩余空间 > size: size = 剩余空间
- 剩余空间 < size:


### 11. flex-shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。


### 12. flex-basis
指定了 flex 元素在主轴方向上的初始大小。如果不使用  box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。

### 13. flex

`flex-grow flex-shrink flex-basis`简写
