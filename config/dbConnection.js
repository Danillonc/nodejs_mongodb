var mysql = require('mysql');

/* variable created to store a function without running it*/
var connDatabase = function(){

     return mysql.createConnection({
   	    host: 'localhost',
        user: 'node',
        password: '12345',
        database: 'curso_node'
   });

}     

/* exports the variable connDatabase to execute when appropriated*/
module.exports = function(){
	return connDatabase;
}

