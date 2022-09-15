let a = { name: "cheems", surname: "doge" };

function add(a, b) {
  console.log("a+b", a + b);
  return a + b;
}

function mul(a, b) {
  console.log("a*b", a * b);
}

// one way of exporting
// module.exports = { add, mul, a };

// way 2 of exporting

module.exports.a = a;
module.exports.add = add;
module.exports.mul = mul;
