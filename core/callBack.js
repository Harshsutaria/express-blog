// function passed in form of argument to another function is called as callback function
function aB(param1) {
  console.log("inside aB function with ", param1);
  param1();
  function z() {
    console.log("my name is cheemms singh !!");
  }

  return z;
}

function dj() {
  console.log("i am dj");
}

//let p = aB(dj)(); here we are passing in form of arguments to another function is called as callback function

let p = aB(dj)();
