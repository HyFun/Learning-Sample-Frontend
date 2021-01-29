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
    // 函数内部就是一个局部作用域, 这个 value 就只在函数内使用的变量 ( 闭包 )
    if (_typeof(val) === "object" && val != null) {
      // 是非数组的引用类型
      observe(val); // 递归
    }

    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: !!enumerable,
      get: function get() {
        return val;
      },
      set: function set(newVal) {
        val = newVal;
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

        defineReactive(obj, prop, obj[prop], true);
      }
    }
  }

  var Vue = function Vue(options) {
    var _this = this;

    _classCallCheck(this, Vue);

    this._el = options.el.nodeType === 1 ? options.el : document.querySelector(options.el);

    if (options.data) {
      this._data = options.data;
      observe(this._data); // 挂在数据到vm实例上

      Object.keys(this._data).forEach(function (key) {
        proxy(_this, "_data", key);
      });
    }
  };

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
