const express = require("express");
const app = express();

// below is the signature how api is return in express
app.get("/", (req, res) => {
  console.log("INSIDE GET USERS ROUTE");
  return res
    .status(200)
    .send({ code: 200, message: "Successfully send a response" });
});

//adding a user module
app.get("/user", (req, res) => {
  console.log("INSIDE GET USER ROUTE!!!");
  return res
    .status(200)
    .send({ code: 200, message: "Successfully fetched the users!!" });
});

app.get("/postUser", (req, res) => {
  console.log("INSIDE CREATE USER ROUTE!!!");
  return res
    .status(200)
    .send({ code: 200, message: "Successfully Created the users!!!" });
});

// the below line will run our code at 3000 port
app.listen(3000);
