// this is a file used to implement streams in practice
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  fs.readFile("Db/dynamo.js", (err, data) => {
    if (err) {
      console.log("error occured");
    } else {
      res.end(data);
    }
  });
});


server.listen()
