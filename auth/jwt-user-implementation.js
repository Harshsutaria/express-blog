const express = require("express");
const user = express.Router();
// importing jwt library
const jwt = require("jsonwebtoken");
const uuid = require("uuid4");

let jwtSignToken =
  "a1e6e8b2b3cf334e9d5a66d965917e16b99b76f069eaa142d65112ed44aa67a252371fcfd43ac85ae7c52cb266f707b151db828e3bc479515d65058d1fd7b789";

let jwtRefereshToken =
  "08981ce8a8f2747642ecb3050f02a0517e20cfd36cc00d2e33e8058dd8435e62d89cc3e64ac5129eeaa0f56369ccd853b67b690bfb2cfd357dfd7eec16e68dce";

// user list
let users = [
  {
    id: "5bsu",
    name: "Ronaldo",
  },
  {
    id: "5bsz",
    name: "messi",
  },
  {
    id: "5c56",
    name: "neymar",
  },
];

// creating user
user.post("/login", (req, res) => {
  console.log("inside login router", req.body.name);
  //   authenticate the user

  const user = {
    id: uuid(),
    name: req.body.name,
  };

  console.log("user prepared object is ", JSON.stringify(user));

  //   sining the jwt (create a jwt)
  let accessToken = jwt.sign(user, jwtSignToken, { expiresIn: "60s" });

  //   creating refersh token as once the token is expired we will create a new token jwt based on refersh token
  let refershToken = jwt.sign(user, jwtRefereshToken);

  console.log("accessToken is ", accessToken);

  //   injecting into main user list
  users.push(user);
  user.accessToken = accessToken;
  user.refershToken = refershToken;
  res.status(200).send({ code: 200, info: "login successfully!!", data: user });
});

//token creation
user.get("/getAll", (req, res) => {
  console.log("inside get all users !!!");
  res.status(200).send({
    code: 200,
    count: users.length,
    data: users,
    info: "users fetched successfully!!",
  });
});

// implementing get route for user
user.get("/getAll", (req, res) => {
  console.log("inside get all users !!!");
  res.status(200).send({
    code: 200,
    count: users.length,
    data: users,
    info: "users fetched successfully!!",
  });
});

// implementing get specific user route based on login
user.get("/", authenticateJwt, (req, res) => {
  console.log("inside get single user users !!!", req.user);

  res.status(200).send({
    code: 200,
    data: users.filter((x) => x.name === req.user.name),
    info: "users fetched successfully!!",
  });
});

//adding a middleware
// please check web dev simplified video inorder to know that exactly is middleware in 10 min

function authenticateJwt(req, res, next) {
  console.log(
    "inside authenticateJwt authenticator with token !!!",
    req.headers.token
  );

  //   fetching the token from the request headers
  let token = req?.headers?.token;
  //   adding a basic validation
  if (token == undefined) {
    return res.status(401).send({ info: "token not passed" });
  }

  //   below is used for veryfying the jwt toke created
  jwt.verify(token, jwtSignToken, (err, user) => {
    if (err) {
      return res.status(403).send({ token, info: "user not authenticated" });
    }
    req.user = user;
    console.log("user is ", JSON.stringify(user));
    next();
  });
}

module.exports = user;
