var http = require('http');

http.createServer(function(req, res){
    res.end("hello");
}).listen(8081); //cria um servidor http na porta 8081 no localhost
console.log("Servidor está funcionando")