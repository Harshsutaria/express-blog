const express = require("express");
const app = express();
const userRouter = require("./routes/user");

app.use("/users", userRouter);

// below is the signature how api is return in express
app.get("/", (req, res) => {
  console.log("INSIDE GET USERS ROUTE");
  return res
    .status(200)
    .send({ code: 200, message: "Successfully send a response!!!!!!" });
});

// the below line will run our code at 3000 port
app.listen(3000);
