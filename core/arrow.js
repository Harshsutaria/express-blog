// var realAge = 30;
// let person = {
//   name: "cheems",
//   surname: "doge",
//   realAge: "12",
//   normalAge: function () {
//     // console.log("this in normal is", this);
//     console.log(`doge is ${this.realAge} years old `);
//   },
//   /**
//    * the difference between normal and arrow fucntion is that the pointer to this keyword pints to global obect in arrowAge
//    * function
//    *
//    * but in cause the this keyword is pointed to the scope
//    */

//   //   arrow function
//   arrowAge: () => {
//     console.log("this in arrow is ", this);
//     console.log(`doge is ${this.realAge} years old `);
//   },
// };

// // console.log("this is ", this, global);
// // person.normalAge();
// // person.arrowAge();

// const anObject = {
//   aValue: "example value",
//   aMethod: function () {
//     console.log("aMethod", this.aValue);

//     const arrow = () => {
//       console.log("arrow", this.aValue);
//     };

//     //arrow();
//   },
// };

// // anObject.aMethod();
// const copyOfAMethod = anObject.aMethod;
// copyOfAMethod();

// let Person = function (name) {
//   this.name = name;
//   this.normal = function () {
//     console.log("HEY THERE FROM ", this.name);
//   };

//   this.abNormal = () => {
//     console.log("HEY THERE FROM ABORNAL ", this.name);
//   };
// };

// let dave = new Person("dave");
// let mac = new Person("Mac");

// // here in case of arrow function it will always point to the object initialized and wont change the poinitng
// dave.normal();
// dave.abNormal();

// dave.normal.call(mac);
// dave.abNormal.call(mac);

// dave.normal.apply(mac);
// dave.abNormal.apply(mac);

// dave.normal.bind(mac)();
// dave.abNormal.bind(mac)();

function add(a, b, c) {
  console.log("haha curryied", a + b + c);
  return a + b + c;
}

add(10, 20, 30);

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      console.log("haha curryied", a + b + c);
      return a + b + c;
    };
  };
}

curriedAdd(10)(20)(30);
