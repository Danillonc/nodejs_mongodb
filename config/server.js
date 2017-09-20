var express = require('express'); // express module.
var consign = require('consign'); // consign module.

var app = express();
app.set('view engine','ejs'); //setting ejs to views
app.set('views', './app/views'); //loading views files

/* initialize the consign module to autoloading routes and file dbConnection and inject into app instance*/
consign()
   .include('app/routes')
   .then('config/dbConnection.js')
   .then('app/models')
   .into(app);

/* export app */
module.exports = app;