"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author       : HyFun
 * @Date         : 2021-09-02 20:51:38
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-02 23:38:06
 */
var a = 123;

var b = function b() {
  return a;
};

var Person = /*#__PURE__*/function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "say",
    value: function say() {
      console.log("hello world!");
    }
  }]);

  return Person;
}();

Promise.resolve(1).then(function (res) {
  console.log(res);
})["finally"](function () {
  console.log("promise\u6267\u884C\u5B8C\u6210");
});
var _default = Person;
exports["default"] = _default;