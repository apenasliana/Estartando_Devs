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
const notasAluno = [4, 1 ,9]


// calcular a media do aluno
const media = (notasAluno[0]+notasAluno[1]+notasAluno[2])/3


// calcular se o aluno foi aprovado
const aprovado = media >= 8


// Imprimir Nome, media e se foi aprovado
if(aprovado){
	console.log("| Aluno:" , nomeAluno,"| Media:", media, "| Situação: Aprovado  |" )
}else{
	console.log("| Aluno:" , nomeAluno,"| Media:", media, "| Situação: Reprovado  |")
}




