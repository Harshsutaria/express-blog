var realAge = 30;
let person = {
  name: "cheems",
  surname: "doge",
  realAge: "12",
  normalAge: function () {
    // console.log("this in normal is", this);
    console.log(`doge is ${this.realAge} years old `);
  },
  /**
   * the difference between normal and arrow fucntion is that the pointer to this keyword pints to global obect in arrowAge
   * function
   *
   * but in cause the this keyword is pointed to the scope
   */

  //   arrow function
  arrowAge: () => {
    console.log("this in arrow is ", this);
    console.log(`doge is ${this.realAge} years old `);
  },
};

// console.log("this is ", this, global);
// person.normalAge();
// person.arrowAge();

const anObject = {
  aValue: "example value",
  aMethod: function () {
    console.log("aMethod", this.aValue);

    const arrow = () => {
      console.log("arrow", this.aValue);
    };

    //arrow();
  },
};

// anObject.aMethod();
const copyOfAMethod = anObject.aMethod;
copyOfAMethod();
