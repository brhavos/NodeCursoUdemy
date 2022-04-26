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
console.log('Argumentos:')
console.log('**********')
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
// Exibindo numa string formatada:
console.log('O nome dele é ${c_nome}.');

// --------------------------
