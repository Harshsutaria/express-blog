const server = require("http").createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // draw back first read the overall file then send the data
  //   fs.readFile("core/a.txt", (err, data) => {
  //     if (err) console.log("error agaya bha", err);
  //     res.end(data);
  //   });
  //   --------------------------------
  //   *using streams
  /**
   * below we are reading from a stream and then writing to a another stream
   * therefore the read speed faster then write stream so there is the issue
   */
  //   const fsStream = fs.createReadStream("core/a.txt");
  //   fsStream.on("data", (data) => {
  //     res.write(data);
  //   });
  //   fsStream.on("end", () => {
  //     console.log("ending the process");
  //     res.end();
  //   });
  //   --------------------------------------------
  //   *using pipe inorder to solve the above issue
  const fsStream = fs.createReadStream("core/a.txt");

  //   readStream pipe writeStream
  fsStream.pipe(res);
});

server.listen(3000, "localhost");
