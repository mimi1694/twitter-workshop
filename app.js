const express = require('express'); // library
const nunjucks = require('nunjucks'); // templating library
const volleyball = require('volleyball'); // logger library

const app = express();
app.use(volleyball);
app.set('view engine', 'html');
app.engine('html', nunjucks.render);  // res.render
nunjucks.configure('views', {noCache: true});

app.use(function (req, res, next) {
    //console.log(req.method);
    //console.log(res.method); //undefined
    console.log(req.method, req.originalUrl, res.statusCode);
    next();
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})

app.use('/special', function (req, res, next) {
    console.log('you reached the ~special~ area');
    next();
})


app.use(function(req, res, next) {
  console.log('Someone made a request!');
  next();
})

app.get('/', function(req, res, next) {
  //res.send("Something else...");
  res.render('index', {title: 'An Example', people: [{name: 'Gandalf'}, {name: 'Hermione'}, {name: 'Frodo'}], ruth: 'is a person'});
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
