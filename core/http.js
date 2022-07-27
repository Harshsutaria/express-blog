const fs = require("fs");

//creating a server using http

/**
 * https://nodejs.dev/learn/the-nodejs-http-module go through the node js documentation  for the revision
 * its a 5 minute read
 */
const server = require("http").createServer((req, res) => {
  // creating basic routing we don`t use this in real world
  if (req.url === "/about") {
    res.statusCode = 200;
    res.write("hello about!!");
    res.end();
  }

  if (req.url === "/quotes") {
    res.statusCode = 200;
    console.log("req is ", req);
    fs.readFile("/home/vsspl/Documents/qoutes.txt", (err, data) => {
      if (err) console.log("error occured while reading file ", err);
      else if (data) res.end(data);
    });
    //res.end();
  }

  if (req.url === "/") {
    res.statusCode = 200;
    res.write("hello world!!");
    res.end();
  }
});

server.listen(3000);

//------------------------- implimication of the module------------------------------

const http = require("http");
http.get("http://api.open-notify.org/astros.json", (resp) => {
  console.log("inside http get method ");
  let data = "";
  resp.on("data", (chunk) => {
    data += chunk;
  });

  resp.on("end", () => {
    console.log("data is ", data);
  });
});
