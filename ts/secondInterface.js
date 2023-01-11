"use strict";
exports.__esModule = true;
/**generics */
function arrayConcat(a, b) {
    return a.concat(b);
}
var d = arrayConcat([1, 2, 3], [4, 5, 6]);
console.log("d is ", d);
d.push(7); //=> "working fine"
// d.push('8') => throwing compilation error as the array is numbers only
var f = arrayConcat([], ["h", "a"]);
console.log("f is ", f);
f.push("z"); //=> "working fine"
// f.push(8) => throwing compilation error as the array is numbers only
