var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
function soma(a, b) {
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function divisao(a, b){
    return a / b;
}
function multiplicacao(a, b){
    return a * b
}

app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  });
app.post('/sub', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});
app.post('/div', function (req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});
app.post('/mult', function (req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

 

