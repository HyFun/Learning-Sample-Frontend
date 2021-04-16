<!--
 * @Author       : HyFun
 * @Date         : 2021-01-22 17:15:22
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-16 18:04:36
-->
# HTML
## 简介
HTML称为超文本标记语言，是一种标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，图形、动画、声音、表格、链接等。 

超文本是一种组织信息的方式，它通过超级链接方法将文本中的文字、图表与其他信息媒体相关联。这些相互关联的信息媒体可能在同一文本中，也可能是其他文件，或是地理位置相距遥远的某台计算机上的文件。这种组织信息方式将分布在不同位置的信息资源用随机方式进行连接，为人们查找，检索信息提供方便。

<p style="text-align:right;"><a href="https://baike.baidu.com/item/HTML/97049?fr=aladdin">————来自百度百科</a></p>

## HTML版本
- HTML 1.0：在1993年6月作为互联网工程工作小组(IETF)工作草案发布。 
- HTML 2.0：1995年1 1月作为RFC 1866发布，于2000年6月发布之后被宣布已经过时。 
- HTML 3.2：1997年1月14日，W3C推荐标准。
- HTML 4.0：1997年12月18日，W3C推荐标准。 
- HTML 4.01（微小改进）：1999年12月24日，W3C推荐标准。 
- HTML 5：HTML5是公认的下一代Web语言，极大地提升了Web在富媒体、富内容和富应用等方面的能力，被喻为终将改变移动互联网的重要推手

## 声明

### HTML 5
```
<!DOCTYPE html>
```
### HTML 4.01 Strict
该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```
### HTML 4.01 Transitional
该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```
### HTML 4.01 Frameset
该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```
### XHTML 1.0 Strict
该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
### XHTML 1.0 Transitional
该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

### XHTML 1.0 Frameset
该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```
### XHTML 1.1
该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）。
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```


## 标签分类(常用)

- 块级元素(block)
    - div
    - ul
    - ol
    - dl
    - li
    - dt
    - dd
    - h1~h6
    - p
    - form
- 行内元素(inline)
    - a
    - span
    - image
    - input
    - select
    - i
    - em
    - b
    - strong
    - del
    - strike
    - ins
    - u




# HTML5

## HTML5新特性
新特性一览
- 语义化标签`header、section、article、nav、aside、footer`
- audio、video媒体标签
- 增强的form-input类型`email、color、data、datatime、month、number、search、tel、time、url、week`等
- WebStorage：localStorage、sessionStorage
- canvas绘图
- 地理定位
- 拖拽API
- WebSocket

## cookie、sessionStorage、localStorage区别

相同点
- 都是用于存储数据的
- 都遵循浏览器同源策略

不同点
- 作用不同。
    - cookie中的数据会在同源的http请求中携带，在客户端和服务端之间进行来回传递；
    - sessionStorage和localStorage只会存储在客户端本地。
- 存储大小不同。
    - cookie的数据存储大小不能超过4k；
    - sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

- 有效时间
    - `sessionStorage` 数据在当前浏览器tab关闭后会被删除
    - `localStorage` 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
    - cookie的过期时间会根据服务器返回的`exprise`和`max-age`来管理的，无论设置cookie存活多久，只要浏览器窗口关闭，cookie就会被移除。
    

## 设置cookie的过期时间

cookie的过期时间通过expires来设置的，

### 以`js-cookie`为例
```js
import Cookies from 'js-cookie'
// 设置cookie
Cookies.set('name','孙悟空',{ expires: 1 }) // 表示存储过期时间为1天
Cookies.set('name','孙悟空',{ expires: new Date(new Date().getTime() + 1000) }) // 表示存储时间为1s
```
针对js-cookie库的cookie过期时间设置expires的值有两种

- Number: 表示设置存储时间时长为x天
- Date: Date对象，一个过期的时间点

## 以原生document.cookie为例
```js
// 设置一个2025年5月1日过期的cookie
document.cookie = `name=孙悟空,expires=${new Date('2025/05/01').toGMTString()}`
```
原生设置cookie过期时间
- GMT: `new Date().toGMTString()`