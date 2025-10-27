// 1. Contador de 1 a 10

for (let contador = 1; contador <= 10; contador++) {
    console.log('linhas', contador)
}

// 2. Soma de 1 a 100

let totalNumeros = 0

for (let contador = 1; contador <= 100; contador++) {
    totalNumeros = totalNumeros + contador // ele vai somar todo o valor desses contador
}

console.log('Total da soma:', totalNumeros)

// 3. Tabuada personalizada

let tabuada = 2

for (let contador = 1; contador <= 10; contador++) {
   let resultado = tabuada * contador
   console.log('Valor da tabuada:', resultado)
}

// 4. Contagem regressiva

let contador = 10

while (contador >= 0) {
    console.log(contador)
    contador-- // diminui 1 a cada volta
}

console.log('Contagem finalizada!')

// 5. Receber números até digitar 0

// 5. Simulação de entrada de números

let numero 
let contador = 0

do {
    numero = parseInt(prompt('Digite um número (0 para parar):'))
    
    if (numero !== 0) {
        contador++
    }

} while (numero !== 0)

console.log(`Você digitou ${contador} números.`)
