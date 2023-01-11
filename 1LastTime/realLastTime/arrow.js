var age = "22";

/**this in arrow will point to closest non arrow function */
// function name() {
//   this.name = "harris";

//   console.log("this is ", this);

//   let z = () => console.log("name is ", this.name);

//   z();
//   console.log("ending the function");
// }

// name();

// // let d = () => {
// //   console.log("hurray !!!!!!!", this);
// // };
// // d();

// let a = () => {
//   this.name = "harsh";
//   console.log("thius.name", this.name);
// };

// console.log("this os ", this.name);

// a();

// this.name = "chame";
// console.log("this is", this);
// function main() {
//   //   this.name = "piques";
//   console.log("this is ", this);
// }
// main();
// console.log("this is", this);

// var variable = "Global Level Variable";
// let myObject = {
//   variable: "Object Level Variable",
//   arrowFunction: () => {
//     console.log(this.variable);
//   },
//   regularFunction() {
//     console.log(this.variable);
//   },
// };

// myObject.arrowFunction();
// myObject.regularFunction();

var myFunction = function () {
  console.log(this.a);
};

var a = 5;
myFunction();
