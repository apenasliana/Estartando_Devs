////////////////////////////////////////////////
//      Estartando Devs - Atividade 2         //
//                                            //
//              Liana Meneghini               //
//        discord@lianameneghini#0703         //
///////////////////////////////////////////////////////////////////////
//                                                                   //
// Faça um algoritmo que leia o nome e o salário de um funcionário.  //
// O funcionário terá um aumento de 18%,caso seu novo salário seja   //
// acima de R$3.000,00, ele deverá declarar imposto.                 //
// Ao fim do algoritmo diga ao usuário seu nome, seu novo salário e  //
// se ele deverá ou não declarar imposto.                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////


// entrada de dados
//console.log("Insira um nome de funcionário: ")
const nome = "Jonas"
//console.log("Insira o salario do funcionário: ")
const salario = 123123




//Calculo do novo salario (aumento de 18%)
const novoSalario = salario + (salario *0.18)

// descobrir se precisa pagar imposto
const declararImposto = novoSalario > 3000


//Imprimir nome, novoSalario e se precisa declarar ou não imposto
if(declararImposto){
	console.log("| Nome:", nome, "| Novo salario: ", novoSalario, "| Declarar Imposto |")
}else{
	console.log("| Nome:", nome, "| Novo salario: ", novoSalario,"| Não declarar imposto |")
}