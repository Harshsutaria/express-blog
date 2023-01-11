/**
 * @DocumentationLink :- https://nodejs.dev/learn/nodejs-buffers
 * A buffer is an area of memory. Most JavaScript developers are much less familiar with this concept, compared to programmers using a system programming language (like C, C++, or Go), which interact directly with memory every day.

It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JavaScript engine.

You can think of a buffer like an array of integers, which each represent a byte of data.

It is implemented by the Node.js Buffer class.


 */

const buffer = Buffer.alloc(100);
console.log(typeof buffer, buffer);

/**
 * The Buffer. from() method is used to create a new buffer containing the specified string, array or buffer. Parameters: This method accept two parameters as mentioned above and described below: object: This parameter can hold either a string, buffer, array or an arrayBuffer
 */

// const buf = Buffer.from("Helllo!!");
// for (let i of buf) {
//   console.log("i is", i);
// }

/**creating a new buffer  */

//create a buffer
let buf = Buffer.from("holla");

//buf = String(buf)
// as buffer saves data in binary we print it
console.log("bud is ", buf);

// we can access characters in buffer by accessing the internal variables
//we can again convert it to string again or decrypt to its original
//we can alloc memory using buffer.alloc(size)
console.log("buf o is", buf[0]);
console.log("hurray is hurray its the weekend");
