// ****************************************************************************

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
	// console.log("req.url = ", req.url);
	let filePath = path.join(
		__dirname,
		"public",
		req.url === "/" ? "index.html" : req.url
	);
	const ext = path.extname(filePath);

	let contentType = "text/html";

	switch (ext) {
		case ".css":
			contentType = "text/css";
			break;
		case ".js":
			contentType = "text/javascript";
			break;
		default:
			contentType = "text/html";
	}

	if (!ext) {
		filePath += ".html";
	}
	// console.log("filePath =", filePath);

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
			res.writeHead(200, { "Content-Type": contentType });
			res.end(content);
		}
	});
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
	console.log(`Server has been started on ${PORT}...`);
});

// ****************************************************************************
