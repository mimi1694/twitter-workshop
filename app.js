const express = require('express');
const app = express();

app.use(function (req, res, next) {
    //console.log(req.method);
    //console.log(res.method); //undefined
    console.log(req.method, req.originalUrl, res.statusCode);
    next();
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})

app.use( function (req, res, next) {
    console.log('you reached the ~special~ area');
    next();
})


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

app.get('/special/', function(req, res, next) {
    res.send("This is the special area");
  })

app.get('/special/holidays', function(req, res, next) {
  res.send("This is the special holiday area");
})

app.listen(3000, function() {
  // does something
  console.log("Bloop");
})

