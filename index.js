const chalk = require("chalk");
console.log(chalk.magenta("Hello NodeJS"));

const express = require("express");

console.log("Test");

const text = require("./data");

console.log(chalk.yellow(text));

console.log("dirname is:", __dirname);
console.log("filename is:", __filename);
