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
