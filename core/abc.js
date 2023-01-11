/**
 * Write a function in javascript which returns the max length string from given list of string Input [bangalore, pune, goa] Output: bangalore. Dont use any inbuilt function.

 */

let a = ["bangalore", "pune", "goa"];
function maxLength(a) {
  let maxLength = 0;
  for (let i of a) {
    maxLength = maxLength > i.length ? maxLength : i.length;
  }
  return maxLength;
}

let result = maxLength(a);
console.log("result is ", result);
