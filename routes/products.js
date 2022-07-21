const express = require("express");
const productsRouter = require("./products-seperate");
const app = express();

app.use(express.json()); // <==== parse request body as JSONN

app.use("/products", productsRouter);
app.listen(5001, () => {
  console.log("started server!!!");
});
