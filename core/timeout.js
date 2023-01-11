console.log("start");
let a = setTimeout(() => {
  console.log("hummajadj");
}, 3000);

console.log("mid");
let b = setTimeout(() => {
  console.log("HYUDKALD,");
}, 9000);

clearTimeout(a);
clearTimeout(b);
console.log("stoop is");

// var msg;
// function greeting() {
//   console.log("Hello World!");
//   stop();
// }
// function start() {
//   console.log("start");
//   msg = setTimeout(greeting, 3000);
// }
// function stop() {
//   console.log("stop");
//   clearTimeout(msg);
// }

// start();
