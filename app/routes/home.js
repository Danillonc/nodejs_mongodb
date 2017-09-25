module.exports = function(application){
  application.get('/', function(req, res){
    application.app.controllers.home.inicio(application, req, res);
  });	
}

