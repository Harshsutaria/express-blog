// 1. function declaration or function statement

//c();
function c() {
  console.log("hey i am c");
}

// 2. function expression
//a(); // as the difference between 1 and 2 is hoisting
let a = function () {
  console.log("i am from a variable");
};

// 3. ananmous function

let d = function () {
  console.log("this is ananmonous functions ");
};

// 4. named function expression

let f = function z() {
  console.log("this is name  function expression ");
};
//z();
// if we call z() it will fail as z is not defined

// 5. first class functions
// the ability to use function as value is called as first class functions
/**
 * A programming language is said to have First-class functions when functions in that language 
 * are treated like any other variable.
 *  For example, in such a language, a function can be passed as an argument to other functions,
 *  can be returned by another function and can be assigned as a value to a variable.


 */

// eg1
const foo = function () {
  console.log("hello from first class fucntion");
};

// eg2
function foo2(func1) {
  function subfo2() {
    console.log(" hello from inside ");
  }
  return subfo2;
}

foo2(foo)();
