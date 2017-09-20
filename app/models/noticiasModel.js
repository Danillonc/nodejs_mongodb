module.exports = function(){

    //declaring functions for module export and another consume this.

	this.getNoticias = function(connection, callback){
         connection.query('select * from noticias', callback);
	};

    this.getNoticia = function(connection, callback){
         connection.query('select * from noticias where id_noticia = 2', callback);	
    }

    this.salvarNoticia = function(noticia, connection, callback){
    	console.log(noticia);
        connection.query('insert into noticias set ?', noticia, callback); 
    }
	return this;
}