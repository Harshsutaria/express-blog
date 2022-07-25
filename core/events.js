// import core events module
const EventEmitter = require("events");
const event = new EventEmitter();

// this is how we create a event using event.on method
event.on("hello", () => {
  console.log("hello event emitted");
});

event.on("hey", () => {
  console.log("hey event emitted!!");
});

event.on("hello", (name) => {
  console.log(`hello from ${name}!!!`);
});

//calling the events like self call in-case of events e call emitting
event.emit("hey");
event.emit("hello", "charsh");
