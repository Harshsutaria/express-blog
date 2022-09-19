const Event = require("events");
const event = new Event();
event.on("hello", () => {
  console.log("hello event emmited");
});

event.emit("hello");

class Hemloo extends Event {
  name;
  constructor(name) {
    super();
    this.name = name;
  }

  helloDoge() {
    console.log("hello from", this.name);
  }
}

const heloo = new Hemloo("cheems doge");

heloo.once("hemloo", heloo.helloDoge); //=> only claass execute to once
heloo.on("hey", () => {
  console.log("hey thetr cheems ");
});

heloo.emit("hemloo");
heloo.emit("hey");
