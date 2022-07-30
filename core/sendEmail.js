// // // importing node js module
// // const nodemailer = require("nodemailer");

// // // creating transporter object
// // let transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: "joanie13@ethereal.email",
// //     //user: "harshrajesh.sutaria@vasudhaika.net",
// //     pass: "ya8hrFEUCr2V8vghp1",
// //   },
// // });

// // let mailObject = {
// //   to: "harshsutaria25@gmail.com",
// //   // to: "harshrajesh.sutaria@vasudhaika.net",
// //   //from: "harshsutaria25@gmail.com",
// //   from: "securesally@gmail.com",
// //   subject: "We found a rockstar!!!",
// //   text: "Hi Champ, The best time to plant a tree was 20 years ago the second best time is now!!",
// // };

// // transporter.sendMail(mailObject, (err, info) => {
// //   if (err) {
// //     console.log("something went wrong ", err);
// //   } else {
// //     console.log("email send successfully!!!", JSON.stringify(info));
// //   }
// // });

// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     // auth: {
//     //   user: testAccount.user, // generated ethereal user
//     //   pass: testAccount.pass, // generated ethereal password
//     // },
//     auth: {
//       user: "joanie13@ethereal.email",
//       //user: "harshrajesh.sutaria@vasudhaika.net",
//       pass: "ya8hrFEUCr2V8vghp1",
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: "<harshsutaria25@gmail.com>", // sender address
//     to: "<harshrajesh.sutaria@kalgudi.com>", // list of receivers
//     subject: "We Found a rock star!!!!!!!!!", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

const msg = {
  to: "harshsutaria25@gmail.com", // Change to your recipient
  from: "harshsutaria25@gmail.com", // Change to your verified sender
  subject: "We found a rock star!!!!!!!!",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error("error aagaya", error);
  });
