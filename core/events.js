// import core events module
const EventEmitter = require("events");

// implementing event in oops way
class Employee extends EventEmitter {
  // initializing constructor
  constructor() {
    super();
  }

  hello() {
    console.log("hello from the class hello method !!!");
  }
}

const event = new Employee();

// this is how we create a event using event.on method
event.on("hello", () => {
  console.log("hello event emitted");
  event.hello();
});

event.on("hey", () => {
  console.log("hey event emitted!!");
});

// event.on("hello", (name) => {
//   console.log(`hello from ${name}!!!`);
// });

// using class method as a callback while defining event
event.on("ramu", event.hello);

//emitting the event only once
// event.once("cristinano", (name) => {
//   console.log(`hello from ${name}!!!`);
// });

//calling the events like self call in-case of events e call emitting
// event.emit("hey");
event.emit("hello");
// event.emit("ramu");
// event.emit("cristinano", "messi");
// // as it is second call so ignored
// event.emit("cristinano", "messi");

const event2 = new EventEmitter();

// event2.on("mango", () => {
//   console.log("mango event called ");
// });

// event2.emit("mango");
