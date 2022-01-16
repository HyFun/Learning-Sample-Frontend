var add = function add() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  return sum;
};

export default add;
import "core-js/modules/es6.function.name.js";
import "core-js/modules/es7.promise.finally.js";
import "core-js/modules/es6.object.to-string.js";
import "core-js/modules/es6.promise.js";
import "core-js/modules/es6.array.map.js";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import add from "./calculate";

var Person = /*#__PURE__*/_createClass(function Person() {
  var _this = this;

  _classCallCheck(this, Person);

  _defineProperty(this, "name", "zhangsan");

  _defineProperty(this, "age", 20);

  _defineProperty(this, "say", function () {
    console.log(_this.name);
  });
});

var person = new Person();
console.log(person);
Promise.resolve("text").then(function (res) {
  console.log(res);
}).finally(function () {
  console.log("completed");
});
console.log([1, 2, 3, 4, 5].map(function (v) {
  return v * 2;
}));
console.log(add(1, 2));
