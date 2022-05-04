////////////////////////////////////////////////
//      Estartando Devs - Atividade 3 e 4     //
//                             EXTRA          //
//              Liana Meneghini               //
//        discord@lianameneghini#0703         //
////////////////////////////////////////////////

function inverter(someString){ //inverter uma string
    let inverseString = []

    for(let i =0;i<someString.length;i++ ){
        inverseString[i] = someString[someString.length-i-1]
    }
    return inverseString.join("")
}

function contarNumeroVogais(someString){ // contar vogais da string
    let vowels =[ "a","A", "e","E", "i","I", "o","O", "u","U"]
    let numVowels = 0

    for(let i=0;i<someString.length;i++){ //for itera a string
        for(let k=0;k<vowels.length;k++){ // segundo for itera o array vogais
            if (someString[i]===vowels[k]){ // se for uma vogal, itera o numVogais
                numVowels++
            }
        }
    }
    return numVowels
}

function fazerRelatorio(someString){
    if(typeof someString === 'string'){ // conferir se é uma string //
        const relatory = { // criar objeto com os dados //
            palavra: someString,
            palavraInverso: inverter(someString),
            numeroVogais: contarNumeroVogais(someString)

        }
        console.log(`Relatorio da palavra "${someString}":`)

        return relatory
    }else{ // caso nao seja uma string //
        
        console.log("oh carai")
        return undefined
    }
}

/// criar string ///
const inputString = "cachorro"
//const inputString = 123

// criar objeto e retornar //
console.log(fazerRelatorio(inputString))
