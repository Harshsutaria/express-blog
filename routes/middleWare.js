const express = require("express");
const app = express();

app.use(logger);
app.get("/users", (req, res) => {
  console.log("inside get route!!!");
  return res.send(
    "The best time to plant a tree was 20 years ago the second best time is now!"
  );
});

// create a middleware

function logger(req, res, next) {
  console.log("mai logger hu bas", req.query.admin);
  if (req.query.admin == "true") {
    console.log("hey!!!");
    next();
    return;
  }
  res.send("bhai hardwork pays off");
}

app.listen(3000);
