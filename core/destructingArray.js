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

//basic destructing
let a = [2, 3, 4];
let [x, y, z] = [...a];
console.log(x, y, z);

// getting first and third element from an array
// PS simply represent by a,,b
let [w, , , e] = [...restaurant.starterMenu];
console.log(w, e);

//swapping
[w, e] = [e, w];
console.log(w, e);

/***destructing 3.0 is */

let p = [1, 2, [5, 6]];
// @ts-ignore
let [q, , [r, s]] = [...p];
console.log(q, r, s);
