module.exports.inicio = function(application, req, res){
	var connection = application.config.dbConnection(); //getting the module dbConnection instantied on app variable.
    var noticiasModel = new application.app.models.noticiasDAO(connection); //getting module noticiasModel instantied on app variable.
	
    noticiasModel.getCincoUltimasNoticias(function(error, result){
    	res.render("home/index",{noticias : result});	
    });
	
}