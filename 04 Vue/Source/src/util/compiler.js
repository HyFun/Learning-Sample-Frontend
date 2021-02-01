/*
 * @Author       : HyFun
 * @Date         : 2021-02-01 14:05:01
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-02-01 15:24:34
 */
const REG_EXPR = /\{\{([^}]+)\}\}/g;

import VNode from "../vnode";

export function getVNode(node) {
  const nodeType = node.nodeType;
  let vnode = null;
  if (nodeType === 1) {
    // 说明是元素节点
    const nodeName = node.nodeName;
    const attrs = node.attributes;
    const attrObj = Array.from(attrs).reduce((res, attr) => {
      res[attr.name] = attr.value;
      return res;
    }, {});
    vnode = new VNode(nodeName, attrObj, undefined, nodeType);

    let childNodes = node.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      vnode.appendChild(getVNode(childNodes[i]));
    }
  } else if (nodeType === 3) {
    // 说明是文字节点
    vnode = new VNode(undefined, undefined, node.nodeValue, nodeType);
  }
  return vnode;
}

export function combine(vnode, data) {
  let _type = vnode.type;
  let _data = vnode.data;
  let _value = vnode.value;
  let _tag = vnode.tag;
  let _children = vnode.children;

  let _vnode = null;

  if (_type === 3) {
    // 文本节点

    // 对文本处理
    _value = getTextValue(_value, data);

    _vnode = new VNode(_tag, _data, _value, _type);
  } else if (_type === 1) {
    // 元素节点
    _vnode = new VNode(_tag, _data, _value, _type);
    _children.forEach((_subvnode) =>
      _vnode.appendChild(combine(_subvnode, data))
    );
  }

  return _vnode;
}

export function parseVNode(vnode) {
  // 创建 真实的 DOM
  let type = vnode.type;
  let _node = null;
  if (type === 3) {
    return document.createTextNode(vnode.value); // 创建文本节点
  } else if (type === 1) {
    _node = document.createElement(vnode.tag);

    // 属性
    let data = vnode.data; // 现在这个 data 是键值对
    Object.keys(data).forEach((key) => {
      let attrName = key;
      let attrValue = data[key];
      _node.setAttribute(attrName, attrValue);
    });

    // 子元素
    let children = vnode.children;
    children.forEach((subvnode) => {
      _node.appendChild(parseVNode(subvnode)); // 递归转换子元素 ( 虚拟 DOM )
    });

    return _node;
  }
}

function getValue(expr, data) {
  const exprs = expr.split(".");
  return exprs.reduce((res, item) => {
    return res[item];
  }, data);
}

function getTextValue(expr, data) {
  if (!expr) {
    return "";
  }
  return expr.replace(REG_EXPR, (...args) => {
    return getValue(args[1].trim(), data);
  });
}
