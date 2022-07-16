const { Pool } = require("pg");

const client = new Pool({
  port: 5432,
  host: "3.7.44.41",
  user: "openerp",
  password: "openerp",
  database: "commondb",
});

client.connect();

let insert = async (data) =>
  await client.query(
    `insert into product_test(id,mrp,"pricePerUnit","productLevel3Title") values('${data.id}','${data.mrp}','${data.pricePerUnit}','${data.productLevel3Title}')`,
    (err, res) => {
      if (!err) {
        console.log(JSON.stringify(res.rows));
        return res.rows;
      } else {
        console.log(err);
      }
    }
  );

let update = async (data) => {
  console.log("iniside update method with data", JSON.stringify(data));
  // let query =
  await client.query(
    `update  product_test set mrp = '${data.mrp}' , "pricePerUnit" = '${data.pricePerUnit}' ,"productLevel3Title" = '${data.productLevel3Title}' where id = '${data.id}'`,
    (err, res) => {
      if (!err) {
        console.log(JSON.stringify(res.rows));
        return res.rows;
      } else {
        console.log(err);
      }
    }
  );
};

let getall = async () => {
  console.log("inside getall method with data");
  // let query =
  await client.query(
    `select count(*) over(),* from product_test`,
    (err, res) => {
      if (!err) {
        console.log(JSON.stringify(res.rows));
        return res.rows;
      } else {
        console.log(err);
      }
    }
  );
};

let get = async (id) => {
  console.log("inside get method with data", id);
  // let query =
  await client.query(
    `select * from product_test where id = '${id}'`,
    (err, res) => {
      if (!err) {
        console.log(JSON.stringify(res.rows));
        return res.rows;
      } else {
        console.log(err);
      }
    }
  );
};

let deleteProduct = async (id) => {
  console.log("iniside delete method with data", id);
  // let query =
  await client.query(
    `delete from product_test where id = '${id}'`,
    (err, res) => {
      if (!err) {
        console.log(JSON.stringify(res.rows));
        return res.rows;
      } else {
        console.log(err);
      }
    }
  );
};

// insert({
//   mrp: 3322312,
//   pricePerUnit: 3322312,
//   id: "5bsz",
//   productLevel3Title: "apple",
// });
//getall();

// update({
//   count: "2",
//   id: "5bsu",
//   mrp: "3448110",
//   pricePerUnit: "3448110",
//   productLevel3Title: "mango updated!",
// });
