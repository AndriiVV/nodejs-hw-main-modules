const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log("The folder has been created.");
// });

const filePath = path.join(__dirname, "test", "text.txt");
// fs.writeFile(filePath, "\nHello NodeJS", (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log("The file has been created.");
// });

// fs.appendFile(filePath, "\nNew string", (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log("The file has been updated.");
// });

fs.readFile(filePath, "utf-8", (err, content) => {
	if (err) {
		throw err;
	}
	// const data = Buffer.from(content);
	// console.log("Content: ", data.toString());
	console.log(content);
});
