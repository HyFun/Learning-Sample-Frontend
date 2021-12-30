"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var add = function add() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  return sum;
};

var _default = add;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _calculate = _interopRequireDefault(require("./calculate"));

var Person = /*#__PURE__*/(0, _createClass2.default)(function Person() {
  var _this = this;

  (0, _classCallCheck2.default)(this, Person);
  (0, _defineProperty2.default)(this, "name", "zhangsan");
  (0, _defineProperty2.default)(this, "age", 20);
  (0, _defineProperty2.default)(this, "say", function () {
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
console.log((0, _calculate.default)(1, 2));
