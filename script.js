#!/usr/bin/env node
const fs = require('fs');
//console.log("hello world");
fs.writeFileSync("abc.text","Hello, pepcoder");
let data= fs.readFileSync("abc.text","utf-8");
console.log(data);
console.log(fs.existsSync("abc2.text"));