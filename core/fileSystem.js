/**
 * 
 * @DocumentationLink https://nodejs.dev/learn/the-nodejs-fs-module
 * The fs module provides a lot of very useful functionality to access and interact with the file system.
   There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:
 */

const fs = require("fs");
// 1. check we can access a file with the specific mode
function access() {
  console.log("accessing a file !");
  fs.access("/home/vsspl/Documents/qoutes.txt", fs.constants.R_OK, (err) => {
    if (err) console.log("error occured while accwsssing the file ");
    else {
      console.log("file can be readed");
    }
  });
}

//access();

//2. to put data at the end of a file
function append() {
  console.log("appending a file !!!");
  fs.appendFile(
    "/home/vsspl/Documents/qoutes.txt",
    "failure is a stepping stone ",

    (err) => {
      if (err) {
        console.log("error occured while adding a data in file ");
      } else {
        console.log("data added in a file ");
      }
    }
  );
}

//append();

//3. copy content of a file using
/**
 * if a file doesnt exists then create the file and copy
 * else update the content of the file
 * above operation is done by ode js itself
 */

function copy() {
  console.log("inside copy method !!!");
  let source = "/home/vsspl/Documents/qoutes.txt";
  let destination = "/home/vsspl/Documents/qoutesCopy.txt";
  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.log("error occured and the erros is ", err);
    } else {
      console.log("copy is successfully done ");
    }
  });
}

//copy();

// 4. read from a file using reading

function read() {
  console.log("inside read method ");
  let readSource = "/home/vsspl/Documents/qoutesCopy.txt";
  fs.readFile(readSource, "utf8", (err, data) => {
    console.log("inside a callback function");
    if (err) {
      console.log("getting error while reading a file ");
    }
    if (data) {
      console.log("reading successfully!!");
      console.log("data is ", data);
    }
  });
}

//read();

// 5. rename bruhhhhhhhhhhhhhhhhhhhh
function rename() {
  console.log("inside rename method ");
  let source = "/home/vsspl/Documents/qoutesCopy.txt";
  let destination = "/home/vsspl/Documents/qoutesCopyRenamed.txt";
  fs.rename(source, destination, (err) => {
    if (err) {
      console.log("error occred while renaming !!");
    } else {
      console.log("renamed successfullt");
    }
  });
}

//rename();

// 6. write in a file
/**
 * if file exists update the overall content with the data provided
 * else create a file then append the data
 */

function write() {
  console.log("inide write fucntion");
  let source = "/home/vsspl/Documents/qoutesCopyRenamedWrite.txt";

  fs.writeFile(
    source,
    "Dont fear filures but be terrified of regrets",
    (err) => {
      if (err) {
        console.log("error aagaya bruh ");
      } else {
        console.log("successfully write!!");
      }
    }
  );
}

//write();

/**
 * reading and writing stream pending will do that
 */
