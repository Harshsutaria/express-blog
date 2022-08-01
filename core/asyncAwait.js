/**Async/Await is used to work with promises in asynchronous functions.
 * It is basically syntactic sugar for promises. It is just a wrapper to
 * restyle code and make promises easier to read and use.
 *  It makes asynchronous code look more like synchronous/procedural code, which is easier to understand
 *
 * await can only be used in async functions. It is used for
 * calling an async function and waits for it to resolve or reject.
 * await blocks the execution of the code within the async function in which it is located. .
 *
 *
 *
 * PS async -await provides sequence execution of the code eg p1>p2->p3
 *
 * but in-case of promise sequence will be whichever promise resolved first will be executed
 * flow is ananomous not sequential
 *
 * PS: please run main and mainPromise function to find the differrence
 */

function p1() {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      console.log("trying yo resolve p1");
      rs("p1 resolved");
    }, 3000);
  });
}

function p2() {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      console.log("trying yo resolve p2");
      rs("p2 resolved");
    }, 1000);
  });
}

function p3() {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      console.log("trying yo resolve p3");
      rs("p3 resolved");
    }, 3000);
  });
}

async function main() {
  console.log("inside main function ");
  let a1 = await p1();
  console.log("a1 is ", a1);
  let a2 = await p2();
  console.log("a2 is ", a2);
  let a3 = await p3();
  console.log("a3 is ", a3);
}

/**
 * here in case of expecting the promise the execution is violent i.e
 *
 * p2->p1->p3
 */
function mainPromise() {
  console.log("inside main promise  function ");
  let a1 = p1().then((a1) => {
    console.log("a1 is ", a1);
  });
  let a2 = p2().then((a2) => {
    console.log("a2 is ", a2);
  });
  let a3 = p3().then((a3) => {
    console.log("a3 is ", a3);
  });
}
//main();
//mainPromise();
