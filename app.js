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

app.post('/soma', function (req, res) {

    res.send('Response da requisição POST');
  var body = req.body;
  console.log(body);
  res.send('via post');
    
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

  var body = req.body;
  var resultado = soma(body.a, body.b);
  var resultado2 = subtracao(body.a, body.b);
  var resultado3 = divisao(body.a, body.b);
  var resultado4 = multiplicacao(body.a, body.b);


  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado2}`);
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado3}`);
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado4}`);
  


