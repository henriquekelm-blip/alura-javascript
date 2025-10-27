let alturaDoHenrique = 1.83;

console.log(alturaDoHenrique);

let altura = 7;
let largura = 10;
let area = 70;

// letras maiusculas e minisculas fazem diferença

let preco = 10;
let Preco= 20;

console.log('preco: ', preco);
console.log('preco: ', Preco);
// não funciona: console.log('precO', precO)

let idadeDoUsuario = 20;
let nomeCompleto = 'Henrique Pessoa Kelm';

// não sabemos do que se trata

let a = 1;
let b = false;

console.log(a);
console.log(b);

// 1. Boas-vindas personalizadas

var nome = 'Henrique Pessoa Kelm';

console.log('Olá, ',nome ,'Seja bem-vindo(a) ao curso de JavaScript!');

// 2. Cálculo de idade

var anoAtual = 2025;
var anoNascimento = 2000;
var idade = anoAtual - anoNascimento;

// 3. Mensagem de localização

console.log('Você tem ', idade , 'anos');

var cidade = 'São Paulo';
var estado = 'São Paulo';
var pais = 'Brasil';

console.log('Você está em',cidade,'-',estado,',',pais);

// 4. Tipo da variável:

var temCarteira = false;

console.log(typeof temCarteira);

// 5. Simulação bancária simples:

var saldo = 0;
var deposito = 200 ;
var retirar = 50;
var saldoTotal = saldo + deposito - retirar;

console.log('Seu saldo bancário é de', saldoTotal , 'reais');

// 6. Média de notas: 

var matematica = 7;
var portugues = 9;
var ciencias = 5;
var media = matematica + portugues + ciencias ;
var mediaTotal = media / 3;

console.log('Sua média é: ', mediaTotal);

// 7. Reajuste de salário:

var salario = 3000;
var aumento = salario * 0.10;
var novoSalario = salario + aumento;

console.log('O sálario teve um aumento de 10% e agora é de ', novoSalario);

// 8. Contador de cliques:

let cliques = 0;

// Simulando 3 cliques
cliques++;
cliques++;
cliques++;
cliques++;


console.log('O botão foi clicado' , cliques , 'vezes.');

// 9. Constantes não podem ser alteradas

const PI = 3.14;

// var PI = 3.58

console.log(PI);

// a palavra-chave const é usada para declarar constantes, ou seja, variáveis cujo valor não pode ser alterado após a atribuição inicial.
// Quando tentamos mudar o valor de uma constante (PI = 3.1415), o JavaScript impede a modificação e mostra um erro do tipo TypeError, informando que estamos tentando atribuir um novo valor a uma variável constante.

// 10. Concatenando tipos diferentes

var nome = 'Henrique';
var number = 10;
var combinado = nome + number;

console.log(combinado);

console.log(typeof combinado);








