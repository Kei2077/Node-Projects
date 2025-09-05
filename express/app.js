var express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hi '-'");
});

app.get("/shh", function(req, res){
    res.send("Tristeza, não tem fim...");
});

app.get("/secret", function(req, res){
    res.send("Felicidade, sim...");
});

app.listen(8081, function(){
    console.log("Servidor rodando = http://localhost:8081");
});
    