import sum from "@test/sum";
import decrease from "@test/decrease";
import multiplication from "@test/multiplication";
import division from "@test/division";

console.log("sum", sum(1, 2, 3, +"4"));

console.log("decrease", decrease(10, 1, 2, +"3"));

console.log("multiplication", multiplication(1, 2, 3, +"4"));

console.log("division", division(1000, 2));
