// classic example of closure
/*
// example 1
function x() {
  let b = 10;
  function y() {
    console.log("b is ", b);
  }
  y();
}
x();
*/

//example 2
function x() {
  let z = 100;
  function y() {
    console.log("z is ", z);
  }
  z = 10000;
  return y;
}

let p = x()();
//ps op is 1000 as when the function was called the value of the variable was updated to 1000
