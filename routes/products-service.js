let postgres = require("../Db/postgres");

class ProductService {
  //constructor
  constructor() {}

  async get(id) {
    console.log("inside get method with params ", id);
    let res;
    try {
      res = await postgres.get(id);
    } catch (error) {
      console.log("getting error while fetching data from postgres ");
    }

    console.log("res is ", JSON.stringify(res));

    return res;
  }
}
