// function nextLargest(num) {
//   let result = [];
//   let a = [...num, ...num];

//   console.log("a is", a);
//   for (let i of num) {
//     let nextMax = -1;
//     for (let j of a) {
//       if (i < j) {
//         console.log(" j is", i, j);
//         nextMax = j;
//         break;
//       }
//     }
//     result.push(nextMax);
//     console.log("result is", result, nextMax);
//   }

//   console.log("result is", result);
//   return result;
// }

// let a = [9, 4, 3, 6, 7];
// let result = nextLargest(a);
// console.log("result is ", result);

// // // console.log(greaterElements([1, 2, 1]));
// // console.log(greaterElements([1,2,3,4,3])) // [2,3,4,-1,4]

// // console.log(greaterElements([9,4,3,6,7])) // [-1,6,6,7,9]

// l

// let a = 1;
// new Promise((res, rej) => {
//   console.log("A IS", a);
//   res(a + 1);
// }).then((a) => {
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("a is", a);
//       res(a + 1);
//     }, 5000);
//   }).then((a) => {
//     console.log("a is**", a);
//   });
// });

/**no precedence what ever is linked will be executed */
new Promise((res, rej) => {
  setTimeout(() => {
    console.log("heyaa wooh~~");
    // res("huuhaaah");
    rej("hey");
  }, 4000);
})
  .finally(() => {
    console.log("EXECUTING FINALLY!!!!!!!!!!");
  })
  .then(() => {
    console.log("executing then");
  })
  .catch((error) => {
    console.log("error is", error);
  });
