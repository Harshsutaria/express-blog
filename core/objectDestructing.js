// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// base object destructing
// let { name, categories } = restaurant;
// console.log("name , categories", name, categories);

// aliazing like name1

let { name: name1, categories } = restaurant;
console.log("name , categories", name1, categories);

//rest parameters

function sum(...args) {
  console.log("inisde sum method with args", ...args);
  for (let i of args) {
    console.log("i us ", i, typeof i);
  }
}

let arr = [5, 10, 15, 12];

sum(...arr);

/**
 * ... is the syntax used to define rest and spread operator
 * ps:- ... is in hte right of the assignment operator then we would call it as spread operator
 * thats all rest and spread operators is all about

 */

let a = [1, 2, ...[3, 4]];
console.log(a);
let [p, q, ...r] = [...a];
console.log(p, q, r);
