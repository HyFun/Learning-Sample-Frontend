<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-21 22:58:20
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-22 13:24:20
-->
<template>
  <p>课时2内容：事件方法、绑定类、绑定样式</p>
  <h3>1. 绑定事件</h3>
  <div>
    <button @click="clickButton">点击事件</button>
    <div @mouseover="onMousehover">hover</div>
  </div>
  <h3>2. 绑定class类（数组方式）</h3>
  <div :class="classList" class="a d">
    绑定class类（数组方式）
    <br />
    原始的class会和:class进行合并
  </div>

  <h3>3. 绑定class类（对象方式）</h3>
  <div :class="{ a: true, b: false }" class="b c">
    对象方式绑定，属性名是class类名，值是一个boolean类型的值，如果是true，则会使用这个类，否则不会使用这个类
    <br />
    原始的class会和:class进行合并
  </div>

  <h3>4. 绑定class类（字符串方式）</h3>
  <div :class="className" class="a d">
    class绑定的是一个字符串，存放的是类的名称
  </div>

  <h3>5. 绑定style （对象方式）</h3>
  <div
    :style="{ width: `200px`, height: `200px`, backgroundColor: 'red' }"
    style="background-color: green"
  >
    对象方式的style，遵循驼峰命名法。 当style设置重复的时候，以后边的样式为准
  </div>

  <h3>6. 绑定style（数组方式）</h3>
  <div :style="[style1, style2]">:style="[style1, style2]"</div>
</template>
<script>
export default {
  data() {
    return {
      className: "a b c",
      classList: ["a", "b", "c"],
      style1: {
        width: "200px",
        height: "100px",
      },
      style2: {
        backgroundColor: "pink",
      },
    };
  },
  methods: {
    clickButton() {
      alert("点击了");
    },
    onMousehover() {
      console.log("鼠标经过了....");
    },
  },
};
</script>
