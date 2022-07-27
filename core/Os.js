/**
 * @DocumentationLink https://nodejs.dev/learn/the-nodejs-os-module
 * this is the os library documentation
 */

const os = require("os");
//console.log(os.cpus());
//system up time
// console.log(os.uptime());
// console.log(os.userInfo());
console.log(os.arch());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.loadavg());
