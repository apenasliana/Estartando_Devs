////////////////////////////////////////////////
//      Estartando Devs - Atividade 2         //
//                                            //
//              Liana Meneghini               //
//        discord@lianameneghini#0703         //
///////////////////////////////////////////////////////////////////
//                                                               //
// Faça um algoritmo que leia o nome e as três notas de uma      //
// disciplina de um aluno e ao final escreva o nome do aluno,    //
// sua média e se ele foi aprovado, sabendo-se que a média para  //
// aprovação é igual ou superior a 8.                            //
//                                                               //
///////////////////////////////////////////////////////////////////


// Entrada de dados
//console.log("Insira o nome do aluno: ")
const nomeAluno = "Jonas"
//console.log("Insira as notas do aluno")
const notasAluno = [4, 10 ,9 , 6]
let SomaDasNotas = 0

// calcular a media do aluno
for (let i = 0; i < notasAluno.length; i++) {
	SomaDasNotas += notasAluno[i]
}
const media = (SomaDasNotas/notasAluno.length).toFixed(2)


// calcular se o aluno foi aprovado
const aprovado = media >= 8


// Imprimir Nome, media e se foi aprovado
if(aprovado){
	console.log("| Aluno:" , nomeAluno,"| Media:", media, "| Situação: Aprovado  |" )
}else{
	console.log("| Aluno:" , nomeAluno,"| Media:", media, "| Situação: Reprovado  |")
}




