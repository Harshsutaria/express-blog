/**function declaration  */
function promise(t1: number, t2: number): Promise<unknown> {
  console.log("inside promise function with t1" + t1 + "t2" + t2);
  let p1: any = new Promise((rs, rj) => {
    setTimeout(() => {
      rs("p1 resolved ");
      console.log("resolve p1");
    }, t1);
  });

  let p2 = new Promise((rs, rj) => {
    setTimeout(() => {
      rs("p2 resolved ");
      console.log("resolve p2");
    }, t2);
  });

  return p1;
}

/**interface */

interface userInformation {
  readonly name: string;
  age: number;
}

let person: userInformation = {
  name: "cheems",
  age: 13,
};

//person.name = "barsh"; =>Cannot assign to 'name' because it is a read-only property.ts(2540)
person.age = 15;

/**interface with function  */

interface mainFunc {
  (x: number, y: number): number;
}

let z: mainFunc = (x: number, y: number) => {
  return x + y;
};
