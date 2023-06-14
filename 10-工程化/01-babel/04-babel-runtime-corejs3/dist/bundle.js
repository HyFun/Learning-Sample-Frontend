var add = function add() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  return sum;
};

export default add;
import _createClass from "@babel/runtime-corejs3/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime-corejs3/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime-corejs3/helpers/esm/defineProperty";

var _context;

import _Promise from "@babel/runtime-corejs3/core-js/promise";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
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

_Promise.resolve("text").then(function (res) {
  console.log(res);
}).finally(function () {
  console.log("completed");
});

console.log(_mapInstanceProperty(_context = [1, 2, 3, 4, 5]).call(_context, function (v) {
  return v * 2;
}));
console.log(add(1, 2));
