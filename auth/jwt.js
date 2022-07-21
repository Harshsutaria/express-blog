const express = require("express");
const userRouter = require("./jwt-user-implementation");
const app = express();

app.use(express.json()); // <==== parse request body as JSONN

app.use("/users", userRouter);
app.listen(5001, (req, res) => {
  console.log("server running!!");
});
