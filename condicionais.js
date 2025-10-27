const idade = 18;

idade >= 18 ? console.log('Maior de Idade') : console.log('Menor de Idade')

//if (idade >= 18) {

//console.log("É maior de idade");

//} else { (idade < 18) 

//console.log("É menor de idade");

//}

// entre 9 e 10: excelente 
// entre 7 e 8: bom
// entre 4 e 6: médio
// entre 0 e 3: ruim

const notaDoAluno = 10

//if (notaDoAluno >= 9) {
   // console.log('Nota Excelente')
//} else if  (notaDoAluno >= 7) {
   // console.log('Nota Bom')
//}else if (notaDoAluno >= 4) {
    //console.log('Nota Médio')
//} else {
   // console.log('Nota Ruim')
//}

notaDoAluno >= 9 ? console.log('Excelente') : 
    notaDoAluno >= 7 ? console.log('Bom') : 
        notaDoAluno >= 4 ? console.log('Média') : 
            console.log('Ruim')