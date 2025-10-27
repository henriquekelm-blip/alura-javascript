// estrutura do laço de repetição FOR

for (let contador = 1; contador <= 10; contador++) {
    console.log('Número atual:', contador)
}

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 == 0) {
        console.log('Número par encontrado:', numero)
    }
}

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 > 0) {
        console.log('Número impar encontrado:', numero)
    }
}

const palavra = 'ele quer um cafezinho'

// palavra.length indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada
// OBS: A PRIMEIRA POSIÇÃO COMEÇA COM 0

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador])
}