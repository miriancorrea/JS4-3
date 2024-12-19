/*Desta forma abaixo é o jeito mais baixo de fazer lista, fica organizado o 
codigo e mais facil a visualização*/ 

const turma1 = ["Mirian", "Fabio", "Cristina"];
const turma2 = ["João", "Diogo"];

/*Desta forma abaixo tambem da para fazer porem o codigo fica muito longo e cansativo de ser feito*/ 

const aluno1turma1 = "Mirian";
const aluno2turma1 = "Fabio";
const aluno3turma1 = "Cristina";
const aluno1turma2 = "João";
const aluno2turma2 = "Diogo";
 
/*desta forma para imprimir as const*/
console.log("Alunos da turma 1: " ,aluno1turma1,aluno2turma1,aluno3turma1);
console.log("Alunos da turma 2: " ,aluno1turma2,aluno2turma1);

/*desta forma parfa imprimir os ARRAYS*/
console.log("Alunos da turma 1: " ,turma1);
console.log("Alunos da turma 2: " ,turma2);

/*Cada array tem uma posição e sempre começa a contagem pelo 0, se formos imprimir
 de uma determinada posição fica desta forma*/

 console.log(turma1[0]);


 const listaDeCompras = ["Arroz", "Feijão", "Ovos"];
 console.log(listaDeCompras);

 listaDeCompras[3] = "Farofa";      /*Aqui adicionei farofa ao array acima, se eu imprimir ira aparecer na lista*/
 console.log(listaDeCompras);

 /*Outra forma de puxar algo para a lista sem ter de colocar [] é : */

 listaDeCompras.push("Maça");
 console.log(listaDeCompras);

 console.log(listaDeCompras.length); /*Consigo saber quantos nomes tem no meu array */

 console.log(listaDeCompras[listaDeCompras.length - 1]); /*para eu ver o nome do item*/