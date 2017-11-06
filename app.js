const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
  res.send("Something else...")
})

app.listen(3000, function() {
  // does something
  console.log("Bloop");
})
