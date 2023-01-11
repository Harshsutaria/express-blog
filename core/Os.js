const myCar = {
  maxSpeed: 250,
  batteryLife: 300,
  weight: 123,
};

Object.isSealed(myCar); // false
Object.seal(myCar);
console.log(Object.isSealed(myCar)); // true

myCar.batteryLife = 500;

console.log("hd d", myCar);
