module.exports = function(app){

 app.get('/noticias', function(req, res){  
   
   var mysql = require('mysql');

   var connection = mysql.createConnection({
   	    host: 'localhost',
        user: 'node',
        password: '12345',
        database: 'curso_node'
   });
   
   connection.query('select * from noticias', function(error, result){
       res.send(result);
   });
   
    //res.render("noticias/noticias");
  });
}

