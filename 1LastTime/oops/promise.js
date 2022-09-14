const { default: axios } = require("axios");

/**funtion returning a promise  */
function getUser(name) {
  console.log("inside get user method ");

  let user = new Promise((resolve, reject) => {
    setTimeout(() => {
      //try to fetch user data
      try {
        let userData = axios.get(`https://api.github.com/users/${name}`);
        resolve(userData);
      } catch (error) {
        console.log("getting error while fetching user data");
        reject(error);
      }
    }, 5000);
  });

  return user;
}

//testing asynchronous flow
// console.log(
//   "THE BEST TIME TO PLANT A TREE WAS 20 YEARS AGO THE SECOND BEST TIME IS NOW"
// );

// getUser("Cheems")
//   .then((data) => console.log("user info is ", JSON.stringify(data.data)))
//   .catch((err) => console.log("error occures is ,", err))
//   .finally(() => console.log("finnaly executed"));

// console.log("TESTED ASYNCHRONOUS FROM");

async function getMultipleUsersSeries(x, y, z) {
  console.log("inside getMultipleUsers", x, y, z, new Date().toISOString());
  let user1 = await getUser(x);
  let user2 = await getUser(y);
  let user3 = await getUser(z);

  //overall operation takes 15 secs
  console.log(
    "user1 , user2 , user 3 is",
    user1.data.name,
    user2.data.name,
    user3.data.name,
    new Date().toISOString()
  );
}

// getMultipleUsersSeries("messi", "robert", "dembele");

async function getMultipleUsersParallerAll(x, y, z) {
  console.log("inside getMultipleUsers", x, y, z, new Date().toISOString());

  //it will ecxecute when all the promise is executed returns array in execution
  //   let users = await Promise.all([getUser(x), getUser(y), getUser(z)]);

  /** the key difference between promise .all and promisse .setelled is than if
   * any of the promise is failed than we will not ge the result using the promise.alll
   * but in case of promisea.all setelled it will never short curcuit
   * it will retuen the status as well as data in the form of array of objects
   */
  let users = await Promise.allSettled([
    [getUser(x), getUser(y), getUser(z)],
  ]).then((data) => {
    for (let i of data) {
      console.log("data is", i);
    }
  });

  console.log("users is ", users, new Date().toISOString());
}

async function getMultipleUsersParallerAllSetelled(x, y, z) {
  console.log("inside getMultipleUsers", x, y, z, new Date().toISOString());

  /**
   * any() fulfills with the first promise to fulfill, even if a promise rejects first. 
   * This is in contrast to Promise. race() , which fulfills or rejects with the first promise to settle.

   */

  /** the key difference between promise .all and promisse .setelled is than if
   * any of the promise is failed than we will not ge the result using the promise.alll
   * but in case of promisea.all setelled it will never short curcuit
   * it will retuen the status as well as data in the form of array of objects
   */

  let users = await Promise.allSettled([
    [getUser(x), getUser(y), getUser(z)],
  ]).then((data) => {
    for (let i of data) {
      console.log("data is", i);
    }
  });

  console.log("users is ", users, new Date().toISOString());
}

// getMultipleUsersParaller("messi", "robert", "dembele");
