import { classInterface } from "./classInterface";
import { secondInterface } from "./secondInterface";

//**basic classs definition */

class Person implements classInterface {
  private id: string;
  private firstName: string;
  private age: number;
  protected lastName: string;

  //   initializing constructor
  constructor(id: string, name: string, age: number, lastName) {
    this.id = id;
    this.firstName = name;
    this.age = age;
    this.lastName = lastName;
  }

  log(): void {
    console.log(`${this.firstName} is ${this.age} years old`);
  }

  sum(x: number, y: number): number {
    return x + y;
  }

  mul(x: number, y: number): number {
    return x * y;
  }

  sub(x: number, y: number): number {
    return x - y;
  }
}

let person = new Person("1", "cheems", 20, "Singh");

class Student extends Person implements secondInterface {
  //protected name: string;
  constructor(id: string, name: string, age: number, lastName) {
    super(id, name, age, lastName);
    // this.name = name;
  }

  log(): void {
    console.log("mai cheems hu ", this., this.lastName);
  }
}

let student = new Student("1", "cheems singh ", 20, "sutaria");
student.log();

let d = student.mul(20, 30);
console.log("d is ", d);
//console.log(student.name);


/**
 * note on access modifiers 
 * public :- can access from anywhere 
 * private :- cannot be accessed outside the class
 * protected can be accrssed in inheritance class
 */