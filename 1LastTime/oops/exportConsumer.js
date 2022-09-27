const { add, mul: Multiply, sub } = require("./differentExports");

console.log("add is", add, Multiply);

console.log("sub is", sub);

add(1, 2);
Multiply(3, 4);
