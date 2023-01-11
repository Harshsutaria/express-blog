let s = "Lorem%ipsum%is%a%sample%text";
// text sample a is ipsum Lorem

function replaceString(s) {
  console.log("s is", s);
  let a = [];
  let d = "";
  let result = "";

  //iterating over a string to convert into an array => replacement of split op
  for (let i of s) {
    if (i == "%") {
      a.push(d);
      d = "";
    } else {
      d += i;
    }
  }

  console.log("a is", a);

  for (let i = a.length - 1; i >= 0; i--) {
    result += `${a[i]} `;
  }

  console.log("result is", result);
  return result;
}

function refactorString(s) {
  console.log("s is", s);

  let start = s.length - 1;
  let end = s.length - 1;

  let result = "";
  let d = "";

  while (end >= 0) {
    if (s[end] == "%" || end == 0) {
      result += s.slice(end + 1, start + 1) + " ";
      console.log("result is", result);
      d = "";
      start = end - 1;
    } else {
      d += s[end];
    }
    end -= 1;
  }

  console.log("resulr is", result);
}

console.log(refactorString(s));
