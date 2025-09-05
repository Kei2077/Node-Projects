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

app.get('/home/:inquisitorname/case-files/:id/:code', function(req, res){
    res.send("<h1> CASE FILE"+req.params.id + "</h1>" + "<h2> Please enter your authority code </h2>" + "<h2>" +req.params.code + "</h2>" + "<h3> Validating... <h3>" + "<h3> Thank you, Inquisitor " +req.params.inquisitorname + ". You may proceed.");
});
app.listen(8081, function(){
    console.log("Servidor rodando = http://localhost:8081");
});
    