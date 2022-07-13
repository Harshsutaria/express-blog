//adding a user module

const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  console.log("INSIDE GET USER ROUTE!!!");
  return res
    .status(200)
    .send({ code: 200, message: "Successfully fetched the users!!" });
});

router.get("/postUser", (req, res) => {
  console.log("INSIDE CREATE USER ROUTE!!!");
  return res
    .status(200)
    .send({ code: 200, message: "Successfully Created the users!!!" });
});

module.exports = router;
