var add = function add() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  return sum;
};

export default add;
import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
