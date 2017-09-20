module.exports = function(application){

 application.get('/noticias', function(req, res){  
   
   var connection = application.config.dbConnection(); //getting the module dbConnection instantied on app variable.
   var noticiasModel = application.app.models.noticiasModel; //getting module noticiasModel instantied on app variable.

   noticiasModel.getNoticias(connection, function(error, result){
       res.render("noticias/noticias", {noticias : result});
   });
    
  });
}

