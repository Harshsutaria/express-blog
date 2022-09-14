/**normal function  */
function add(a, b, c) {
  return a + b + c;
}

/**curried function   https://blog.logrocket.com/understanding-javascript-currying/*/
/**Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.

In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.
 */
function addCurry(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

addCurry(10)(20)(30);
