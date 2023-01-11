let a = {
  name: "chars",
  surname: "c",
  age: 20,
  calcAge(country, state) {
    console.log("age calc is ", this.age, country, state);
  },
};

let b = {
  name: "mike",
  surname: "speter",
  age: 22,
};

//base calling
function hola(gretting, a) {
  console.log("this.name is", this);
  this.a = a;
  console.log(
    `${gretting} ,${this.a.name.toUpperCase()}  ${this.a.surname.toUpperCase()}`
  );
}

// hola("Hey", a);

/**call is a form of function borrowing to borrow a function from one object to another  */
// a.calcAge.call(b, "india", "maharashtra");

/**apply same as call but the argument list is passed in the form of array */
//a.calcAge.apply(b, ["India", "Maharashtra"]);

/**
 * in apply you can pass an array as an argument list. Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
 */
// a.calcAge.bind(b, "India", "PAk")();
// console.log("b is ", b);

let x = {
  name: "chars",
  surname: "c",
  age: 20,
};

let y = {
  name: "mike",
  surname: "speter",
  age: 22,
};

function calcAge(country, state) {
  console.log("age calc is ", this.age, country, state);
}

let har = calcAge.bind(x, "India", "Maharashtra");
let dog = calcAge.bind(y, "PAk", "tokyo");
har();
dog();
