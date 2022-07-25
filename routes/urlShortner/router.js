const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("inside get gouter!!");
  res.status(200).send({ code: 200, info: "url fetched successfult!!" });
});

app.listen(3000);
