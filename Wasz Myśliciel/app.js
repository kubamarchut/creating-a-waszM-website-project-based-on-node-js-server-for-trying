const express = require('express');
const fs = require("fs");
var app = express();

app.set('view engine', 'ejs')



app.use('/assets', express.static('assets'));
app.use('/articles', express.static('articles'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/a/:article', function(req, res){
  fs.readFile('/articles/'+req.params.article+'.txt', function (err, data) {
     if (err) {
        res.render('blad');
        console.log("error happend");
     }
     else res.render('article', {article: + data.toString()});
     console.log( '/articles/'+req.params.article+'.txt')
  });
});

app.listen(3030);
