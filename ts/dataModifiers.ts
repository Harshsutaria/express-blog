/**
 * 1. private cannot be accessed outside a class
 * 2. Protected can be accessed by only self and derived class
 * 3. public can be assess from every where
 * 4. readonly is like public you can only read the property/attribute.
 */

class Ferrari {
  readonly price: string;
  private name: string;
  private color: string;

  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }

  protected compliment() {
    console.log(
      "WOW " + this.name + " LOOKS AWESOME IN " + this.color + " Color"
    );
  }

  display() {
    console.log("car name is ", this.name, this.color);
  }
}

let a = new Ferrari("Bumkati", "b", 1);
// a.price = 10000000;

console.log(a.price);
// console.log(a.name); //=> compilation error


type name {
  name : string , 
  surname : string  
}

let b :name  = {
  name :"cheems",
  surname : "doge"
}