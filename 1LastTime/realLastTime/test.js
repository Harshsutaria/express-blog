/**
 * Using Arrow function
 */
let person = {
  name: "Diksha",
  actions: ["bike", "hike", "ski"],
  printActions() {
    console.log("this is", this);
    this.actions.forEach((action) => {
      console.log("this inside is ", this);
      let str = this.name + " likes to " + action;
      console.log(str);
    });
    this.actions = this.actions.map((x) => this.name);
    console.log("thi.actions", this.actions);
  },
};

person.printActions();

const {
  title,
  price,
  description: description2,
} = {
  title: "iPhone",
  price: 999,
  description: "The iPhone is a smartphone developed by Apple",
};

console.log("description", description2);
var foo = function () {
  console.log(typeof foo); // function
};
console.log(typeof foo); // undefined
