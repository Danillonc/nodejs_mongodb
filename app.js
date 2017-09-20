var app = require('./config/server'); //module server.js

/*initialize app on 3000 port localhost*/
app.listen(3000, function(){
	console.log('Servidor ON');
});