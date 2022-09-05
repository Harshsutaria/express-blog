abstract class vehicle {
  color: string;
  name: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  run() {
    console.log("muje kya mai main hu !!!!!");
  }

  start() {
    console.log("started!!!!!!!!!!!");
  }

  stop() {
    console.log("stopped");
  }

  abstract boost();
  abstract compliment();
}

class Ferrari extends vehicle {
  constructor(name, color) {
    super(name, color);
    this.name = name;
    this.color = color;
  }

  boost() {
    console.log(
      "I TOLD YOU LONG AGO ON A ROAD I GOT WHAT THEY WAITING FOR ",
      this.name
    );
  }

  compliment() {
    console.log(
      "WOW " + this.name + " LOOKS AWESOME IN " + this.color + " Color"
    );
  }

  display() {
    console.log("car name is ", this.name, this.color);
  }
}

class FerrariJunior extends Ferrari {
  constructor(name, color) {
    super(name, color);
  }

  static info() {
    console.log("ZINDAGI LAMBI NHI BADI HONI CHAHIYE Babu moshai!");
  }
}

new FerrariJunior("Cheems Ferrari", "black").boost();
new FerrariJunior("Cheems Ferrari", "black").compliment();

FerrariJunior.info();
