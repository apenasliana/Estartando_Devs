////////////////////////////////////////////////
//      Estartando Devs - Atividade 1 e 2     //
//                                            //
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

    for(let i=0;i<someString.length;i++){//for itera a string
        for(let k=0;k<vowels.length;k++){// segundo for itera o array vowels[]
            if (someString[i]===vowels[k]){// se for uma vogal, itera o numVowels
                numVowels++
            }
        }
    }
    return numVowels
}

/// criar string ///
const inputString = "cachorro"

/// Inverter String ///
console.log("String invertida:", inverter(inputString))

/// Contar Vogais ///
console.log("Numero de vogais:",contarNumeroVogais(inputString))