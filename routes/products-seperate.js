const express = require("express");
const router = express.Router();
const uuid4 = require("uuid4");

let products = [
  {
    mrp: 3448110,
    pricePerUnit: 3448110,
    id: "5bsu",
    productLevel3Title: "mango",
  },
  {
    mrp: 3322312,
    pricePerUnit: 3322312,
    id: "5bsz",
    productLevel3Title: "apple",
  },
  {
    mrp: 1825842,
    pricePerUnit: 1825842,
    id: "5c56",
    productLevel3Title: "orange",
  },
  {
    mrp: 1825842,
    pricePerUnit: 1825842,
    id: "5c57",
    productLevel3Title: "strawebbery",
  },
  {
    mrp: 1825842,
    pricePerUnit: 1825842,
    id: "5c58",
    productLevel3Title: "custuard apple",
  },
];

// get all products
router.get("/", (req, res) => {
  console.log("inside getall products");
  res.status(200).send({
    code: 200,
    data: products,
    message: "fetched products successfully!!",
  });
});

// get product by id
router.get("/:id", (req, res) => {
  let id = req.params["id"];
  console.log("inside get single products", id);

  //   adding basic validation
  if (id == undefined) {
    res.status(500).send({
      code: 500,
      message: "id of a product is mandatory!!",
    });
  }

  let data = products.filter((x) => x.id === id);

  if (data.length == 0) {
    return res.status(400).send({
      code: 400,
      data,
      message: "product not found ",
    });
  }

  return res.status(200).send({
    code: 200,
    data,
    message: "fetched products successfully!!",
  });
});

// update product by id
router.put("/:id", (req, res) => {
  let id = req.params["id"];
  console.log("inside put endpoint with ", id);

  //   adding basic validation
  if (id == undefined) {
    res.status(500).send({
      code: 500,
      message: "id of a product is mandatory!!",
    });
  }

  //   updation operation
  for (let i of products) {
    if (id === i.id) {
      //   i = { ...req.body };
      i.productLevel3Title = req.body.productLevel3Title;
      console.log("x is ", i);
    }
  }

  console.log(
    "all products is ",
    products.filter((x) => x.id === id)
  );

  return res.status(200).send({
    code: 200,
    data: req.body,
    message: "products updated successfully!!",
  });
});

//add a new product
router.post("/", (req, res) => {
  console.log("inside put endpoint with ");

  let product = {
    id: uuid4(),
    ...req.body,
  };

  //   injection into the product list
  products.push(product);

  console.log("products.length ", products.length);
  return res.status(200).send({
    code: 200,
    data: product,
    message: "products created successfully!!",
  });
});

// adding a delete product based on id
router.delete("/:id", (req, res) => {
  let id = req.params.id;

  console.log("inside delete endpoint with ", id);

  for (let i of products) {
    if (id == i.id) products.splice(products.indexOf(i), 1);
  }

  console.log("products.length ", products.length);
  return res.status(200).send({
    code: 200,
    message: "products deleted successfully!!",
  });
});

module.exports = router;
