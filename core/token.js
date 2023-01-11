const uuid4 = require("uuid4");

/**
 * 1. generate a new token
 * 2. save the token for the user
 * 3. when user request for a new token check the validity and if valid return the same token else create a  new token
 * 4. set expiry at token creation
 * 5. think for the scenario
 */

let tokenDict = {};

let totalTokenCount = 5;

let tokenExpiry = 2;

function generateToken(user, ct, ext) {
  console.log("inside generateToken function", user, ct, ext);

  if (tokenDict[user.name]) {
    let expiry = user.accessTime - (ct + tokenExpiry);

    if (expiry > 0) {
      console.log("token is expired");
      delete tokenDict[user.name];
      return null;
    }

    return tokenDict[user.name];
  }

  if (Object.keys(tokenDict).length + 1 > totalTokenCount) return "";

  let token = createToken(user, ct, ext);
  console.log("token is", token);
  tokenDict[user.name] = token;
  console.log("token generate successfully");

  return token;
}

function createToken(user, ct, ext) {
  console.log("inside createToken method with user", user);
  return { token: uuid4(), ct, ext };
}

// createToken({},"1","2")

// generateToken({ name: "mike" }, "1", "2");

// console.log(generateToken({ name: "mike" }, "1", "2"));

// generateToken({ name: "harvey" }, "1", "2");

// generateToken({ name: "donna" }, "1", "2");

// generateToken({ name: "Louis" }, "1", "2");

// generateToken({ name: "Rachel" }, "1", "2");

// console.log(generateToken({ name: "sherlock" }, "1", "2"));

generateToken({ name: "krishna", accessTime: 12 }, 1, 2);

generateToken({ name: "krishna", accessTime: 12 }, 1, 2);

console.log("all user token is", JSON.stringify(tokenDict));

/** 
"Problem Statement: 
Write a code/algorithm to generate limited number (x) tokens

Usecases
x tokens are getting available every y hours
If you don't use the token, it will get expired in """"z"""" hours
Total number of tokens in a day should not cross """"c"""" count
One person will be able to have only one active token at a time

If each token can be time boxed and assigned the time slot. For eg: 1,2,3,4 tokens are required to avail the services in b/w 8-10 AM
*/
