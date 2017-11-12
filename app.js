var express = require('express');
var app = express();
var browserSync = require('browser-sync');

//var bs = browserSync.create();

app.get('', function(req, res){
	res.sendfile(__dirname + '/index.html');
})

app.use('/', express.static(__dirname + '/'));

app.use('/antlr4/', express.static(__dirname + '/antlr4/'));
app.use('/ace_components/', express.static(__dirname + '/ace_components/'));
app.use('/parser/', express.static(__dirname + '/parser/'));
app.use('/views/', express.static(__dirname + '/views/'));
app.use('/styles/', express.static(__dirname + '/styles/'));
app.use('/scripts/', express.static(__dirname + '/scripts/'));
app.use('/node_modules/', express.static(__dirname + '/node_modules/'));



//bs.init({
//	proxy: "localhost:3000",
//	files: ['**/**']
//})

app.listen(3000, function(){
	console.log("Server started on port 3000");
})

