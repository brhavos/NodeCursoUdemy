/*
 **********************************************************
 * Passando argumentos para executar um programa
 * Os argumentos devem seguir a seguinte sintaxe:
 * node nome_do_programa.js argumento1, argumento2,
 * argumento_n
 * Exemplo: Digitar:
 *  node index.js nome=Carlos, idade=57, cel=992730379
 *  Argumentos:
 *    1-) Nome.: Carlos
 *    2-) Idade: 57
 *    3-) Cel..: 992730379
  
 Este programa tem o papel de ler os argumentos
 passados e exibi-los.
 Dica: https://pt.stackoverflow.com/questions/283195/como-adicionar-parametro-no-nodejs

 **********************************************************
 */

// Resgatando "process.argv"
const x = process.argv;
console.log('');
console.log('');
console.log('Conteúdo total do vetor process.argv:');
console.log(x);
console.log('----------');

// Resgatando o primeiro elemento de process.argv:
console.log('');
console.log('');
const c0 = process.argv.slice(0);
console.log('íNDICE "0" - Parte 1 do vetor process.argv:');
console.log(c0);
console.log('----------');

// Resgatando o segundo elemento de process.argv:
console.log('');
console.log('');
const c1 = process.argv.slice(1);
console.log('íNDICE "1" - Parte 2 do vetor process.argv:');
console.log(c1);
console.log('----------');

// Resgatando o terceiro elemento de process.argv:
// É aqui que estão os "argumentos" passados durante
// a execução do programa, no caso o "nome" e a "idade".
console.log('');
console.log('');
const c2 = process.argv.slice(2);
console.log('íNDICE "2" - Parte 3 do vetor process.argv: Os ARGUMENTOS');
console.log(c2);
console.log('----------');
console.log();
// --------------------------

// Looping para ler os argumentos passados:
console.log('Leitura dos Argumentos:')
console.log('***********************')
console.log();
for (let i = 2; i < process.argv.length; i++) {
    console.log("Argumento " + (i-1) + "-)" + process.argv[i] );
    console.log( "Elementos.........: " + process.argv[i].split("=") );
    console.log( "Nome do argumento.: " + process.argv[i].split("=")[0] );
    console.log( "Valor do argumento: " + process.argv[i].split("=")[1] );
    console.log("-----");
}

console.log();
const c_nome = process.argv[2].split("=")[1];
const c_idade = process.argv[3].split("=")[1];
const c_celular = process.argv[4].split("=")[1];
// Exibindo numa string formatada:
console.log(c_nome);
console.log(c_idade);
console.log(c_celular);
console.log(`O nome dele é ${c_nome}, sua idade é ${c_idade} e seu celular é o ${c_celular}`);

// --------------------------

// Outra forma de pegar os argumentos passados:
console.log("----------");
console.log();
console.log("Outro jeito de pegar os argumentos...");

// Pega segundo elemento que contém os argumentos.
const args = process.argv.slice(2);
console.log(args);
// Pegando o nome
// Primeiro argumento-índice "0" e 
// a segunda posição do elemento-índice "1"
const nome = args[0].split("=")[1];
console.log(nome);

// Pegando a idade
// Segundo argumento-índice "1" e 
// a segunda posição do elemento-índice "1"
const idade = args[1].split("=")[1];
console.log(idade);

// Pegando o celular
// Terceiro argumento-índice "2" e 
// a segunda posição do elemento-índice "1"
const celular = args[2].split("=")[1];
console.log(celular);
