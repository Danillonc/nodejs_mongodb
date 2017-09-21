module.exports = function(application){
  
  application.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
  });

  application.post('/noticias/salvar', function(req, res){
  	var noticia = req.body;

    var connection = application.config.dbConnection(); //getting the module dbConnection instantied on app variable.
    var noticiasModel = application.app.models.noticiasModel; //getting module noticiasModel instantied on app variable.

    noticiasModel.salvarNoticia(noticia, connection, function(error, result){
       console.log(error);
       res.redirect('/noticias');
    });

  });

}

