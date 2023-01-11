/**A generator is a function that can stop midway and then continue from where it stopped. In short,
 * a generator appears to be a function but it behaves like an iterator.
 */

function* main(num) {
  yield num + 10;
  console.log("nums is", num);
  yield num + 20;
  console.log("nums is ****", num, main);
  yield num + 30;
}
let gen = main(10);

console.log(gen.next());
console.log(gen.next().value); // 20
console.log(gen.next().value); // 30
console.log(gen.next().value); // 40
