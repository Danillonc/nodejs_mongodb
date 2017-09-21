module.exports = function(application){
  
  application.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
  });

  application.post('/noticias/salvar', function(req, res){
  	var noticia = req.body;

    var connection = application.config.dbConnection(); //getting the module dbConnection instantied on app variable.
    var noticiasModel = new application.app.models.noticiasDAO(connection); //getting module noticiasModel instantied on app variable.

    noticiasModel.salvarNoticia(noticia, function(error, result){
       console.log('callback salvar noticia error : '+error);
       res.redirect('/noticias');
    });

  });

}

