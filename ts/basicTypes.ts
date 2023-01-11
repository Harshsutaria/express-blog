type user = {
  name: string;
  lastName: string;
};

// ---basic types which i know
let b: number | string | boolean | undefined | null | any | Object | user =
  true;

// lets play with type user

type userInfo = {
  name: string,
  lastName?: string;
};

const userInfo: userInfo = {
  name: "cheems ",
  lastName: "singh",
};

/**Type assertion to say we are going to get this type of data */

let cid: any = "1";
//let customerId = <number>cid ;
let customerId = cid as number;
//console.log("customerID is ", customerId, typeof customerId);
