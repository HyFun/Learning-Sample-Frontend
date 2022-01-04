import add from "./calculate";

// @log
class Person {
  name = "zhangsan";
  age = 18;
}

function log(target) {
  console.log(target);
}

console.log(add(1, 2, 3, 4, 5));

console.log("includes array", [1, 2, 3].includes(1));
console.log("includes string", "hello".includes("he"));
