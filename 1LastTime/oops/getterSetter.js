/**
 * implementing getter setter in a person object
 */

const person = {
  firstName: "Harsh",
  lastName: "Sutaria",

  //implementing getter to get the fullname
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  //implementing setter
  set fullName(value) {
    let name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  },
};

// console.log(person.fullName);

// person.fullName = `Cheems Doge`;

// console.log(person.fullName);

class Person {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    let name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

let cheems = new Person("cheems", "doge");

console.log("full anme is ", cheems.fullName);
cheems.fullName = "Aham Bramhasmi";

console.log("full anme is ", cheems);
