const express = require('express');
const app = express();

app.use(function(req, res, next) {
  console.log('Someome made a requst!');
  next();
})

app.get('/', function(req, res, next) {
  res.send("Something else...");
})

app.get('/news', function(req, res, next) {
  res.send("Nothing good...");
})

app.listen(3000, function() {
  // does something
  console.log("Bloop");
})





// Original JSON file contents:
//
// {
//   "name": "twitter-js",
//   "version": "1.0.0",
//   "description": "A neat-o Twitter app!",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "express": "^4.16.2"
//   }
// }
