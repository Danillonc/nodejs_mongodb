var express = require('express'); // express module.
var consign = require('consign'); // consign module.
var bodyParser = require('body-parser'); //body-parser module.
var expressValidator = require('express-validator'); //express-validator module.

var app = express();
app.set('view engine','ejs'); //setting ejs to views
app.set('views', './app/views'); //loading views files

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* initialize the consign module to autoloading routes and file dbConnection and inject into app instance*/
consign()
   .include('app/routes')
   .then('config/dbConnection.js')
   .then('app/models')
   .then('app/controllers')
   .into(app);

/* export app */
module.exports = app;