const { add, mul: Multiply } = require("./differentExports");

console.log("add is", add, Multiply);

add(1, 2);
Multiply(3, 4);
