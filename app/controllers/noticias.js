/**
  Responsible module to exports function that list all news.
**/
module.exports.listar_noticias = function(application, req, res){

   var connection = application.config.dbConnection(); //getting the module dbConnection instantied on app variable.
   var noticiasModel = new application.app.models.noticiasDAO(connection); //getting module noticiasModel instantied on app variable.

   noticiasModel.getNoticias(function(error, result){
       res.render("noticias/noticias", {noticias : result});
   });

}

/**
   Responsible module to exports function that list a specific news.
**/
module.exports.listar_noticia = function(application, req, res){
   
   var connection = application.config.dbConnection();
   var noticiasModel = new application.app.models.noticiasDAO(connection);

   noticiasModel.getNoticia(function(error, result){
       res.render("noticias/noticia", {noticia : result});
   });

}