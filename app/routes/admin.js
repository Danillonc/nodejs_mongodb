module.exports = function(application){
  
  application.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
  });

  application.post('/noticias/salvar', function(req, res){
  	var noticias = req.body;
    res.send(noticias);

    var connection = application.config.dbConnection(); //getting the module dbConnection instantied on app variable.
    var noticiasModel = application.app.models.noticiasModel; //getting module noticiasModel instantied on app variable.

    noticiasModel.salvarNoticia(connection, function(error, result){
       res.render("noticias/noticias", {noticias : result});
    });

  });

}

