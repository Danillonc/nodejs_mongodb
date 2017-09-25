module.exports = function(application){

 application.get('/noticias', function(req, res){  
    application.app.controllers.noticias.listar_noticias(application,req,res);
  });

 application.get('/noticia', function(req, res){  
    application.app.controllers.noticias.listar_noticia(application,req,res);
  });
}

