const os = require("os");

console.log("OS: ", os.platform());
console.log("OS release: ", os.release());
console.log("OS type: ", os.type());
console.log("OS version: ", os.version());

console.log("CPU arch: ", os.arch());
// console.log("CPU details: ", os.cpus());
console.log("Free memory: ", os.freemem());
console.log("Total memory: ", os.totalmem());
console.log("Home dir: ", os.homedir());
console.log("Time of usage: ", os.uptime());
// console.log("User info: ", os.userInfo());
console.log("Hostname: ", os.hostname());
