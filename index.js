// const chalk = require("chalk");
// console.log(chalk.magenta("Hello NodeJS"));

// const express = require("express");

// console.log("Test");

// const text = require("./data");

// console.log(chalk.yellow(text));

// console.log("dirname is:", __dirname);
// console.log("filename is:", __filename);

// ****************************************************************************

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
	console.log(req.url);
	let filePath = path.join(
		__dirname,
		"public",
		req.url === "/" ? "index.hmtl" : req.url
	);
	const ext = path.extname(filePath);
	if (!ext) {
		filePath += ".html";
	}
	console.log(filePath);

	fs.readFile(filePath, (err, content) => {
		if (err) {
			fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
				if (err) {
					res.writeHead(500);
					res.end("Server error...");
				} else {
					res.writeHead(200, { "Content-Type": "text/html" });
					res.end(data);
				}
			});
		} else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(content);
		}
	});

	// if (req.url === "/") {
	// 	fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
	// 		if (err) {
	// 			throw err;
	// 		}

	// 		res.writeHead(200, { "Content-Type": "text/html" });
	// 		res.end(data);
	// 	});
	// } else if (req.url === "/contact") {
	// 	fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
	// 		if (err) {
	// 			throw err;
	// 		}

	// 		res.writeHead(200, { "Content-Type": "text/html" });
	// 		res.end(data);
	// 	});
	// }
});

server.listen(3000, () => {
	console.log("Server has been started...");
});

// ****************************************************************************
