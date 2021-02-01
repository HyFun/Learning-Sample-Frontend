/*
 * @Author       : HyFun
 * @Date         : 2021-02-01 13:52:11
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-02-01 15:19:07
 */
class VNode {
  constructor(tag, data, value, type) {
    this.tag = tag;
    this.data = data;
    this.value = value;
    this.type = type;
    this.children = [];
  }

  appendChild(vnode) {
    this.children.push(vnode);
  }
}

export default VNode;
