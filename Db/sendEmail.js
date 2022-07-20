// importing node js module
const nodemailer = require("nodemailer");

// creating transporter object
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "harshsutaria25@gmail.com",
    //user: "harshrajesh.sutaria@vasudhaika.net",
    pass: "H@rsh2524",
  },
});

let mailObject = {
  to: "harshrajesh.sutaria@vasudhaika.net",
  from: "harshsutaria25@gmail.com",
  subject: "We found a rockstar!!!",
  text: "Hi Cham The best time to plant a tree was 20 years ago the second best time is now!!",
};

transporter.sendMail(mailObject, (err, info) => {
  if (err) {
    console.log("something went wrong ", err);
  } else {
    console.log("email send successfully!!!", JSON.stringify(info));
  }
});
