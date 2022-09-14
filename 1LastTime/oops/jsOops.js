class A {
  name;
  _roll_no; // protected property;

  #id; //privaate property
  constructor(name, roll, id) {
    this.name = name;
    this._roll_no = roll;
    this.#id = id;
  }

  fullName() {
    console.log("FULL NAME IS ", this.name, this._roll_no);
  }
}

let a = new A("cheems", "7", "123");
a.fullName();
a._roll_no = 23;
console.log("a is ********", a);
// console.log("id is ", a.#id); => throws error
