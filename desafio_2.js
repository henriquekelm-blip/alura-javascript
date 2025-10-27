// 1. Verificação de idade para compra de bebida

let idade = 15

if (idade >= 18) {
    console.log('Pode comprar bebida alcoólica')
}

else {
    console.log('Venda poibida para menores de 18 anos')
}

// 2. Saudação de acordo com a hora

let horaAtual = 15 // você pode alterar esse valor para testar

if (horaAtual >= 6 && horaAtual < 12) {
    console.log("Bom dia")
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}

// 3. Verificação de número positivo ou negativo

let numero = 0

if (numero > 0) {
    console.log('Positivo')
} else if (numero < 0) {
    console.log('Negativo')
} else {
    console.log('Zero')
}

// 4. Conversão de nota em conceito

let nota = 8.5 // você pode mudar o valor para testar

if (nota >= 9 && nota <= 10) {
    console.log("A")
} else if (nota >= 8 && nota < 9) {
    console.log("B")
} else if (nota >= 6 && nota < 8) {
    console.log("C")
} else if (nota >= 4 && nota < 6) {
    console.log("D")
} else if (nota >= 0 && nota < 4) {
    console.log("E")
} else {
    console.log("Nota inválida")
}

// 5. Número par ou ímpar com ternário

let numero1 = 7 // você pode alterar o valor para testar

let resultado = (numero1 % 2 === 0) ? "Par" : "Ímpar"

console.log(resultado)

// 6. Menu com switch-case

const valores = 4

switch (valores) {
    case 1:
        console.log('Cadastrar')
        break;
    case 2:
        console.log('Listar')
        break;
    case 3:
        console.log('Sair')
        break
    default:
        console.log("Opção inválida")
        break
}

// 7. Validação de campo obrigatório

let email = "henrique@gmail.com"

if (email) {
    console.log('Email válido: ', email)
} else {
    console.log('Preencha o campo do e-mail')
}

// 8. Validação de senha segura

// Cria uma variável chamada 'senha' e atribui um valor a ela
let senha = "abc123" // você pode alterar o valor para testar diferentes casos

// Verifica se o tamanho da senha é menor que 6 caracteres
if (senha.length < 6) {
  // Se a condição for verdadeira (ou seja, senha tem menos de 6 caracteres)
  console.log("Senha muito curta")
} else {
  // Caso contrário (senha tem 6 ou mais caracteres)
  console.log("Senha válida")
}

// 9. Compra com saldo

let saldoDisponivel = 200
let valorCompra = 199

if (saldoDisponivel >= valorCompra) {
    console.log('Compra aprovada!')
} else {
    console.log('Saldo insuficiente')
}

// 10. Validação de formulário completo

// Cria as variáveis com os dados do formulário
let nome = "Henrique"
let email1 = "henrique@gmail.com"
let idade1 = 25

// Verifica se todos os campos estão preenchidos e se a idade é maior que 0
if (nome !== "" && email1 !== "" && idade1 > 0) {
  console.log("Formulário enviado com sucesso")
} else {
  console.log("Preencha todos os campos corretamente")
}
