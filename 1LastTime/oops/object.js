let a = {
  name: "cheems",
  surname: "doge",
  techStack: {
    backend: ["nodejs", "django", "flask", "spring"],
  },
};

// let b = { ...a };
// b.malik = "harsh";
// console.log("b is ", b, a);
/**This reference to the object that is executing current function  */

let c = Object.assign({}, a);
c.name = "charles";
c.sibbling = "pheobe";
console.log("c is ", c, a); //=> shallow copy
