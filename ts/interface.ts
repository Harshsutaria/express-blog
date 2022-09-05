interface LivingBeing {
  eat();
  sleep();
  repeat?();
}

// extending the interface
interface Dog extends LivingBeing {
  name: string;
  surname: string;
  run: Function;
}

// interface with function
let dog: Dog = {
  name: "cheems",
  surname: "doge ",
  run: function a() {
    console.log("bratha chim bhago");
  },
  eat: function () {
    console.log("eating ");
  },
  sleep: function () {
    console.log("sleeping ");
  },
};

// implementing an interface to strickly define a structure
class DogeshWar implements LivingBeing {
  constructor() {}

  eat() {}
  sleep() {}
}

//interface of n  key value pairs
// and it goes on ana on
interface nKeyValue {
  [key: string]: string;
}

let Person: nKeyValue = {
  name: "cheems",
  surname: "doge ",
};

// implementing readonly
interface checkReadOnly {
  readonly id: string;
  name: "charsh";
}

let harsh: checkReadOnly = {
  id: "5354",
  name: "charsh",
};

// harsh.id = "11212122"; => throwing error
