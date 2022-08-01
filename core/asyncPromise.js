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
  }, 1000);
  console.log("3.");

  let p3 = setTimeout(() => {
    console.log("main p3 hu brumh!!");
  }, 9000);

  console.log("4.");

  console.log("p1 is ", p1);
}

console.log("jago bakre sherr aaya");
//promise();
console.log("sher aya toh kardega tukde");

// ----------------------------------------trying to implement certain methods regarding promises------------------
function counterPromise() {
  console.log("hello counterPromise");
  let p1 = setTimeout(() => {
    console.log("main p1 hu brumh!!");
    setTimeout(() => {
      console.log("mai p1 ka chotacheems hu");
    }, 3000);
  }, 3000);

  console.log("2.");

  let p2 = setTimeout(() => {
    console.log("main p2 hu brumh!!");
  }, 6000);
  console.log("3.");

  let p3 = setTimeout(() => {
    console.log("main p3 hu brumh!!");
  }, 9000);

  let a = Promise.all([p1, p2, p3]).then((data) =>
    console.log("resolve hogaya brumh")
  );

  console.log("a is finnlay");
}

//counterPromise();

function promiseMethods() {
  console.log("inside promiseMethods ahhaha");

  // promise p1
  console.log("trying p1");
  let p1 = new Promise((resolve, reject) => {
    console.log("inside setTimeout 1.");
    setTimeout(() => {
      console.log("p1 is resolved !!!!!!!!!!");
      reject("p1");
    }, 1000);
  });

  // promise p2
  console.log("trying p2");

  let p2 = new Promise((resolve, reject) => {
    console.log("inside setTimeout 2.");
    setTimeout(() => {
      console.log("p2 is resolved !!!!!!!!!!");
      resolve("p2");
    }, 5000);
  });

  // promise p3
  console.log("trying p3");

  let p3 = new Promise((resolve, reject) => {
    console.log("inside setTimeout 3.");
    setTimeout(() => {
      console.log("p3 is resolved !!!!!!!!!!");
      resolve("p3");
    }, 10000);
  });

  console.log("trying to resolve alll");

  // all the promise will be resolved and it will return array of results of all the prmise
  // let result = Promise.all([p1, p2, p3])
  //   .then((data) => {
  //     console.log("trying to return the result ", data);
  //     return data;
  //   })
  //   .catch((err) => {
  //     console.log("error aagaya brumha");
  //   });

  /**
   * race will return the promise which will be executed fasted !!!! so if one of
   *  the promise occures error who cares
   *
   * it will return the fastest promise among all of them
   *
   * PS:- note all the promise will be executed simultaneously!!!!!!!!!!!!
   * even after promise is returned
   */

  let result = Promise.race([p1, p2, p3])
    .then((data) => {
      console.log("trying to return the result ", data);
      return data;
    })
    .catch((error) => {
      console.log("error occured while racing !!!");
    });

  console.log("result is************* ", result);

  return result;
}

async function promiseMethodsCousumer() {
  console.log("inside promiseMethodsCousumer ahhahaha");

  console.log("1. is ");
  let result = await promiseMethods();

  console.log("result is hahahahahh", result);
  return result;
}

// promiseMethodsCousumer().then((data) => {
//   console.log("result is outer ", data);
// });
