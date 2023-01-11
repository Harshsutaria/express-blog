// "Function foo is a costly function, which costs
// you Re. 1 /- to call each time Develop a utility
// that can be wrapped around this to optimize
// cost such that the following order of actions
// can be completed at the least cost.
// Example:

//hashmap to store i/p variable a d relative sum
const cacheDict = {};

/**method to calculate sum  */
function foo(a, b, c) {
  return a + b + c;
}

/**to be implemented */
function memo(fnc) {
  return function (a, b, c) {
    let z = `${a}${b}${c}`;
    if (cacheDict[z]) {
      console.log("returning from cache");
      return cacheDict[z];
    }
    let sum = fnc(a, b, c);
    cacheDict[`${a}${b}${c}`] = sum;
    return sum;
  };
}

// function main(){}

const m1 = memo(foo);
console.log(m1(1, 2, 3)); // 6 from fresh
console.log(m1(1, 2, 3)); // 6 from cache
console.log(m1(2, 3, 4)); // 9 from fresh
console.log(m1(2, 3, 4)); // 9 from cache
console.log("cache us", cacheDict);
