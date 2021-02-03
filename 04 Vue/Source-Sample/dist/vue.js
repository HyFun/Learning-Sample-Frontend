(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /*
   * @Author       : HyFun
   * @Date         : 2021-01-29 17:21:19
   * @Description  : 
   * @LastEditors  : HyFun
   * @LastEditTime : 2021-01-29 17:28:23
   */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /*
   * @Author       : HyFun
   * @Date         : 2021-01-29 17:48:52
   * @Description  :
   * @LastEditors  : HyFun
   * @LastEditTime : 2021-02-01 17:54:44
   */
  var depId = 0;

  var Dep = /*#__PURE__*/function () {
    function Dep() {
      _classCallCheck(this, Dep);

      this.id = depId++;
      this.watchers = [];
    }

    _createClass(Dep, [{
      key: "removeWatcher",
      value: function removeWatcher(watcher) {
        for (var i = this.watchers.length - 1; i >= 0; i--) {
          if (watcher === this.watchers[i]) {
            this.watchers.splice(i, 1);
          }
        }
      }
    }, {
      key: "depend",
      value: function depend() {
        if (Dep.target) {
          this.watchers.push(Dep.target);
          Dep.target.addDep(this);
        }
      }
    }, {
      key: "notify",
      value: function notify() {
        this.watchers.forEach(function (watcher) {
          watcher.update();
        });
      }
    }]);

    return Dep;
  }();

  var originArrayProto = Array.prototype;
  var transformArray = Object.create(originArrayProto);
  var ARRAY_INTERCEPTOR_METHODS = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
  ARRAY_INTERCEPTOR_METHODS.forEach(function (method) {
    var origin = originArrayProto[method];
    def(transformArray, method, function mutator() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var result = origin.apply(this, args); // 对更新进来的数据进行拦截

      var inserted;

      switch (method) {
        case "push":
        case "unshift":
          inserted = args;
          break;

        case "splice":
          inserted = args.slice(2);
          break;
      }

      observe(inserted);
      return result;
    });
  }); // -----------------数据拦截--------------

  function defineReactive(obj, key, val, enumerable) {
    var dep = new Dep();
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: !!enumerable,
      get: function get() {
        dep.depend();
        return val;
      },
      set: function set(newVal) {
        if (newVal != val) {
          observe(newVal);
          val = newVal;
          dep.notify();
        }
      }
    });
  }
  /**
   *
   * @param {*} value
   */


  function observe(obj) {
    // 之前没有对 obj 本身进行操作, 这一次就直接对 obj 进行判断
    if (Array.isArray(obj)) {
      // 对其每一个元素处理
      obj.__proto__ = transformArray;

      for (var i = 0; i < obj.length; i++) {
        observe(obj[i]); // 递归处理每一个数组元素
        // 如果想要这么处理, 就在这里继续调用 defineRective
        // defineReactive.call( vm, obj, i, obj[ i ], true );
      }
    } else {
      // 对其成员进行处理
      var keys = Object.keys(obj);

      for (var _i = 0; _i < keys.length; _i++) {
        var prop = keys[_i]; // 属性名

        defineReactive(obj, prop, obj[prop], true); // 如果是个对象，则继续递归
        // 函数内部就是一个局部作用域, 这个 value 就只在函数内使用的变量 ( 闭包 )

        if (_typeof(obj[prop]) === "object" && obj[prop] != null) {
          // 是非数组的引用类型
          observe(obj[prop]); // 递归
        }
      }
    }
  }

  /*
   * @Author       : HyFun
   * @Date         : 2021-02-01 13:52:11
   * @Description  :
   * @LastEditors  : HyFun
   * @LastEditTime : 2021-02-01 15:19:07
   */
  var VNode = /*#__PURE__*/function () {
    function VNode(tag, data, value, type) {
      _classCallCheck(this, VNode);

      this.tag = tag;
      this.data = data;
      this.value = value;
      this.type = type;
      this.children = [];
    }

    _createClass(VNode, [{
      key: "appendChild",
      value: function appendChild(vnode) {
        this.children.push(vnode);
      }
    }]);

    return VNode;
  }();

  /*
   * @Author       : HyFun
   * @Date         : 2021-02-01 14:05:01
   * @Description  :
   * @LastEditors  : HyFun
   * @LastEditTime : 2021-02-01 15:24:34
   */
  var REG_EXPR = /\{\{([^}]+)\}\}/g;
  function getVNode(node) {
    var nodeType = node.nodeType;
    var vnode = null;

    if (nodeType === 1) {
      // 说明是元素节点
      var nodeName = node.nodeName;
      var attrs = node.attributes;
      var attrObj = Array.from(attrs).reduce(function (res, attr) {
        res[attr.name] = attr.value;
        return res;
      }, {});
      vnode = new VNode(nodeName, attrObj, undefined, nodeType);
      var childNodes = node.childNodes;

      for (var i = 0; i < childNodes.length; i++) {
        vnode.appendChild(getVNode(childNodes[i]));
      }
    } else if (nodeType === 3) {
      // 说明是文字节点
      vnode = new VNode(undefined, undefined, node.nodeValue, nodeType);
    }

    return vnode;
  }
  function combine(vnode, data) {
    var _type = vnode.type;
    var _data = vnode.data;
    var _value = vnode.value;
    var _tag = vnode.tag;
    var _children = vnode.children;
    var _vnode = null;

    if (_type === 3) {
      // 文本节点
      // 对文本处理
      _value = getTextValue(_value, data);
      _vnode = new VNode(_tag, _data, _value, _type);
    } else if (_type === 1) {
      // 元素节点
      _vnode = new VNode(_tag, _data, _value, _type);

      _children.forEach(function (_subvnode) {
        return _vnode.appendChild(combine(_subvnode, data));
      });
    }

    return _vnode;
  }
  function parseVNode(vnode) {
    // 创建 真实的 DOM
    var type = vnode.type;
    var _node = null;

    if (type === 3) {
      return document.createTextNode(vnode.value); // 创建文本节点
    } else if (type === 1) {
      _node = document.createElement(vnode.tag); // 属性

      var data = vnode.data; // 现在这个 data 是键值对

      Object.keys(data).forEach(function (key) {
        var attrName = key;
        var attrValue = data[key];

        _node.setAttribute(attrName, attrValue);
      }); // 子元素

      var children = vnode.children;
      children.forEach(function (subvnode) {
        _node.appendChild(parseVNode(subvnode)); // 递归转换子元素 ( 虚拟 DOM )

      });
      return _node;
    }
  }

  function getValue(expr, data) {
    var exprs = expr.split(".");
    return exprs.reduce(function (res, item) {
      return res[item];
    }, data);
  }

  function getTextValue(expr, data) {
    if (!expr) {
      return "";
    }

    return expr.replace(REG_EXPR, function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return getValue(args[1].trim(), data);
    });
  }

  var watcherId = 0;

  var Watcher = /*#__PURE__*/function () {
    function Watcher(vm, exprOrFn) {
      _classCallCheck(this, Watcher);

      this.id = watcherId++;
      this.vm = vm;
      this.getter = exprOrFn;
      this.deps = [];
      this.depIds = {};
      this.get();
    }

    _createClass(Watcher, [{
      key: "get",
      value: function get() {
        Dep.target = this;
        this.getter.call(this.vm);
        Dep.target = null;
      }
    }, {
      key: "run",
      value: function run() {
        this.get();
      }
    }, {
      key: "update",
      value: function update() {
        this.run();
      }
    }, {
      key: "addDep",
      value: function addDep(dep) {
        this.deps.push(dep);
      }
    }]);

    return Watcher;
  }();

  var Vue = /*#__PURE__*/function () {
    function Vue(options) {
      var _this = this;

      _classCallCheck(this, Vue);

      this._el = options.el.nodeType === 1 ? options.el : document.querySelector(options.el);
      this._elParent = this._el.parentNode;

      if (options.data) {
        this._data = options.data;
        observe(this._data); // 挂在数据到vm实例上

        Object.keys(this._data).forEach(function (key) {
          proxy(_this, "_data", key);
        }); // 

        this.mount();
      }
    }

    _createClass(Vue, [{
      key: "mount",
      value: function mount() {
        // 提供一个render方法
        // dom -> ast -> vnode -> dom
        this.render = this.createRenderFn(); // 渲染视图

        this.mountComponent();
      }
    }, {
      key: "mountComponent",
      value: function mountComponent() {
        var _this2 = this;

        var mount = function mount() {
          _this2.update(_this2.render());
        };

        new Watcher(this, mount);
      }
    }, {
      key: "createRenderFn",
      value: function createRenderFn() {
        // 将真实 dom -> ast 语法树
        var ast = getVNode(this._el);
        return function () {
          // 将 ast 语法树 -> vnode
          var vnode = combine(ast, this._data);
          return vnode;
        };
      }
    }, {
      key: "update",
      value: function update(vnode) {
        // 将虚拟dom转换为 真实 dom
        var element = parseVNode(vnode);

        this._elParent.replaceChild(element, document.querySelector('#app'));
      }
    }]);

    return Vue;
  }();

  function proxy(target, prop, key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: true,
      get: function get() {
        return target[prop][key];
      },
      set: function set(value) {
        target[prop][key] = value;
      }
    });
  }

  /*
   * @Author       : HyFun
   * @Date         : 2021-01-27 13:59:00
   * @Description  : 
   * @LastEditors  : HyFun
   * @LastEditTime : 2021-01-27 14:40:34
   */

  return Vue;

})));
