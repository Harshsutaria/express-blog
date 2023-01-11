// calling a function using call

// 1 call
//  vanila approach
let a = {
  name: "charsh",
  age: 22,
  surname: "Sutaria",
};

let b = {
  name: "cheemss",
  age: 22,
  surname: "doge",
};

function printT(a, b, c, d) {
  console.log("this is ", this, a, b, c, d);
  console.log(`${this.name} ${this.surname} is ${this.age} years old`);
}

printT(a); //=>'vanila approact to call a method '
// printT(b);
/**
 * call method is used to invoke a function by passing the reference which is this inside the method
 */
//printT.call(a); //=>passing the instance of the call method so that we can point the same
//printT.call(b);

// 2. apply
//=> same as call but is used first argumrnt is passed in as reference and second argument is passed in array
//printT.apply(a, ["hahhahahahahah", "madrid", "spain", "southamerica"]);

/**
 * different between call and apply is that
 * in call the arguments are passed in comma sepereated way'
 * in apply the secong argument is array of string to be apassed
 */

// 3. bind

// bind method is used to copy a function from one method to another
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = person.fullName.bind(member);

// console.log("fullName is ", fullName());
