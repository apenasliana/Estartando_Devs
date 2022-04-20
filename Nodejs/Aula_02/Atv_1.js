////////////////////////////////////////////////
//      Estartando Devs - Atividade 2         //
//                                            //
//              Liana Meneghini               //
//        discord@lianameneghini#0703         //
///////////////////////////////////////////////////////////////////////
//                                                                   //
// Faça um algoritmo que leia o nome e a idade de uma pessoa e ao    //
// final escreva o nome da pessoa, sua idade e se ela é maior de     //
// idade ou não.                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////


// Inserção de dados nas variaveis //
//console.log("Insira um nome: ")
const nome = "Jonas"
//console.log("Insira a idade: ")
const idade = 44

// descobrir se tem maioridade
const maiordeidade = idade >= 18;


// imprimir nome, idade e maioridade
if(maiordeidade){
	console.log("| Nome:", nome, "| Idade:", idade, "| Maior de idade. |")
}else{
	console.log("| Nome:", nome, "| Idade:", idade, "| Menor de idade. |")
}
