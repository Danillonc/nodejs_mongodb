/**
   Responsible module to exports function that display screen add notice form.
**/
module.exports.formulario_inclusao_noticia = function(application, req, res){
      res.render("admin/form_add_noticia",{validacao : {}, noticia: {}});
}

/**
   Responsible module to exports function that save notice on mysql.
**/
module.exports.salvar_noticia = function(application, req, res){

    var noticia = req.body;
    
    req.assert('titulo','Titulo é obrigatório.').notEmpty(); 
    req.assert('resumo', 'Resumo é obrigatório.').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});

    var erros = req.validationErrors();

    if(erros){
      res.render("admin/form_add_noticia",{validacao : erros, noticia : noticia});
      return;
    }

    var connection = application.config.dbConnection(); //getting the module dbConnection instantied on app variable.
    var noticiasModel = new application.app.models.noticiasDAO(connection); //getting module noticiasModel instantied on app variable.

    noticiasModel.salvarNoticia(noticia, function(error, result){
       console.log('callback salvar noticia error : '+error);
       res.redirect('/noticias');
    });

}