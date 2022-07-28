const { default: axios } = require("axios");

//--------------------------------- handlying using promise -------------------------------------
async function main() {
  let userDetails;
  console.log("hello");
  // basic promise syntax
  return new Promise((resolve, reject) => {
    for (let name of ["harsh", "cristiano"]) {
      console.log("1 is ");
      try {
        console.log("trying to you know fetch user information", name);
        userDetails = axios.get("https://api.github.com/users/" + name);
        console.log("promise resolved!!!");
        resolve(userDetails);
      } catch (error) {
        console.log("getting error while fetching promise !!");
        reject(error);
      }
    }
  });
}

async function mainFunc() {
  console.log("inside mainFunc");
  console.log("1.");
  console.log("2.");
  console.log("3.");

  let main2 = main()
    .then((data) => {
      console.log("data is ", data.data.name);
      return data.data.name;
    })
    .catch((error) => {
      console.log("error is wohoohohoohohoohohohooho");
      return error;
    });

  // console.log("outside 4", main2);
  console.log("outside 5");
  return main2;
}

// let a = mainFunc()
//   .then((data) => {
//     console.log("data is final outer");
//   })
//   .catch((err) => console.log(" outer **************** error is "));

// ----------------------------------second approach ----------------------------

async function promise() {
  console.log("inside promise function");
  console.log("1.");
  let p1 = setTimeout(() => {
    console.log("main p1 hu brumh!!");
  }, 3000);

  console.log("2.");

  let p2 = setTimeout(() => {
    console.log("main p2 hu brumh!!");
  }, 6000);
  console.log("3.");

  let p3 = setTimeout(() => {
    console.log("main p3 hu brumh!!");
  }, 9000);

  console.log("4.");

  console.log("p1 is ", p1);
}

console.log("jago bakre sherr aaya");
promise();
console.log("sher aya toh kardega tukde");
