const person = {
  firstName: "cheems",
  lastName: "Sutaria",

  fullName: function () {
    console.log(`${this.name} ${this.firstName}`);
  },
};

const person2 = {
  name: "chadarmod",
};

//prototypical inheritance as person2 is able to use propetyy of person object
/**
 *
 */
person2.__proto__ = person;

console.log(person2.fullName());
