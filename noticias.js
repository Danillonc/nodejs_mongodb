var http = require('http');

var server = http.createServer(function(req, res){

   res.end("<html><body>Portal de noticias</body></html>")

});

server.listen(3000);

//console.log('criando um site de noticias com NodeJS');