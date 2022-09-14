function constructorFunction(name, surname) {
  this.name = name;
  this.surname = surname;
}

let a = new constructorFunction("cheems", "doge");
let b = new constructorFunction("krishna", "ronaldo");

//creating seperate of a
a.fullName = function () {
  console.log("mai fullname hu", this.name, this.surname);
};

a.fullName();
// b.fullName();

//creating the method which can  be used to b prototype inheritance
b.__proto__.main = function main() {
  console.log("main is main");
};

a.main();
b.main();
