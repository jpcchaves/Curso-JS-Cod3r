// configuração do express
// Quando temos um projeto que tem comunicação com rede, temos que declarar uma porta
// Porta: é um processo dentro de um computador
const porta = 3003;

// Importando o express
const express = require("express");
const app = express();

// Importando o body parser
const bodyParser = require("body-parser");

// Importando o banco de dados
const bancoDeDados = require("./bancoDeDados");
const { reduce } = require("lodash");

// Usando o body-parser
app.use(bodyParser.urlencoded({ extended: true })); // para qualquer requisição, será passado por essa middleware

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProduto());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto); // converte em JSON
});

app.put("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto); // converte em JSON
});

app.delete ("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto(req.params.id);
  res.send(produto); // converte em JSON
});

app.listen(porta, () => {
  console.log(`Seridor está executando na porta ${porta}`);
});
