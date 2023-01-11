// /**https://medium.com/swlh/what-is-this-keyword-in-javascript-and-how-it-behaves-4929689bd114 */
// let employee = {
//   name: "harsh",
//   surname: "sutaria",
//   age() {
//     console.log(`${this.name}`);
//   },
// };

// //destructing assignment
// let { name, surname, age } = employee;

// name = "cheems";
// console.log("hahhaa is ", name, surname, age, employee.name);

// /** */
// let newEmployee = {
//   name: "harsh",
//   surname: "sutaria",
//   age: () => {
//     console.log(`new this is `, JSON.stringify(this));
//     return this;
//   },
// };

// var name = "cheems";

// let harsh = {
//   name: "harsh",
//   newEmployee: {
//     name: "harsh",
//     surname: "sutaria",
//     age: () => {
//       console.log(`new this is `, JSON.stringify(this.name));
//       return this;
//     },
//   },
// };

// console.log("name is ", harsh.newEmployee.age());

// var name = "hurray";

// let a = {
//   name: "harsh",
//   surname: "sutaria",
//   b: {
//     // name: "mango",
//     G: function () {
//       console.log("this inside normal functionis", this);
//       // greet: () => {
//       //   console.log("this os ", this);
//       //   console.log("greet is ", this.name);
//       // };
//     },
//   },
// };

// function gretting(obj){
//   obj.greet= function () {
//   console.log("hahah is ",this.name , this.surname)
//   }
// }
// gretting(a)
// a.b.G();

// let Person = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.greeting = function (greet) {
//     console.log("THIS NAME IS ", greet, this.lastName, this.firstName);
//   };

//   this.greet = (greet) => {
//     console.log("GREET IS", greet, this.firstName);
//   };
// };

// let john = new Person("John", "Cena");

// john.greeting();
// john.greet();

// john.greeting("hurray").call("hahah");

/**
 * call apply bind implementation
 * @param {string} firstName
 */
const Person = function (firstName) {
  this.firstName = firstName;
  this.sayName1 = function () {
    console.log(this.firstName);
  };
  this.sayName2 = () => {
    console.log(this.firstName);
  };
};

const john = new Person("John");
const dave = new Person("Dave");
const mike = new Person("Mike");

john.sayName1(); // John
john.sayName2(); // John

// // The regular function can have its 'this' value changed, but the arrow function cannot
// john.sayName1.call(dave); // Dave (because "this" is now the dave object)
// john.sayName2.call(dave); // John

// john.sayName1.apply(dave); // Dave (because 'this' is now the dave object)
// john.sayName2.apply(dave); // John

// john.sayName1.bind(dave)(); // Dave (because 'this' is now the dave object)
// john.sayName2.bind(dave)(); // John

// var sayNameFromWindow1 = john.sayName1;
// sayNameFromWindow1(); // undefined (because 'this' is now the window object)

// var sayNameFromWindow2 = john.sayName2;
// sayNameFromWindow2(); // John

john.sayName1.call(dave);
john.sayName2.call(dave);
john.sayName2.call(mike);
