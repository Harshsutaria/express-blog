export interface secondInterface {
  log(): void;
  sum(x: number, y: number): number;
  mul(x: number, y: number): number;
  sub(x: number, y: number): number;
}

/**generics */

function arrayConcat<T>(a: T[], b: T[]): T[] {
  return a.concat(b);
}

let d = arrayConcat([1, 2, 3], [4, 5, 6]);
console.log("d is ", d);
d.push(7); //=> "working fine"
// d.push('8') => throwing compilation error as the array is numbers only

let f = arrayConcat([], ["h", "a"]);
console.log("f is ", f);
f.push("z"); //=> "working fine"
// f.push(8) => throwing compilation error as the array is numbers only
