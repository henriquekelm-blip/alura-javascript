// 1. Verificação de maioridade

let idade = 18
let maiorIdade = idade >= 18

console.log('A pessoa é maior de idade ', maiorIdade)

// 2. Situação do aluno

let matematica = 5
let portugues = 7
let media = (matematica + portugues) / 2

if (media >= 7)
    console.log('Aluno Aprovado')
else 
    console.log('Aluno Reprovado')

// 3. Simulação de troco

let valorCompra = 35.90
let valorPago = 50

console.log('Valor da compra: R$', valorCompra)
console.log('Valor Pago: R$', valorPago)

let troco = valorPago - valorCompra

console.log('Troco a receber: R$', troco)

// 4. Validação de senha

let primeiraSenha = 123456789
let segundaSenha = 123456789

let saoIguais = primeiraSenha == segundaSenha

console.log('São iguais? ', saoIguais)

// 5. Controle de faltas

const totalAulas = 80;
const faltas = 25;

const limiteFaltas = totalAulas * 0.25;

if (faltas > limiteFaltas) {
  console.log("As faltas ultrapassam 25% das aulas.");
} else {
  console.log("As faltas estão dentro do limite de 25%.");
}

// 6. Verificação de login

let temLogin = false
let temSenha = true

let acesso = temLogin && temSenha

console.log('Acessar: ', acesso)

// 7. Valor negado 

let disponivel = false

let sera = !disponivel

console.log('Será: ', sera)

// 8. Condições compostas

const num1 = 8;
const num2 = 11;

const ambosPares = num1 % 2 === 0 && num2 % 2 === 0;
const Iguais = num1 === num2;

if (ambosPares && Iguais) {
  console.log("Os dois números são pares e iguais.");
} else if (ambosPares && !Iguais) {
  console.log("Os dois números são pares, mas não são iguais.");
} else {
  console.log("Nem ambos são pares, ou um deles é ímpar.");
}

// 9. Calculadora de porcentagem

let numero = 120
let quanto = numero * 0.15

console.log('15% de 120 é igual a ', quanto)

// 10. Ordem de operações

let expresao = 2 + 3 * 5 
let comParanteses = (2 + 3) * 5 

console.log('A multiplicação é aplicada em primeiro ', expresao)
console.log('Aqui a soma é aplicada primeiro ', comParanteses)