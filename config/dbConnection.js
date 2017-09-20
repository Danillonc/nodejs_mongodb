var mysql = require('mysql');

module.exports = function(){

     return mysql.createConnection({
   	    host: 'localhost',
        user: 'node',
        password: '12345',
        database: 'curso_node'
   });

};